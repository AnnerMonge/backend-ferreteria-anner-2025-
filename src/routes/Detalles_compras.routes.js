import { Router } from 'express';
import { obtenerDetallecompras, obtenerDetallecompra, registrarDetallecompra, eliminarDetallecompra } from '../Controller/Detalles_compras.controller.js';

const router = Router();

// Ruta para obtener todos los Detalles_compras
router.get('/Detalles_compras', obtenerDetallecompras);

// Ruta para obtener un Detalle_compra por ID
router.get('/Detalle_compra/:id_detalle_compra', obtenerDetallecompra);

//rutas para registrar un detalle_compra
router.post('/registrardetalles_compra', registrarDetallecompra);

// rutas para eliminar un detalle_compra
 router.delete('/eliminardetalle_compra/:id_detalle_compra', eliminarDetallecompra);

export default router; // Exportar el router para usarlo en app.js