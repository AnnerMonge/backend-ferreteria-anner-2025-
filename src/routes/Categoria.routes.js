
import { Router } from 'express';
import  {obtenerCategorias} from '../Controller/Categoria.controller.js';
const router = Router();

// Ruta para obtener todas las categorías
router.get('/categorias', obtenerCategorias);

export default router; // Exportar el router para usarlo en app.js