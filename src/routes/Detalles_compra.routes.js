import { Router } from 'express';
import { obtenerDetallecompras } from '../Controller/Detalles_compra.controller.js';

const router = Router();

// Ruta para obtener todos los Detalles_compras
router.get('/Detalles_compra', obtenerDetallecompras);

export default router; // Exportar el router para usarlo en app.js