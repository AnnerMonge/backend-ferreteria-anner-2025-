import { Router } from 'express';
import { obtenerdetallesventas, obtenerdetalleventa,registrardetallesventas, eliminardetalleventa, actualizarDetalle_VentaPatch  } from '../Controller/detalles_ventas.controller.js';

const router = Router();

// Ruta para obtener todos los Detalles_venta
router.get('/detalles_ventas', obtenerdetallesventas);

// Ruta para obtener un detalle_venta por ID
router.get('/detalle_venta/:id_detalle_venta', obtenerdetalleventa);

//rutas para crear un detalle_venta
router.post('/registrardetalles_venta', registrardetallesventas);

// rutas para eliminar un detalle_venta
 router.delete('/eliminardetalle_venta/:id_detalle_venta', eliminardetalleventa);

 //ruta para actualizar un detalle_venta
  router.patch ('/actualizarDetalle_VentaPatch/:id_detalle_venta',actualizarDetalle_VentaPatch)

export default router; // Exportar el router para usarlo en app.js