import { Router } from 'express';
import { obtenerEmpleados } from '../Controller/empleados.controller.js';

const router = Router();

// Ruta para obtener todos los empleados
router.get('/empleados', obtenerEmpleados);

export default router; // Exportar el router para usarlo en app.js