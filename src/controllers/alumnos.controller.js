import { pool } from "../db.js";

export const getAlumnos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM alumno");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getAlumno = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM alumno WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Estudiante no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getAlumnoInfo = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM alumno JOIN admision ON admision.id_alumno = alumno.id  WHERE alumno.id = ? ", [
      
      req.params.id_alumno,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Estudiante no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const createAlumno = async (req, res) => {
  const { 
    num_registro,
    foto,
    nombre, 
    apellido_paterno, 
    apellido_materno,
    fecha_nacimiento,
    ci, 
    expedido,  
    lugar_nacimiento, 
    genero, 
    telefono, 
    email ,
    gestion, 
    direccion, 
    contacto, 
    edad,
    fecha_registro
       } = req.body;
  console.log(req.body)

  const isoDate_fecha_registro = new Date(fecha_registro);
  //const mySQLDateString_fecha_registro = isoDate_fecha_registro.toJSON().slice(0, 19).replace('T', ' ');

  const isoDate_fecha_nacimiento = new Date(fecha_nacimiento);
  const mySQLDateString_fecha_nacimiento = isoDate_fecha_nacimiento.toJSON().slice(0, 19).replace('T', ' ');
  
 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO alumno (num_registro,foto,nombre, apellido_paterno, apellido_materno,fecha_nacimiento, ci, expedido, lugar_nacimiento,genero, telefono, email,gestion, direccion, contacto,edad) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      num_registro,
      foto,
      nombre,
      apellido_paterno, 
      apellido_materno,
      mySQLDateString_fecha_nacimiento,
      ci,
      expedido,
      lugar_nacimiento,
      genero, 
      telefono,
      email,
      gestion, 
      direccion, 
      contacto,
      edad,
      //fecha_registro
      ]
  ); 

    res.send({
      id: rows.insertId,
      nombre,
      apellido_paterno,
      apellido_materno,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal", 
      //message: error.message,
    });
  }
};


export const updateAlumno = async (req, res) => {
  const { id } = req.params;
  const { 
        num_registro,
        nombre, 
        apellido_paterno, 
        apellido_materno,
        ci, 
        expedido,  
        lugar_nacimiento,
        genero, 
        telefono, 
        email,
        gestion, 
        direccion, 
        contacto,
        edad,
        fecha_nacimiento  

        } = req.body;

        const isoDate_fecha_nacimiento = new Date(fecha_nacimiento);
        const mySQLDateString_fecha_nacimiento = isoDate_fecha_nacimiento.toJSON().slice(0, 19).replace('T', ' '); 

  try {
    const [result] = await pool.query('UPDATE alumno SET num_registro = IFNULL(?,num_registro), nombre = IFNULL(?,nombre), apellido_paterno = IFNULL(?,apellido_paterno), apellido_materno = IFNULL(?,apellido_materno), ci = IFNULL(?,ci), expedido = IFNULL(?,expedido), lugar_nacimiento = IFNULL(?,lugar_nacimiento), genero = IFNULL(?,genero), telefono = IFNULL(?,telefono),  email = IFNULL(?,email), gestion = IFNULL(?,gestion), direccion = IFNULL(?,direccion), contacto = IFNULL(?,contacto), edad = IFNULL(?,edad), fecha_nacimiento = IFNULL(?,fecha_nacimiento) WHERE id = ?'
  , [
      num_registro,
      nombre,
      apellido_paterno,
      apellido_materno,
      ci,
      expedido,
      lugar_nacimiento,
      genero, 
      telefono, 
      email,
      gestion, 
      direccion, 
      contacto,
      edad,
      mySQLDateString_fecha_nacimiento,
      id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Estudiante no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM alumno WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const deleteAlumno = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM alumno WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Estudiante no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

