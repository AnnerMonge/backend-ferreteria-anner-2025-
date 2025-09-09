//Importar las dependencias necesarias
import express from 'express';
import cors from 'cors';

//Importar las rutas
import rutasCategorias from './src/routes/Categorias.routes.js';
import rutasClientes from './src/routes/Clientes.routes.js';
import rutasCompras from './src/routes/Compras.routes.js';
import rutasDetalles_compras from './src/routes/Detalles_compras.routes.js';
import rutasProductos from './src/routes/Productos.routes.js';
import rutasEmpleados from './src/routes/empleados.routes.js';
import rutasdetalles_ventas from './src/routes/detalles_ventas.routes.js';
import rutasVentas from './src/routes/Ventas.routes.js';
import rutasUsuario from './src/routes/Usuarios.routes.js';



// Crear la aplicación de Express
const app = express();

// Habilitar CORS para cualquier origen
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json({ limit: '10mb' })); //10 MB
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Rutas
app.use('/api', rutasCategorias);
app.use('/api', rutasClientes);
app.use('/api', rutasCompras);
app. use('/api', rutasDetalles_compras);
app. use('/api', rutasProductos);
app. use('/api', rutasEmpleados);
app. use('/api', rutasdetalles_ventas);
app. use('/api', rutasVentas);
app. use('/api', rutasUsuario);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({
    message: 'La ruta que ha especificado no se encuentra registrada.'
  });
});

// Exportar la aplicación
export default app;