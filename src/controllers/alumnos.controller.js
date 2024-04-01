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
        message: "Alumno no encontrado",
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
    fecha_registro, 
    fotocopia_ci,
    fotocopia_pas_extranjero, 
    fotocopia_tit_bachiler, 
    certificado_habilitacion, 
    certificado_nacimiento, 
    comp_deposito, 
    fotos_carnet, 
    formulario_ebid, 
    info_medico, 
    entrega_folder, 
    fotocopia_admi_especial, 
    fotocopia_congelacion, 
    comp_multa,
    comp_matriculas_ant,
    req_conv_estudios, 
    anio_admision, 
    estado, 
    carrera_hab, 
    carrera_elegida,
    modalidad
       } = req.body;
  console.log(req.body)

  const isoDate_fecha_registro = new Date(fecha_registro);
  const mySQLDateString_fecha_registro = isoDate_fecha_registro.toJSON().slice(0, 19).replace('T', ' ');

  const isoDate_fecha_nacimiento = new Date(fecha_nacimiento);
  const mySQLDateString_fecha_nacimiento = isoDate_fecha_nacimiento.toJSON().slice(0, 19).replace('T', ' ');
  
 
  try { 
      const [rows] = await pool.query(
     /*  "INSERT INTO alumno (num_registro,foto,nombre, apellido_paterno, apellido_materno,fecha_nacimiento,ci, expedido,  lugar_nacimiento, genero, telefono, email ,gestion, direccion, contacto, edad,fecha_registro, fotocopia_ci,fotocopia_pas_extranjero, fotocopia_tit_bachiler, certificado_habilitacion, certificado_nacimiento, comp_deposito, fotos_carnet, formulario_ebid, info_medico, entrega_folder, fotocopia_admi_especial, fotocopia_congelacion, comp_multa,comp_matriculas_ant,req_conv_estudios, anio_admision, estado, carrera_hab, carrera_elegida, modalidad ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?')",
      [num_registro,
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
        email ,
        gestion, 
        direccion, 
        contacto, 
        edad,
        mySQLDateString_fecha_registro, 
        fotocopia_ci,
        fotocopia_pas_extranjero, 
        fotocopia_tit_bachiler, 
        certificado_habilitacion, 
        certificado_nacimiento, 
        comp_deposito, 
        fotos_carnet, 
        formulario_ebid, 
        info_medico, 
        entrega_folder, 
        fotocopia_admi_especial, 
        fotocopia_congelacion, 
        comp_multa,
        comp_matriculas_ant,
        req_conv_estudios, 
        anio_admision, 
        estado, 
        carrera_hab, 
        carrera_elegida,
      modalidad]
    );  */

    "INSERT INTO alumno (num_registro,foto,nombre, apellido_paterno, apellido_materno,fecha_nacimiento, ci, expedido, lugar_nacimiento,genero, telefono, email,gestion, direccion, contacto,edad,fecha_registro,fotocopia_ci,fotocopia_pas_extranjero,fotocopia_tit_bachiler, certificado_habilitacion, certificado_nacimiento, comp_deposito, fotos_carnet, formulario_ebid, info_medico, entrega_folder, fotocopia_admi_especial, fotocopia_congelacion, comp_multa, comp_matriculas_ant, req_conv_estudios, anio_admision, estado, carrera_hab, carrera_elegida, modalidad) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [num_registro,
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
      mySQLDateString_fecha_registro,
      fotocopia_ci,
      fotocopia_pas_extranjero,
      fotocopia_tit_bachiler,
      certificado_habilitacion,
      certificado_nacimiento,
      comp_deposito,
      fotos_carnet,
      formulario_ebid, 
      info_medico, 
      entrega_folder,
      fotocopia_admi_especial,
      fotocopia_congelacion,
      comp_multa,
      comp_matriculas_ant,
      req_conv_estudios,
      anio_admision, 
      estado, 
      carrera_hab,
      carrera_elegida,
      modalidad
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
      //message: "Algo salio mal", 
      message: error.message,
    });
  }
};

export const updateAlumno = async (req, res) => {
  const { id } = req.params;
  const { num_registro,
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
    fecha_registro, 
    fotocopia_ci,
    fotocopia_pas_extranjero, 
    fotocopia_tit_bachiler, 
    certificado_habilitacion, 
    certificado_nacimiento, 
    comp_deposito, 
    fotos_carnet, 
    formulario_ebid, 
    info_medico, 
    entrega_folder, 
    fotocopia_admi_especial, 
    fotocopia_congelacion, 
    comp_multa,
    comp_matriculas_ant,
    req_conv_estudios, 
    anio_admision, 
    estado, 
    carrera_hab, 
    carrera_elegida,
  modalidad } = req.body;
  console.log(req.body)
  const isoDate_fecha_registro = new Date(fecha_registro);
  const mySQLDateString_fecha_registro = isoDate_fecha_registro.toJSON().slice(0, 19).replace('T', ' ');

  const isoDate_fecha_nacimiento = new Date(fecha_nacimiento);
  const mySQLDateString_fecha_nacimiento = isoDate_fecha_nacimiento.toJSON().slice(0, 19).replace('T', ' '); 

  try {
    const [result] = await pool.query(
      "UPDATE alumno SET num_registro = IFNULL(?,num_registro), foto = IFNULL(?,foto), nombre = IFNULL(?,nombre), apellido_paterno = IFNULL(?,apellido_paterno), apellido_materno = IFNULL(?,apellido_materno), fecha_nacimiento = IFNULL(?,fecha_nacimiento), ci = IFNULL(?,ci), expedido = IFNULL(?,expedido),lugar_nacimiento = IFNULL(?,lugar_nacimiento), genero = IFNULL(?,genero), telefono = IFNULL(?,telefono),  email = IFNULL(?,email),  gestion = IFNULL(?,gestion), direccion = IFNULL(?,direccion), contacto = IFNULL(?,contacto),  edad = IFNULL(?,edad), fecha_registro = IFNULL(?,fecha_registro),   fecha_registro = IFNULL(?,fecha_registro), fotocopia_ci = IFNULL(?,fotocopia_ci), fotocopia_pas_extranjero = IFNULL(?,fotocopia_pas_extranjero), fotocopia_tit_bachiler = IFNULL(?,fotocopia_tit_bachiler),  certificado_habilitacion = IFNULL(?,certificado_habilitacion),   certificado_nacimiento = IFNULL(?,certificado_nacimiento),  comp_deposito = IFNULL(?,comp_deposito),  fotos_carnet = IFNULL(?,fotos_carnet),  formulario_ebid = IFNULL(?,formulario_ebid), info_medico = IFNULL(?,info_medico),  entrega_folder = IFNULL(?,entrega_folder),  fotocopia_admi_especial = IFNULL(?,fotocopia_admi_especial), fotocopia_congelacion = IFNULL(?,fotocopia_congelacion),  comp_multa = IFNULL(?,comp_multa),  comp_matriculas_ant = IFNULL(?,comp_matriculas_ant), req_conv_estudios = IFNULL(?,req_conv_estudios),   anio_admision = IFNULL(?,anio_admision),  estado = IFNULL(?,estado), carrera_hab = IFNULL(?,carrera_hab),  carrera_elegida = IFNULL(?,carrera_elegida), modalidad = IFNULL(?,modalidad), WHERE id = ?",
      [num_registro,
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
        fecha_registro, 
        fotocopia_ci,
        fotocopia_pas_extranjero, 
        fotocopia_tit_bachiler, 
        certificado_habilitacion, 
        certificado_nacimiento, 
        comp_deposito, 
        fotos_carnet, 
        formulario_ebid, 
        info_medico, 
        entrega_folder, 
        fotocopia_admi_especial, 
        fotocopia_congelacion, 
        comp_multa,
        comp_matriculas_ant,
        req_conv_estudios, 
        anio_admision, 
        estado, 
        carrera_hab, 
        carrera_elegida,
        modalidad,
         id]
    ); 

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Alumno no encontrado",
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
        message: "Alumno no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

