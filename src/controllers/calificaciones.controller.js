import { pool } from "../db.js";

export const getCalificaciones = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM calificaciones");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getCalificacionAlumno = async (req, res) => {
  console.log(req.params);
  try {
    const [rows] = await pool.query("SELECT * FROM calificaciones WHERE id_alumno = ?", [
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


export const getCalificacionDocente = async (req, res) => {
  console.log(req.params);
  try {
    const [rows] = await pool.query("SELECT * FROM calificaciones WHERE id_docente = ?", [
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

export const getCalificacion = async (req, res) => {
  console.log(req.params);
  try {
    const [rows] = await pool.query("SELECT * FROM calificaciones WHERE id_alumno = ? AND id_materia = ?", [
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

export const createCalificacion = async (req, res) => {
  const { 
    asistencia,
    gestion,
    id_alumno,
    id_materia,
    nota1,
    nota2,
    nota3,
    nota4,
    notaPro,
    nota_literal_pro,
    notaFinal,
    nota_literal,
    obs,
    segundoT,
    codigo,
    nombre,
    apellido_paterno,
    apellido_materno,
    id_docente


    
       } = req.body;
  console.log(req.body)
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO calificaciones (asistencia, gestion, id_alumno, id_materia, nota1, nota2, nota3, nota4, notaPro, nota_literal_pro, notaFinal, nota_literal, obs, segundoT, codigo, nombre, apellido_paterno, apellido_materno, id_docente) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
        asistencia,
        gestion,
        id_alumno,
        id_materia,
        nota1,
        nota2,
        nota3,
        nota4,
        notaPro,
        nota_literal_pro,
        notaFinal,
        nota_literal,
        obs,
        segundoT,
        codigo,
        nombre,
        apellido_paterno,
        apellido_materno,
        id_docente
      ]
  ); 

    res.send({
      id: rows.insertId,
      notaFinal,
      obs,
    });
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};


export const updateCalificacion = async (req, res) => {
    const { id } = req.params;
    const { 
        asistencia,
        gestion,
        id_alumno,
        id_materia,
        nota1,
        nota2,
        nota3,
        nota4,
        notaPro,
        nota_literal_pro,
        notaFinal,
        nota_literal,
        obs,
        segundoT,
        codigo,
        nombre,
        apellido_paterno,
        apellido_materno,
        id_docente
  
          } = req.body;
  
    try {
      const [result] = await pool.query('UPDATE calificaciones SET asistencia = IFNULL(?,asistencia), gestion = IFNULL(?,gestion), id_alumno = IFNULL(?,id_alumno), id_materia = IFNULL(?,id_materia), nota1 = IFNULL(?,nota1), nota2 = IFNULL(?,nota2),  nota3 = IFNULL(?,nota3), nota4 = IFNULL(?,nota4), notaPro = IFNULL(?,notaPro), nota_literal_pro = IFNULL(?,nota_literal_pro), notaFinal = IFNULL(?,notaFinal), nota_literal = IFNULL(?,nota_literal), obs = IFNULL(?,obs), segundoT = IFNULL(?,segundoT), codigo = IFNULL(?,codigo), nombre = IFNULL(?,nombre), apellido_paterno = IFNULL(?,apellido_paterno), apellido_materno = IFNULL(?,apellido_materno), id_docente = IFNULL(?,id_docente) WHERE id = ?'
    , [
        asistencia,
        gestion,
        id_alumno,
        id_materia,
        nota1,
        nota2,
        nota3,
        nota4,
        notaPro,
        nota_literal_pro,
        notaFinal,
        nota_literal,
        obs,
        segundoT,
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
            message: "Docente no encontrado",
          });
  
      const [rows] = await pool.query("SELECT * FROM docente WHERE id= ?", [id]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({
       //message: "Algo salio mal",
        message: error.message,
      });
    }
  }; 

