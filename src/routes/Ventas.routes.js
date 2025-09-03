import { Router } from 'express';
import { obtenerVentas } from '../Controller/Ventas.controller.js';

const router = Router();

// Ruta para obtener todas las ventas
router.get('/Ventas', obtenerVentas);

export default router; // Exportar el router para usarlo en app.js