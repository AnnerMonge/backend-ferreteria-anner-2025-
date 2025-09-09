import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, registrarEmpleado } from '../Controller/empleados.controller.js';

const router = Router();

// Ruta para obtener todos los empleados
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener un empleado por ID
router.get('/empleado/:id_empleado', obtenerEmpleado);

//ruta para crear un nuevo empleado
router.post('/registrarempleado', registrarEmpleado);

export default router; // Exportar el router para usarlo en app.js