import { pool } from "../db.js";

export const getAlumnoMat = async (req, res) => {
    console.log(req.params);
   try {
     const [rows] = await pool.query("SELECT DISTINCT nombre, apellido_paterno, apellido_materno, num_registro, id_alumno, id_materia, materias_reg.codigo_mat, alumno.nombre, alumno.apellido_paterno FROM alumno JOIN materias_reg ON materias_reg.id_alumno = alumno.id  WHERE materias_reg.id_materia = ? ", [
        req.params.id_materia,
      ]); 
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 

};

