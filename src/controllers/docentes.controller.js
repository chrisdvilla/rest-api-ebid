import { pool } from "../db.js";

export const getDocentes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM docente");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getDocente = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM docente WHERE id = ?", [
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

export const createDocente = async (req, res) => {
  const { 
    foto,
    nombre, 
    apellidos, 
    genero,
    mobile,
    usuario,
    password,
    designacion,
    especialidad,
    direccion,
    email,
    fecha_ingreso,
    trayectoria,
    gestion
       } = req.body;
  console.log(req.body)

  const isoDate_fecha_ingreso = new Date(fecha_ingreso);
  const mySQLDateString_fecha_ingreso = isoDate_fecha_ingreso.toJSON().slice(0, 19).replace('T', ' ');
  
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO docente (foto,nombre, apellidos, genero, mobile, usuario, password, designacion, especialidad, direccion, email, fecha_ingreso, trayectoria, gestion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
        foto,
        nombre, 
        apellidos, 
        genero,
        mobile,
        usuario,
        password,
        designacion,
        especialidad,
        direccion,
        email,
        mySQLDateString_fecha_ingreso,
        trayectoria,
        gestion
      ]
  ); 

    res.send({
      id: rows.insertId,
      nombre,
      apellidos,
    });
  } catch (error) {
    return res.status(500).json({
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};


 export const updateDocente = async (req, res) => {
  const { id } = req.params;
  const { 
      nombre, 
      apellidos, 
      genero,
      mobile,
      usuario,
      password,
      designacion,
      especialidad,
      direccion,
      email,
      fecha_ingreso,
      trayectoria,
      gestion 

        } = req.body;

        const isoDate_fecha_ingreso = new Date(fecha_ingreso);
        const mySQLDateString_fecha_ingreso = isoDate_fecha_ingreso.toJSON().slice(0, 19).replace('T', ' '); 

  try {
    const [result] = await pool.query('UPDATE docente SET nombre = IFNULL(?,nombre), apellidos = IFNULL(?,apellidos), genero = IFNULL(?,genero), mobile = IFNULL(?,mobile), usuario = IFNULL(?,usuario), password = IFNULL(?,password), designacion = IFNULL(?,designacion), especialidad = IFNULL(?,especialidad),  direccion = IFNULL(?,direccion), email = IFNULL(?,email), fecha_ingreso = IFNULL(?,fecha_ingreso), trayectoria = IFNULL(?,trayectoria), gestion = IFNULL(?,gestion) WHERE id = ?'
  , [
    nombre, 
    apellidos, 
    genero,
    mobile,
    usuario,
    password,
    designacion,
    especialidad,
    direccion,
    email,
    mySQLDateString_fecha_ingreso,
    trayectoria,
    gestion,
    id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Docente no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM docente WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const deleteDocente = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM docente WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Docente no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  } 
};

