// server.mjs
// Autor: Luis Arias
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    // Evaluamos la ruta solicitada por el cliente usando condicionales if
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('¡Bienvenido al Portal de Consultas Médicas!\n');
    } 
    else if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        // Simulamos una cita médica en formato JSON
        const datos = { paciente: 'Juan Pérez', especialidad: 'Medicina General', doctor: 'Dra. Ana Torres', estado: 'confirmada' };
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
