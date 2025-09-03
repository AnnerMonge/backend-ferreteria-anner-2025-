import { pool } from "../../db_connection.js";

// Obtener todos los detalles_compra
export const obtenerDetallecompras = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Detalles_compra");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};