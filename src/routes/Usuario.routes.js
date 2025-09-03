import { Router } from 'express';
import { obtenerUsuarios } from '../Controller/Usuarios.controller.js';

const router = Router();

// Ruta para obtener todos los Usuarios
router.get('/usuarios', obtenerUsuarios);

export default router; // Exportar el router para usarlo en app.js