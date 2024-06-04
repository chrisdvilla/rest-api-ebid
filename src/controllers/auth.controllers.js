import { pool } from "../db.js";
import { encrypt, compare } from "../helpers/handleBcrypt.js";

//TODO: Login!
export const loginCtrl = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM user WHERE username = ?", [
        req.body.username,
      ]);
  
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Usuario no encontrado",
        });

        let pass = rows[0].password;
            

        console.log(pass);

        const checkPassword = await compare(req.body.password, pass)
        console.log(checkPassword);

         if (checkPassword) { //TODO Contraseña es correcta!
            /* res.send({
                data: req.body,
                //tokenSession
            }) */
            res.json(rows[0]);
            //return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        } 
  
      //res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({
        message: "Algo salio mal",
      });
    }
  }; 

//TODO: Registramos usuario!
export const registerCtrl = async (req, res) => {
    console.log("Register");
    const { 
        img,
        username,
        password,
        firstName,
        lastName,
        role,
        token
        
        } = req.body;

      console.log(req.body)

      const passwordHash = await encrypt(password)
     
      try { 
          const [rows] = await pool.query(
        "INSERT INTO user (img, username, password, firstName, lastName,role,token) VALUES (?,?,?,?,?,?,?)",
        [
            img,
            username,
            passwordHash,
            firstName,
            lastName,
            role,
            token
          ]
      ); 
    
        res.send({
          id: rows.insertId,
          username,
          passwordHash,
        });
      } catch (error) {
        return res.status(500).json({
          //message: "Algo salio mal", 
          message: error.message,
        });
      }


}


