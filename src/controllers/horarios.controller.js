import { pool } from "../db.js";

export const getHorarios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM horario");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getHorario = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM horario WHERE id_set = ?", [
      req.params.id_set,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Horario no encontrado",
      });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const createHorario = async (req, res) => {
  const { 
    gestion,
    dia,
    hora_ini,
    hora_fin,
    sala,
    id_set

    
       } = req.body;
  console.log(req.body)
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO horario (gestion, dia, hora_ini, hora_fin, sala,id_set) VALUES (?,?,?,?,?,?)",
    [
        gestion,
        dia,
        hora_ini,
        hora_fin,
        sala,
        id_set
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


 export const updateHorario = async (req, res) => {
  const { id } = req.params;
  const { 
    gestion,
    dia,
    hora_ini,
    hora_fin,
    sala,
    id_set

    } = req.body;

       
  try {
    const [result] = await pool.query('UPDATE horario SET gestion = IFNULL(?,gestion), dia = IFNULL(?,dia), hora_ini = IFNULL(?,hora_ini), hora_fin = IFNULL(?,hora_fin), sala = IFNULL(?,sala), id_set = IFNULL(?,id_set) WHERE id = ?'
  , [
    gestion,
    dia,
    hora_ini,
    hora_fin,
    sala,
    id_set,
    id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Horario no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM horario WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const deleteHorario = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM horario WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Horario no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 
};

