// Autor: Luis Arias
// CRUD de citas medicas usando un arreglo de objetos
let citas = [
    {
        id: 1,
        nombre: "Juan Pérez",
        especialidad: "Medicina General",
        estado: "Pendiente"
    },
    {
        id: 2,
        nombre: "María Gómez",
        especialidad: "Pediatria",
        estado: "Atendida"
    },
    {
        id: 3,
        nombre: "Pedro Ruiz",
        especialidad: "Cardiologia",
        estado: "Cancelada"
    },
];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const especialidad = document.getElementById("especialidad");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

function mostrarCitas() {
    contenedor.replaceChildren();
    if (cantidad) {
        cantidad.textContent = citas.length;
    }

    citas.forEach(function (cita) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = cita.nombre;

        const parrafoEspecialidad = document.createElement("p");
        parrafoEspecialidad.textContent = "Especialidad: " + cita.especialidad;

        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado de la cita: " + cita.estado;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");

        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function () {
            editarCita(cita.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function () {
            const confirmarEliminar = confirm(`¿Eliminar la cita de ${cita.nombre}?`);
            if (!confirmarEliminar) return;

            citas = citas.filter(function (c) {
                return c.id !== cita.id;
            });
            if (idEditando === cita.id) {
                limpiarFormulario();
            }
            mostrarCitas();
        });

        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoEspecialidad, parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

let idEditando = null;

function editarCita(id) {
    const cita = citas.find(function (c) {
        return c.id === id;
    });
    if (!cita) return;

    nombre.value = cita.nombre;
    especialidad.value = cita.especialidad;
    estado.value = cita.estado;
    idEditando = id;
    guardar.textContent = "Editar";
    cancelar.hidden = false;
    nombre.focus();
}

mostrarCitas();

let siguienteId = 4;

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombrePaciente = nombre.value.trim();
    const especialidadCita = especialidad.value;
    const estadoCita = estado.value;

    if (nombrePaciente === "") return;

    if (idEditando === null) {
        const nuevaCita = {
            id: siguienteId,
            nombre: nombrePaciente,
            especialidad: especialidadCita,
            estado: estadoCita,
        };
        siguienteId++;
        citas.push(nuevaCita);
    } else {
        const cita = citas.find(function (c) {
            return c.id === idEditando;
        });
        if (cita) {
            cita.nombre = nombrePaciente;
            cita.especialidad = especialidadCita;
            cita.estado = estadoCita;
        }
        idEditando = null;
        guardar.textContent = "Agregar";
        cancelar.hidden = true;
    }

    formulario.reset();
    mostrarCitas();
});

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

cancelar.addEventListener("click", function () {
    limpiarFormulario();
});
