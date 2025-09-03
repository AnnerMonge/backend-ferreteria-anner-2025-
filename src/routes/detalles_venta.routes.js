import { Router } from 'express';
import { obtenerdetallesventa } from '../Controller/detalles_venta.controller.js';

const router = Router();

// Ruta para obtener todos los Detalles_venta
router.get('/detalles_venta', obtenerdetallesventa);

export default router; // Exportar el router para usarlo en app.js