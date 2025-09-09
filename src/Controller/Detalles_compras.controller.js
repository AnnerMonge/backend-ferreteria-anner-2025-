import { pool } from "../../db_connection.js";

// Obtener todos los detalles_compra
export const obtenerDetallecompras = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Detalles_compras");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};

// Obtener un detalle_compra por ID
export const obtenerDetallecompra = async (req, res) => {
  try { 
    const id_detalle_compra = req.params.id_detalle_compra;
    const [result] = await pool.query( "SELECT * FROM Detalles_compras WHERE id_detalle_compra= ?", [id_detalle_compra]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_detalle_compra} no encontrado.`,
      });
    }
    res.json(result[0]);
  }
  catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de los detalles_compra.",
    });
  } 
};  

// Crear un nuevo detalle_compra
export const registrarDetallecompra = async (req, res) => {
  try {
    const { id_compra, id_producto, cantidad, precio_unitario } = req.body; 
    const [result] = await pool.query(
      "INSERT INTO Detalles_compras (id_compra, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)",
      [id_compra, id_producto, cantidad, precio_unitario] 
    );
    res.json({
      id_detalle_compra: result.insertId,
      id_compra,
      id_producto,
      cantidad,
      precio_unitario
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear el detalle_compra.",
      error: error,
    });
  }
};