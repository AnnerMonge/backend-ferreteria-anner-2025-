import { Router } from 'express';
import { obtenerVentas, obtenerVenta, registrarVenta, eliminarVenta, actualizarVentaPatch } from '../Controller/Ventas.controller.js';

const router = Router();

// Ruta para obtener todas las ventas
router.get('/Ventas', obtenerVentas);

// Ruta para obtener una venta por ID
router.get('/Venta/:id_venta', obtenerVenta);

// ruta para crear una nueva venta
  router.post('/registrarventa', registrarVenta);

//rutas para eliminar una venta
  router.delete('/eliminarventa/:id_venta', eliminarVenta);

  //ruta para actualizar una venta parcialmente (PATCH)
 router.patch ('/actualizarVentaPatch/:id_venta',actualizarVentaPatch)

export default router; // Exportar el router para usarlo en app.js
