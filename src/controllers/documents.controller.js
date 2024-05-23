import { pool } from "../db.js";

export const getDocumentos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM documento");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getDocumento = async (req, res) => {
    console.log(req.params);
  try {
    const [rows] = await pool.query("SELECT * FROM documento WHERE id_alumno = ?", [
      req.params.id_alumno,
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

export const createDocumento = async (req, res) => {
  const { 
    compromiso,
    gestion,
    fotocopia_ci, 
    fotocopia_pas_extranjero, 
    fotocopia_tit_bachiler,
    certificado_habilitacion,
    certificado_nacimiento, 
    comp_deposito,  
    fotos_carnet, 
    formulario_ebid, 
    info_medico, 
    entrega_folder ,
    fotocopia_admi_especial, 
    fotocopia_congelacion, 
    comp_multa, 
    comp_matriculas_ant,
    req_conv_estudios,
    id_alumno,
    completo

       } = req.body;
  console.log(req.body)

 
  try { 
      const [rows] = await pool.query(
    "INSERT INTO documento (compromiso,gestion,fotocopia_ci, fotocopia_pas_extranjero, fotocopia_tit_bachiler,certificado_habilitacion, certificado_nacimiento, comp_deposito, fotos_carnet,formulario_ebid, info_medico, entrega_folder,fotocopia_admi_especial, fotocopia_congelacion, comp_multa,comp_matriculas_ant,req_conv_estudios,id_alumno,completo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
        compromiso,
        gestion,
        fotocopia_ci, 
        fotocopia_pas_extranjero, 
        fotocopia_tit_bachiler,
        certificado_habilitacion,
        certificado_nacimiento, 
        comp_deposito,  
        fotos_carnet, 
        formulario_ebid, 
        info_medico, 
        entrega_folder ,
        fotocopia_admi_especial, 
        fotocopia_congelacion, 
        comp_multa, 
        comp_matriculas_ant,
        req_conv_estudios,
        id_alumno,
        completo
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


export const updateDocumento = async (req, res) => {
    console.log(req.params);  
  const { id } = req.params;
  const { 
    compromiso,
    gestion,
    fotocopia_ci, 
    fotocopia_pas_extranjero, 
    fotocopia_tit_bachiler,
    certificado_habilitacion,
    certificado_nacimiento, 
    comp_deposito,  
    fotos_carnet, 
    formulario_ebid, 
    info_medico, 
    entrega_folder ,
    fotocopia_admi_especial, 
    fotocopia_congelacion, 
    comp_multa, 
    comp_matriculas_ant,
    req_conv_estudios,
    id_alumno,
    completo


        } = req.body;

       

  try {
    const [result] = await pool.query('UPDATE documento SET compromiso = IFNULL(?,compromiso), gestion = IFNULL(?,gestion), fotocopia_ci = IFNULL(?,fotocopia_ci), fotocopia_pas_extranjero = IFNULL(?,fotocopia_pas_extranjero), fotocopia_tit_bachiler = IFNULL(?,fotocopia_tit_bachiler), certificado_habilitacion = IFNULL(?,certificado_habilitacion), certificado_nacimiento = IFNULL(?,certificado_nacimiento), comp_deposito = IFNULL(?,comp_deposito), fotos_carnet = IFNULL(?,fotos_carnet),  formulario_ebid = IFNULL(?,formulario_ebid), info_medico = IFNULL(?,info_medico), entrega_folder = IFNULL(?,entrega_folder), fotocopia_admi_especial = IFNULL(?,fotocopia_admi_especial), fotocopia_congelacion = IFNULL(?,fotocopia_congelacion), comp_multa = IFNULL(?,comp_multa), comp_matriculas_ant = IFNULL(?,comp_matriculas_ant), req_conv_estudios = IFNULL(?,req_conv_estudios), id_alumno = IFNULL(?,id_alumno), completo = IFNULL(?,completo) WHERE id = ?'
  , [
    compromiso,
    gestion,
    fotocopia_ci, 
    fotocopia_pas_extranjero, 
    fotocopia_tit_bachiler,
    certificado_habilitacion,
    certificado_nacimiento, 
    comp_deposito,  
    fotos_carnet, 
    formulario_ebid, 
    info_medico, 
    entrega_folder ,
    fotocopia_admi_especial, 
    fotocopia_congelacion, 
    comp_multa, 
    comp_matriculas_ant,
    req_conv_estudios,
    id_alumno,
    completo,

      id
  ])

    console.log(result);

    if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Documento no encontrado",
        });

    const [rows] = await pool.query("SELECT * FROM documento WHERE id= ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
}; 

export const deleteDocumento = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM documento WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Documento no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

