import { pool } from "../../db_connection.js";

// Obtener todos detalle_venta
export const obtenerdetallesventas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM detalles_ventas");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};
// Obtener un detalle_venta por ID
export const obtenerdetalleventa = async (req, res) => {
  try {
    const id_detalle_venta = req.params.id_detalle_venta;
    const [result] = await pool.query(
      "SELECT * FROM detalles_ventas WHERE id_detalle_venta= ?",
      [id_detalle_venta]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_detalle_venta} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de los detalles_venta.",
    });
  }
};

// Crear un nuevo detalle_venta
export const registrardetallesventas = async (req, res) => {
  try {
    const { id_venta, id_producto, cantidad, precio_unitario } = req.body;
    const [result] = await pool.query(
      "INSERT INTO detalles_ventas (id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)",
      [id_venta, id_producto, cantidad, precio_unitario]  
    );
    res.json({
      id_detalle_venta: result.insertId,
      id_venta,
      id_producto,
      cantidad,
      precio_unitario
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear el detalle_venta.",
      error: error,
    });
  }
};

//Controlador de eliminación de datos de detalles_venta
export const eliminardetalleventa = async (req, res) => {
  try {
    const id_detalle_venta = req.params.id_detalle_venta;
    const [result] = await pool.query("DELETE FROM detalles_ventas WHERE id_detalle_venta = ?", [id_detalle_venta]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar los datos. ID ${id_detalle_venta} no encontrado.`,
      });
    }
     //repuesta sin contenido para indicar que la eliminación fue exitosa
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al eliminar el detalle_venta.", 
      error: error,
    });
  }
};
// Actualizar una detalle_venta parcialmente (PATCH)
export const actualizarDetalle_VentaPatch = async (req, res) => {
  try {
    const id_detalle_venta = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE detalles_ventas SET ? WHERE id_detalle_venta = ?',[datos, id_detalle_venta ]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje:' detalle_venta con . ID ${id_detalle_venta} no encontrado.'
      });
    }
    res.status(200).json({
      mensaje: 'detalle_venta con ID ${id_detalle_venta} actualizada correctamente.'
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Ha ocurrido un error al actualizar el detalle_venta.',
      error: error
    });
  }
};
