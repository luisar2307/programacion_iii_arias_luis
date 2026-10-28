// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    // Evaluamos la ruta solicitada por el cliente usando condicionales if
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('¡Bienvenido a la página principal!\n');
    } 
    else if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        // Simulamos una respuesta en formato JSON
        const datos = { mensaje: 'Hola desde la API', estado: 'activo' };
        res.end(JSON.stringify(datos));
    } 
    else {
        // Si la ruta no coincide con ninguna de las anteriores (Error 404)
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página no encontrada (404)\n');
    }
});

// Inicia el servidor local en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000');
});