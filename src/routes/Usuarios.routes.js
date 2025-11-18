import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, registrarUsuario, eliminarUsuario, actualizarUsuarioPatch,verificarUsuario } from '../Controller/Usuarios.controller.js';



const router = Router();

// Ruta para obtener todos los Usuarios
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener un Usuario por ID
router.get('/usuario/:id_usuario', obtenerUsuario);

// ruta para crear un nuevo Usuario
 router.post('/registrarusuario', registrarUsuario);

 //ruta para eliminar un Usuario por ID
 router.delete('/eliminarusuario/:id_usuario', eliminarUsuario);

 router.post('/ verificarUsuario', verificarUsuario);

 //ruta para actualizar un Usuario parcialmente (PATCH)
 router.patch ('/actualizarUsuarioPatch/:id_usuario',actualizarUsuarioPatch);
 
export default router; // Exportar el router para usarlo en app.js