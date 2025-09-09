import { Router } from 'express';
import { obtenerVentas, obtenerVenta, registrarVenta } from '../Controller/Ventas.controller.js';

const router = Router();

// Ruta para obtener todas las ventas
router.get('/Ventas', obtenerVentas);

// Ruta para obtener una venta por ID
router.get('/Venta/:id_venta', obtenerVenta);

// ruta para crear una nueva venta
  router.post('/registrarventa', registrarVenta);

export default router; // Exportar el router para usarlo en app.js
