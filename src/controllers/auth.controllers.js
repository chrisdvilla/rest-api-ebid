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
        token,
        id_alumno,
        id_docente,
        subRole,
        
        } = req.body;

      console.log(req.body)

      const passwordHash = await encrypt(password)
     
      try { 
          const [rows] = await pool.query(
        "INSERT INTO user (img, username, password, firstName, lastName,role,token, id_alumno, id_docente, subRole) VALUES (?,?,?,?,?,?,?,?,?,?)",
        [
            img,
            username,
            passwordHash,
            firstName,
            lastName,
            role,
            token,
            id_alumno,
            id_docente,
            subRole
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

export const getUserAlumno = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM user WHERE id_alumno = ?", [
      req.params.id_alumno,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Estudiante no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getUserDocente = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM user WHERE id_docente = ?", [
      req.params.id_docente,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Docente no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const updateUserAlumno = async (req, res) => {
  const { id } = req.params;
  const { 
    //img,
    username,
    password,
    firstName,
    lastName,
    role,
    token,
    id_alumno,
    id_docente,
    subRole

        } = req.body;

    const passwordHash = await encrypt(password)

  try {
    const [result] = await pool.query('UPDATE user SET username = IFNULL(?,username), password = IFNULL(?,password), firstName = IFNULL(?,firstName), lastName = IFNULL(?,lastName), role = IFNULL(?,role), token = IFNULL(?,token), id_alumno = IFNULL(?,id_alumno), id_docente = IFNULL(?,id_docente), subRole = IFNULL(?,subRole) WHERE id = ?'
  , [
    username,
    passwordHash,
    firstName,
    lastName,
    role,
    token,
    id_alumno,
    id_docente,
    subRole,
    id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Usuario no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM user WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 


export const updateUserDocente = async (req, res) => {
  const { id } = req.params;
  const { 
    //img,
    username,
    password,
    firstName,
    lastName,
    role,
    token,
    id_alumno,
    id_docente,
    subRole

        } = req.body;

    const passwordHash = await encrypt(password)

  try {
    const [result] = await pool.query('UPDATE user SET username = IFNULL(?,username), password = IFNULL(?,password), firstName = IFNULL(?,firstName), lastName = IFNULL(?,lastName), role = IFNULL(?,role), token = IFNULL(?,token), id_alumno = IFNULL(?,id_alumno), id_docente = IFNULL(?,id_docente), subRole = IFNULL(?,subRole) WHERE id = ?'
  , [
    username,
    passwordHash,
    firstName,
    lastName,
    role,
    token,
    id_alumno,
    id_docente,
    subRole,
    id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Usuario no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM user WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

