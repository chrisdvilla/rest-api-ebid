import { pool } from "../db.js";

export const getSalas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM sala");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getSala = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM sala WHERE id = ?", [
      req.params.id,
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

export const createSala = async (req, res) => {
  const { 
    nombre, 
    designacion, 
    capacidad,
    gestion,
    descripcion
    
       } = req.body;
  console.log(req.body)
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO sala (nombre, designacion, capacidad, gestion, descripcion) VALUES (?,?,?,?,?)",
    [
        nombre, 
        designacion, 
        capacidad,
        gestion,
        descripcion
      ]
  ); 

    res.send({
      id: rows.insertId,
      nombre,
      capacidad,
    });
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};


 export const updateSala = async (req, res) => {
  const { id } = req.params;
  const { 
    nombre, 
    designacion, 
    capacidad,
    gestion,
    descripcion

    } = req.body;

       
  try {
    const [result] = await pool.query('UPDATE sala SET nombre = IFNULL(?,nombre), designacion = IFNULL(?,designacion), capacidad = IFNULL(?,capacidad), gestion = IFNULL(?,gestion), descripcion = IFNULL(?,descripcion) WHERE id = ?'
  , [
    nombre, 
    designacion, 
    capacidad,
    gestion,
    descripcion,
    id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Sala no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM sala WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const deleteSala = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM sala WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Sala no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 
};

