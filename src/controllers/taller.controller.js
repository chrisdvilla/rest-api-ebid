import { pool } from "../db.js";

export const getTallers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM taller");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};


export const getTaller = async (req, res) => {
  console.log(req.params)
 
  try {
    
     const [rows] = await pool.query("SELECT * FROM taller WHERE id_alumno = ?", [
      req.params.id_alumno,
    ]); 

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Taller by alumno no encontrado",
      });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const getTallerById = async (req, res) => {
  console.log(req.params)
 
  try {
    
     const [rows] = await pool.query("SELECT * FROM taller WHERE id = ?", [
      req.params.id_taller,
    ]); 

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Taller no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 



export const createTaller = async (req, res) => {
  const { 
   
    gestion,
    nombre_taller,
    inicio,
    fin,
    id_alumno,

       } = req.body;
  console.log(req.body)
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO taller ( gestion, nombre_taller, inicio, fin, id_alumno) VALUES (?,?,?,?,?)",
    [
        gestion,
        nombre_taller,
        inicio,
        fin,
        id_alumno,
      ]
  ); 

    res.send({
      id: rows.insertId,
      gestion,
      id_alumno,
    });
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};


 export const updateTaller = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const { 
    gestion,
    nombre_taller,
    inicio,
    fin,
    id_alumno,

        } = req.body;

  try {
    const [result] = await pool.query('UPDATE taller SET gestion = IFNULL(?,gestion), nombre_taller = IFNULL(?,nombre_taller), inicio = IFNULL(?,inicio),  fin = IFNULL(?,fin), id_alumno = IFNULL(?,id_alumno) WHERE id = ?'
  , [
    gestion,
    nombre_taller,
    inicio,
    fin,
    id_alumno,
    id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Taller no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM taller WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const deleteTaller = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM taller WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Taller no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 
};


export const getTalleresLista = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM alumno JOIN taller ON alumno.id = taller.id_alumno");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({
        message: "Algo salio mal",
      });
    }
  };