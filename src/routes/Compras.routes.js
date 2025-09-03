import { Router } from 'express';
import { obtenerCompras } from '../Controller/Compras.controller.js';

const router = Router();

// Ruta para obtener todas las cpmpras
router.get('/Compras', obtenerCompras);

export default router; // Exportar el router para usarlo en app.js