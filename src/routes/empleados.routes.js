import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, registrarEmpleado, eliminarEmpleado, actualizarEmpleadoPatch } from '../Controller/empleados.controller.js';

const router = Router();

// Ruta para obtener todos los empleados
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener un empleado por ID
router.get('/empleado/:id_empleado', obtenerEmpleado);

//ruta para crear un nuevo empleado
router.post('/registrarempleado', registrarEmpleado);

//rutas para eliminar un empleado
 router.delete('/eliminarempleado/:id_empleado', eliminarEmpleado);

 //ruta para actualizar un empleado parcialmente (PATCH)
router.patch ('/actualizarempleadoPatch/:id_empleado',actualizarEmpleadoPatch)

export default router; // Exportar el router para usarlo en app.js