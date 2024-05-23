import { pool } from "../db.js";

export const getAdmisiones = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM admision");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

/* export const getAdmision = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM admision WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Admision no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};  */

export const getAdmision = async (req, res) => {
  console.log(req.params)
 
  try {
    
     const [rows] = await pool.query("SELECT * FROM admision WHERE id_alumno = ?", [
      req.params.id_alumno,
    ]); 

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Admision by alumno no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 



export const createAdmision = async (req, res) => {
  const { 
    anio_admision,
    estado,
    modalidad,
    carrera_hab,
    carrera_elegida,
    gestion,
    nota_clasico,
    nota_contemporaneo,
    nota_bolivianas,
    admitido,
    id_alumno  
       } = req.body;
  console.log(req.body)
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO admision (anio_admision, estado, modalidad, carrera_hab, carrera_elegida, gestion, nota_clasico, nota_contemporaneo, nota_bolivianas, admitido, id_alumno) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [
        anio_admision,
        estado,
        modalidad,
        carrera_hab,
        carrera_elegida,
        gestion,
        nota_clasico,
        nota_contemporaneo,
        nota_bolivianas,
        admitido,
        id_alumno
      ]
  ); 

    res.send({
      id: rows.insertId,
      admitido,
      id_alumno,
    });
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};


 export const updateAdmision = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const { 
    anio_admision,
    estado,
    modalidad,
    carrera_hab,
    carrera_elegida,
    gestion,
    nota_clasico,
    nota_contemporaneo,
    nota_bolivianas,
    admitido,
    id_alumno,

        } = req.body;

  try {
    const [result] = await pool.query('UPDATE admision SET anio_admision = IFNULL(?,anio_admision), estado = IFNULL(?,estado), modalidad = IFNULL(?,modalidad), carrera_hab = IFNULL(?,carrera_hab), carrera_elegida = IFNULL(?,carrera_elegida), gestion = IFNULL(?,gestion), nota_clasico = IFNULL(?,nota_clasico), nota_contemporaneo = IFNULL(?,nota_contemporaneo),  nota_bolivianas = IFNULL(?,nota_bolivianas), admitido = IFNULL(?,admitido), id_alumno = IFNULL(?,id_alumno) WHERE id = ?'
  , [
    anio_admision,
    estado,
    modalidad,
    carrera_hab,
    carrera_elegida,
    gestion,
    nota_clasico,
    nota_contemporaneo,
    nota_bolivianas,
    admitido,
    id_alumno,
    id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Admision no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM admision WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const deleteAdmision = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM admision WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Admision no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 
};

