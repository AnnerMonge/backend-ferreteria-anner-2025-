import { Router } from 'express';
import { obtenerdetallesventas, obtenerdetalleventa,registrardetallesventas  } from '../Controller/detalles_ventas.controller.js';

const router = Router();

// Ruta para obtener todos los Detalles_venta
router.get('/detalles_ventas', obtenerdetallesventas);

// Ruta para obtener un detalle_venta por ID
router.get('/detalle_venta/:id_detalle_venta', obtenerdetalleventa);

//rutas para crear un detalle_venta
router.post('/registrardetalles_venta', registrardetallesventas);

export default router; // Exportar el router para usarlo en app.js