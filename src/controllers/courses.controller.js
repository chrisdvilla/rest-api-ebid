import { pool } from "../db.js";

export const getCourses = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM curso");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getCourse = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM curso WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Curso no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const createCourse = async (req, res) => {
  const { 
    codigo_mat, 
    nombre_mat, 
    detalle_mat,
    
       } = req.body;
  console.log(req.body)
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO curso (codigo_mat, nombre_mat, detalle_mat) VALUES (?,?,?)",
    [
        codigo_mat, 
        nombre_mat, 
        detalle_mat,
      ]
  ); 

    res.send({
      id: rows.insertId,
      codigo_mat,
      detalle_mat,
    });
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};


 export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { 
    codigo_mat, 
    nombre_mat, 
    detalle_mat,

        } = req.body;

        
  try {
    const [result] = await pool.query('UPDATE curso SET codigo_mat = IFNULL(?,codigo_mat), nombre_mat = IFNULL(?,nombre_mat), detalle_mat = IFNULL(?,detalle_mat) WHERE id = ?'
  , [
    codigo_mat, 
    nombre_mat, 
    detalle_mat,
    id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Asignatura no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM curso WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const deleteCourse = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM curso WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Docente no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 
};

