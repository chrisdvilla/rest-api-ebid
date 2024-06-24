import { pool } from "../db.js";

export const getCalificacionesSegundoT = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM calificaciones_segundoT");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getCalificacionAlumnoSegundoT = async (req, res) => {
  console.log(req.params);
  try {
    const [rows] = await pool.query("SELECT * FROM calificaciones_segundoT WHERE id_alumno = ?", [
      req.params.id_alumno
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Registro no encontrado",
      });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 


export const getCalificacionDocenteSegundoT = async (req, res) => {
  console.log(req.params);
  try {
    const [rows] = await pool.query("SELECT * FROM calificaciones_segundoT WHERE id_docente = ?", [
      req.params.id_docente
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Registro docente no encontrado",
      });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const getCalificacionSegundoT = async (req, res) => {
  console.log(req.params);
  try {
    const [rows] = await pool.query("SELECT * FROM calificaciones_segundoT WHERE id_alumno = ? AND id_materia = ?", [
      req.params.id_alumno, req.params.id_materia,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Registro no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const createCalificacionSegundoT = async (req, res) => {
  const { 
    gestion,
    id_alumno,
    id_materia,
    evaluacion1,
    evaluacion2,
    notaFinal_per,
    nota_literal_per,
    obs_per,
    codigo,
    nombre,
    apellido_paterno,
    apellido_materno,
    id_docente


    
       } = req.body;
  console.log(req.body)
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO calificaciones_segundoT (gestion, id_alumno, id_materia, evaluacion1, evaluacion2, notaFinal_per, nota_literal_per, obs_per, codigo, nombre, apellido_paterno, apellido_materno, id_docente) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
       
        gestion,
        id_alumno,
        id_materia,
        evaluacion1,
        evaluacion2,
        notaFinal_per,
        nota_literal_per,
        obs_per,
        codigo,
        nombre,
        apellido_paterno,
        apellido_materno,
        id_docente
      ]
  ); 

    res.send({
      id: rows.insertId,
      notaFinal_per,
      obs_per,
    });
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};


export const updateCalificacionSegundoT = async (req, res) => {
    const { id } = req.params;
    const { 
        
        gestion,
        id_alumno,
        id_materia,
        evaluacion1,
        evaluacion2,
        notaFinal_per,
        nota_literal_per,
        obs_per,
        codigo,
        nombre,
        apellido_paterno,
        apellido_materno,
        id_docente
  
          } = req.body;
  
    try {
      const [result] = await pool.query('UPDATE calificaciones_segundoT SET  gestion = IFNULL(?,gestion), id_alumno = IFNULL(?,id_alumno), id_materia = IFNULL(?,id_materia), evaluacion1 = IFNULL(?,evaluacion1), evaluacion2 = IFNULL(?,evaluacion2), notaFinal_per = IFNULL(?,notaFinal_per), nota_literal_per = IFNULL(?,nota_literal_per), obs_per = IFNULL(?,obs_per), codigo = IFNULL(?,codigo), nombre = IFNULL(?,nombre), apellido_paterno = IFNULL(?,apellido_paterno), apellido_materno = IFNULL(?,apellido_materno), id_docente = IFNULL(?,id_docente) WHERE id = ?'
    , [

        gestion,
        id_alumno,
        id_materia,
        evaluacion1,
        evaluacion2,
        notaFinal_per,
        nota_literal_per,
        obs_per,
        codigo,
        nombre,
        apellido_paterno,
        apellido_materno,
        id_docente,
      id
    ])
  
      console.log(result);
  
      if (result.affectedRows === 0)
          return res.status(404).json({
            message: "Registro no encontrado",
          });
  
      const [rows] = await pool.query("SELECT * FROM calificaciones_segundoT WHERE id= ?", [id]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({
       //message: "Algo salio mal",
        message: error.message,
      });
    }
  }; 

