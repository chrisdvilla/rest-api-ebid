import { pool } from "../db.js";

export const getParalelos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM paralelo");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getParalelo = async (req, res) => {
    console.log(req.params);
  try {
    const [rows] = await pool.query("SELECT * FROM paralelo WHERE id_materia = ?", [
      req.params.id_materia,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Documento no encontrado",
      });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const createParalelo = async (req, res) => {
    console.log(req.params);
  const { 
    paralelo,
    docente,
    gestion,
    id_materia

       } = req.body;
  console.log(req.body)

 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO paralelo (paralelo,docente,gestion,id_materia) VALUES (?,?,?,?)",
    [
        paralelo,
        docente,
        gestion,
        id_materia
      ]
  ); 

    res.send({
      id: rows.insertId,
      gestion,
    });
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};


export const updateParalelo = async (req, res) => {
    //console.log(req.params);  
    console.log(req);  
  const { id } = req.params;
  const { 
    paralelo,
    docente,
    gestion,
    id_materia

     } = req.body;

       

  try {
    const [result] = await pool.query('UPDATE paralelo SET paralelo = IFNULL(?,paralelo), docente = IFNULL(?,docente), gestion = IFNULL(?,gestion), id_materia = IFNULL(?,id_materia) WHERE id = ?'
  , [
    paralelo,
    docente,
    gestion,
    id_materia,
      id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Paralelo no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM paralelo WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const deleteParalelo = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM paralelo WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Paralelo no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

