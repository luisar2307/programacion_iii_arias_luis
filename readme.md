Repositorio Oficial - Programación III 🚀

👤 Autor

Estudiante: Arias Luis

Materia: Programación III

Institución: Universidad UTE

Descripción: Repositorio académico centralizado para el desarrollo de prácticas, talleres y proyectos integradores correspondientes a la materia de Programación III, abarcando desde los fundamentos del desarrollo web moderno hasta arquitecturas robustas full-stack con TypeScript, NestJS y ReactJS.

📚 Índice de Contenidos

Introducción al Desarrollo Web

HTML (HyperText Markup Language)

CSS (Cascading Style Sheets)

Lenguajes de Programación y Tipado

JavaScript (JS)

TypeScript (TS)

Ecosistema Full-Stack Moderno

NestJS (Backend Framework)

ReactJS (Frontend Library)

Estructura del Repositorio

1. Introducción al Desarrollo Web

HTML

Es el lenguaje de marcado estándar utilizado para estructurar y dar significado semántico al contenido de las páginas web mediante elementos y etiquetas.

Ejemplo de código HTML básico:

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Programación III - UTE</title>
</head>
<body>
    <header>
        <h1>Bienvenido al Repositorio de Programación III</h1>
    </header>
    <main>
        <p>Este espacio contiene prácticas de desarrollo web moderno.</p>
    </main>
</body>
</html>


CSS

Es el lenguaje de hojas de estilo utilizado para describir la presentación visual, diseño, colores, fuentes y adaptabilidad responsiva de los documentos HTML.

Ejemplo de código CSS moderno:

:root {
    --primary-color: #2563eb;
    --bg-color: #f8fafc;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-color);
    color: #1e293b;
    margin: 0;
    padding: 2rem;
}

h1 {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 0.5rem;
}


2. Lenguajes de Programación y Tipado

JavaScript

Lenguaje interpretado de alto nivel que dota a las páginas web de interactividad, manipulación del DOM y procesamiento de datos en el cliente y servidor (Node.js).

Ejemplo de código JavaScript (ES6+):

// Función asíncrona para simular consumo de datos en el repositorio
const fetchRepositoryData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/github');
        const data = await response.json();
        console.log(`Usuario: ${data.login}, Repositorios públicos: ${data.public_repos}`);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
};

fetchRepositoryData();


TypeScript

Superconjunto tipado de JavaScript que añade tipado estático opcional, interfaces y decoradores, mejorando la mantenibilidad y escalabilidad del código.

Ejemplo de código TypeScript:

interface Estudiante {
    id: number;
    nombre: string;
    materia: string;
    activo: boolean;
}

const registrarEstudiante = (estudiante: Estudiante): string => {
    return `El estudiante ${estudiante.nombre} está cursando ${estudiante.materia}.`;
};

const alumno: Estudiante = {
    id: 1,
    nombre: "Luis Arias",
    materia: "Programación III",
    activo: true
};

console.log(registrarEstudiante(alumno));


3. Ecosistema Full-Stack Moderno

NestJS

Framework progresivo de Node.js diseñado para construir aplicaciones de servidor altamente escalables y eficientes, utilizando TypeScript de forma nativa e implementando patrones de arquitectura orientados a objetos y inyección de dependencias.

Ejemplo de código NestJS (Controlador y Servicio):

// users.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findUserById(Number(id));
  }
}


ReactJS

Librería de JavaScript basada en componentes y orientada al desarrollo de interfaces de usuario interactivas, dinámicas y eficientes para aplicaciones web de una sola página (SPA).

Ejemplo de código ReactJS (Componente Funcional con Hooks):

import React, { useState } from 'react';

export const ContadorMateria: React.FC = () => {
    const [sesiones, setSesiones] = useState<number>(1);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>Progreso de Clases - Programación III</h3>
            <p>Sesiones completadas: <strong>{sesiones}</strong></p>
            <button onClick={() => setSesiones(sesiones + 1)}>
                Avanzar Sesión
            </button>
        </div>
    );
};


4. Estructura del Repositorio

/
├── .gitignore          # Archivo de exclusión de dependencias y cachés
├── README.md           # Documentación principal del repositorio
├── backend-nestjs/     # Servidor API REST desarrollado con NestJS y TypeScript
└── frontend-react/     # Aplicación cliente desarrollada con ReactJS y TypeScript


Desarrollado con dedicación para la materia de Programación III.