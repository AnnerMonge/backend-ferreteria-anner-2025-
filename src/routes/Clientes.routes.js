import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarCliente, eliminarCliente,  actualizarClientePatch } from  '../Controller/Clientes.controller.js';

const router = Router();

// Ruta para obtener todas las clientes
router.get('/clientes', obtenerClientes);

// Ruta para obtener un cliente por ID
router.get('/cliente/:id_cliente', obtenerCliente);

// rutas para registrar un  cliente
router.post('/registrarcliente', registrarCliente);

//rutas para eliminar un cliente
 router.delete('/eliminarcliente/:id_cliente', eliminarCliente);

 //ruta para actualizar un cliente
 router. patch('/actualizarClientePatch/:id_cliente',actualizarClientePatch);
 
export default router; // Exportar el router para usarlo en app.js