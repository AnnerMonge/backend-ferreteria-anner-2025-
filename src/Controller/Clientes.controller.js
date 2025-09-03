import { pool } from "../../db_connection.js";

// Obtener todos los clientes
export const obtenerClientes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Clientes");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};