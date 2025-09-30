import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra, eliminarCompra,  actualizarCompraPatch } from '../Controller/Compras.controller.js';

const router = Router();

// Ruta para obtener todas las cpmpras
router.get('/Compras', obtenerCompras);

// Ruta para obtener una compra por ID
router.get('/compra/:id_compra', obtenerCompra);

// rutas para regsitrar una  compra
router .post('/registrarcompra', registrarCompra);

// rutas para eliminar una compra
 router.delete('/eliminarcompra/:id_compra', eliminarCompra);

 // ruta para actualizar una compra 
 router.patch('/actualizarCompraPatch/:id_compra',actualizarCompraPatch);
 
export default router; // Exportar el router para usarlo en app.js