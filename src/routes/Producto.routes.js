import { Router } from 'express';
import { obtenerProductos } from '../Controller/Productos.controller.js';

const router = Router();

// Ruta para obtener todos los Productos
router.get('/Producto', obtenerProductos);

export default router; // Exportar el router para usarlo en app.js