import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarCliente  } from '../Controller/Clientes.Controller.js';

const router = Router();

// Ruta para obtener todas las clientes
router.get('/clientes', obtenerClientes);

// Ruta para obtener un cliente por ID
router.get('/cliente/:id_cliente', obtenerCliente);

// rutas para registrar un  cliente
router.post('/registrarcliente', registrarCliente);

export default router; // Exportar el router para usarlo en app.js