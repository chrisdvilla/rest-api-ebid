import { pool } from "../db.js";

export const getMateriasReg = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM materias_reg");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getMateriasRegByAlumno = async (req, res) => {
  console.log("req");
  try {
    const [rows] = await pool.query("SELECT * FROM materias_reg WHERE id_alumno = ?", [
      req.params.id_alumno,
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

export const createMateriaReg = async (req, res) => {
  const { 
    codigo_mat,
    dia,
    docente,
    gestion,
    hora_fin,
    hora_ini,
    id_alumno,
    id_materia,
    id_set,
    nombre_mat,
    paralelo,
    predecesor_mat,
    sala

    
       } = req.body;
  console.log(req.body)
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO materias_reg (codigo_mat, dia, docente, gestion, hora_fin, hora_ini, id_alumno, id_materia, id_set, nombre_mat, paralelo, predecesor_mat, sala) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      codigo_mat,
      dia,
      docente,
      gestion,
      hora_fin,
      hora_ini,
      id_alumno,
      id_materia,
      id_set,
      nombre_mat,
      paralelo,
      predecesor_mat,
      sala
      ]
  ); 

    res.send({
      id: rows.insertId,
      dia,
      hora_ini,
    });
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};


export const deleteMateriaReg = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM materias_reg WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Registro no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 
};

