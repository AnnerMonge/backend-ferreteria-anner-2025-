import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra } from '../Controller/Compras.controller.js';

const router = Router();

// Ruta para obtener todas las cpmpras
router.get('/Compras', obtenerCompras);

// Ruta para obtener una compra por ID
router.get('/compra/:id_compra', obtenerCompra);

// rutas para regsitrar una  compra
router .post('/registrarcompra', registrarCompra);

export default router; // Exportar el router para usarlo en app.js