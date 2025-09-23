import { Router } from 'express';
import { obtenerProductos, obtenerProducto, registrarProducto, eliminarProducto } from '../Controller/Productos.controller.js';

const router = Router();

// Ruta para obtener todos los Productos
router.get('/Productos', obtenerProductos);

// Ruta para obtener un Producto por ID
router.get('/Producto/:id_producto', obtenerProducto);

// Ruta para crear un nuevo Producto
 router.post('/registrarproducto', registrarProducto);

 //ruta para eliminar un Producto por ID
 router.delete('/eliminarproducto/:id_producto', eliminarProducto);


export default router; // Exportar el router para usarlo en app.js