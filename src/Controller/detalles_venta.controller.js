import { pool } from "../../db_connection.js";

// Obtener todos detalle_venta
export const obtenerdetallesventa = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Detalles_Venta");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};