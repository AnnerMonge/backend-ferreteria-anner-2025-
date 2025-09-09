import { pool } from "../../db_connection.js";

// Obtener todos los Usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Usuarios");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};

// Obtener un Usuario por ID
export const obtenerUsuario = async (req, res) => {
  try {
    const id_usuario = req.params.id_usuario;
    const [result] = await pool.query("SELECT * FROM Usuarios WHERE id_usuario= ?",[id_usuario]
    );
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_usuario} no encontrado.`,
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos de los Usuarios.",
    });
  }
};

// Crear un nuevo Usuario
export const registrarUsuario = async (req, res) => {
  try {
    const { usuario,  contraseña } = req.body;
    const [result] = await pool.query(
      "INSERT INTO Usuarios (usuario,  contraseña) VALUES (?, ?)",
      [usuario,  contraseña]
    );
    res.json({
      id_usuario: result.insertId,
      usuario, 
     contraseña
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al crear el Usuario.",
      error: error,
    });
  }
};