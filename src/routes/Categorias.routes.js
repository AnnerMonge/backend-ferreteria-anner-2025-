
import { Router } from 'express';
import  {obtenerCategorias,  obtenerCategoria,registrarCategoria, eliminarCategoria,  actualizarCategoriaPatch } from '../Controller/Categorias.controller.js';

const router = Router();

// Ruta para obtener todas las categorías
router.get('/Categorias', obtenerCategorias);

// Ruta para obtener una categoría por ID
router.get('/Categoria/:id_categoria', obtenerCategoria);

// rutas para regsitrar una  categoria
router.post('/registrarCategoria', registrarCategoria);

// rutas para eliminar una categoria
 router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);

 // Ruta para actualizar una Categoria
 router.patch('/actualizarCategoriaPatch/:id_categoria',actualizarCategoriaPatch)

export default router; // Exportar el router para usarlo en app.js