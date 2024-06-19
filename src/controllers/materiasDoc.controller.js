import { pool } from "../db.js";

export const getMaterias = async (req, res) => {
    console.log(req.params);
   try {
    const [rows] = await pool.query("SELECT * FROM paralelo JOIN curso ON paralelo.id_materia = curso.id  WHERE paralelo.id_docente = ? ", [
        req.params.id_docente,
      ]);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 

};

export const getAllMaterias = async (req, res) => {
    console.log("materias");
    console.log(req.body)
   try {
    const [rows] = await pool.query("SELECT * FROM paralelo JOIN curso ON paralelo.id_materia = curso.id JOIN horario ON horario.id_set = paralelo.id JOIN carreras_mat ON carreras_mat.id_set = paralelo.id");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 

};

export const getMateriasCarrera = async (req, res) => {
  console.log(req.params);
 try {
  const [rows] = await pool.query("SELECT DISTINCT codigo_mat, paralelo, id_materia, predecesor_mat, nombre_mat, id_docente, paralelo.id, detalle_mat, docente, paralelo.gestion, horario.id_set  FROM paralelo JOIN curso ON paralelo.id_materia = curso.id JOIN horario ON horario.id_set = paralelo.id JOIN carreras_mat ON carreras_mat.id_set = paralelo.id WHERE carreras_mat.carrera = ?", [
    req.params.carrera,
    ]);
  res.json(rows);
} catch (error) {
  return res.status(500).json({
    message: "Algo salio mal",
  });
} 

};

export const getMateriasHorarios = async (req, res) => {
  console.log(req.params);
  try {
    const [rows] = await pool.query("SELECT * FROM horario WHERE id_set = ?", [
      req.params.id_paralelo,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Registro no encontrado",
      });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal",
      message: error.message,
    });
  }
}; 