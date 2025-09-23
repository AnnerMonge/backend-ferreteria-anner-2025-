import { pool } from "../../db_connection.js";

// Obtener todos los Producto
export const obtenerProductos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Productos");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};

// Obtener un Producto por ID
export const obtenerProducto = async (req, res) => {
  try {
    const id_producto = req.params.id_producto;
    const [result] = await pool.query("SELECT * FROM Productos WHERE id_producto= ?",[id_producto]
    );  
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_producto} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de los Productos.",
    });
  }
};

// Crear un nuevo Producto
export const registrarProducto = async (req, res) => {
  try {
    const { nombre_producto, descripcion_producto,id_categoria, precio_unitario, stock, imagen } = req.body;  
    const [result] = await pool.query(
      "INSERT INTO Productos (nombre_producto, descripcion_producto,id_categoria, precio_unitario, stock, imagen) VALUES (?, ?, ?, ?, ?, ?)",
      [nombre_producto, descripcion_producto, id_categoria ,precio_unitario, stock, imagen]  
    );
    res.json({
      id_producto: result.insertId,
      nombre_producto, 
      descripcion_producto, 
      id_categoria,
      precio_unitario,
       stock, 
       imagen
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear el Producto.",
      error: error,
    });
  }
};

//Controlador de eliminación de datos de Productos
export const eliminarProducto = async (req, res) => {
  try {
    const id_producto = req.params.id_producto;
    const [result] = await pool.query("DELETE FROM Productos WHERE id_producto = ?", [id_producto]
    );
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar los datos. ID ${id_producto} no encontrado.`,
      });
    }
    //repuesta sin contenido para indicar que la eliminación fue exitosa
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al eliminar el Producto.",
      error: error,
    });
  }
};