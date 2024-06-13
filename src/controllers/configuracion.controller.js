import { pool } from "../db.js";


export const getHabilitacion = async (req, res) => {
    
    try {
        const [rows] = await pool.query("SELECT * FROM configuracion");
        res.json(rows[0]);
        console.log(rows[0]);
      } catch (error) {
        return res.status(500).json({
          message: "Algo salio mal",
        });
      }
}; 


 export const setHabilitacion = async (req, res) => {
    console.log(req.params);
  const { id } = req.params;
  const { 
    apertura_materias, 
    apertura_notas, 
    gestion

    } = req.body;

       
  try {
    const [result] = await pool.query('UPDATE configuracion SET apertura_materias = IFNULL(?,apertura_materias), apertura_notas = IFNULL(?,apertura_notas), gestion = IFNULL(?,gestion) WHERE id = ?'
  , [
    apertura_materias, 
    apertura_notas, 
    gestion,
    id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Data no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM configuracion WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 



