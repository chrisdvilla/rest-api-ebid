import { pool } from "../db.js";

export const getCarrerasMat = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM carreras_mat");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getCarreraMat = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM carreras_mat WHERE id_set = ?", [
      req.params.id_set,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Carrera no encontrado",
      });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const createCarreraMat = async (req, res) => {
  const { 
    gestion,
    carrera,
    id_set

    
       } = req.body;
  console.log(req.body)
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO carreras_mat (gestion, carrera ,id_set) VALUES (?,?,?)",
    [
        gestion,
        carrera,
        id_set
      ]
  ); 

    res.send({
      id: rows.insertId,
      carrera,
    });
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};


 export const updateCarreraMat = async (req, res) => {
  const { id } = req.params;
  const { 
    gestion,
    carrera,
    id_set

    } = req.body;

       
  try {
    const [result] = await pool.query('UPDATE carreras_mat SET gestion = IFNULL(?,gestion), carrera = IFNULL(?,carrera), id_set = IFNULL(?,id_set) WHERE id = ?'
  , [
    gestion,
    carrera,
    id_set,
    id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Carrera no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM carreras_mat WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const deleteCarreraMat = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM carreras_mat WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Carrera no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 
};

