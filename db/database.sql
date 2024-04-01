CREATE DATABASE IF NOT EXIST ebid_db;

USE ebid_db;

CREATE TABLE alumno(
    id INT(11) NOT NULL AUTO_INCREMENT,
    num_registro VARCHAR(45) DEFAULT NULL,
    foto VARCHAR(45) DEFAULT NULL,
    nombre VARCHAR(45) DEFAULT NULL,
    apellido_paterno VARCHAR(45) DEFAULT NULL,
    apellido_materno VARCHAR(45) DEFAULT NULL,
    fecha_nacimiento DATETIME DEFAULT NULL,
    ci INT(15) DEFAULT NULL,
    expedido  VARCHAR(5) DEFAULT NULL,
    lugar_nacimiento VARCHAR(255) DEFAULT NULL,
    genero VARCHAR(254) DEFAULT NULL,
    telefono INT(255) DEFAULT NULL,
    email VARCHAR(319) DEFAULT NULL,
    gestion INT(5) DEFAULT NULL,
    direccion VARCHAR(700) DEFAULT NULL,
    contacto VARCHAR(700) DEFAULT NULL,
    edad INT(5) DEFAULT NULL,
    fecha_registro DATETIME DEFAULT NULL,
    fotocopia_ci VARCHAR(254) DEFAULT NULL,
    fotocopia_pas_extranjero VARCHAR(254) DEFAULT NULL,
    fotocopia_tit_bachiler VARCHAR(254) DEFAULT NULL,
    certificado_habilitacion VARCHAR(254) DEFAULT NULL,
    certificado_nacimiento VARCHAR(254) DEFAULT NULL,
    comp_deposito VARCHAR(254) DEFAULT NULL,
    fotos_carnet VARCHAR(254) DEFAULT NULL,
    formulario_ebid VARCHAR(254) DEFAULT NULL,
    info_medico VARCHAR(254) DEFAULT NULL,
    entrega_folder VARCHAR(254) DEFAULT NULL,
    fotocopia_admi_especial VARCHAR(254) DEFAULT NULL,
    fotocopia_congelacion VARCHAR(254) DEFAULT NULL,
    comp_multa VARCHAR(254) DEFAULT NULL,
    comp_matriculas_ant VARCHAR(254) DEFAULT NULL,
    req_conv_estudios VARCHAR(254) DEFAULT NULL,
    anio_admision VARCHAR(254) DEFAULT NULL,
    estado VARCHAR(254) DEFAULT NULL,
    carrera_hab VARCHAR(254) DEFAULT NULL,
    carrera_elegida VARCHAR(254) DEFAULT NULL,
    modalidad VARCHAR(45) DEFAULT NULL,

    PRIMARY KEY (id)
)

DESCRIBE alumno;