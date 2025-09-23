import { pool } from "../../db_connection.js";

// Obtener todos los empleado
export const obtenerEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM empleados");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};

// Obtener un empleado por ID
export const obtenerEmpleado = async (req, res) => {
  try {
    const id_empleado = req.params.id_empleado;
    const [result] = await pool.query("SELECT * FROM empleados WHERE id_empleado= ?",[id_empleado]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_empleado} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de los empleados.",
    });
  }
};
// Crear un nuevo empleado
export const registrarEmpleado = async (req, res) => {
  try { 
    const {  primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular,  cargo, fecha_contratacion } = req.body;
    const [result] = await pool.query(
      "INSERT INTO empleados ( primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular,  cargo, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)",   
      [ primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular,  cargo, fecha_contratacion]);
    res.json({
      id_empleado: result.insertId,
      primer_nombre, 
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      celular, 
      cargo, 
      fecha_contratacion
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear el empleado.",
      error: error,
    });
  }  
};

//Controlador de eliminación de datos de empleados
export const eliminarEmpleado = async (req, res) => {
  try {
    const id_empleado = req.params.id_empleado;
    const [result] = await pool.query("DELETE FROM empleados WHERE id_empleado = ?", [id_empleado]
    ); 
    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar los datos. ID ${id_empleado} no encontrado.`,
      });
    }
    //repuesta sin contenido para indicar que la eliminación fue exitosa
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al eliminar el empleado.",
      error: error,
    });
  }
};