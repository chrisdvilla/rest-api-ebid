import { pool } from "../db.js";

export const getAdmitidos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM alumno JOIN admision ON alumno.id = admision.id_alumno WHERE admision.admitido = 1");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};
