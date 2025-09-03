import { Router } from 'express';
import { obtenerClientes } from '../Controller/Clientes.Controller.js';

const router = Router();

// Ruta para obtener todas las clientes
router.get('/clientes', obtenerClientes);

export default router; // Exportar el router para usarlo en app.js