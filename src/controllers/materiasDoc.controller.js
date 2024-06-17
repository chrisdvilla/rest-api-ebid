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
    //const [rows] = await pool.query("SELECT * FROM paralelo JOIN curso ON paralelo.id_materia = curso.id JOIN horario ON horario.id_set = paralelo.id");
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
  const [rows] = await pool.query("SELECT * FROM paralelo JOIN curso ON paralelo.id_materia = curso.id JOIN horario ON horario.id_set = paralelo.id JOIN carreras_mat ON carreras_mat.id_set = paralelo.id WHERE carreras_mat.carrera = ? ", [
      req.params.carrera,
    ]);
  res.json(rows);
} catch (error) {
  return res.status(500).json({
    message: "Algo salio mal",
  });
} 

};