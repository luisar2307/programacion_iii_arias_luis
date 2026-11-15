// Autor: Luis Arias
console.log("Portal de Consultas Medicas: Funciones en JavaScript")

function abrirConsultorio() {
    console.log("El consultorio esta abierto, bienvenido ");
}

abrirConsultorio();

function atenderPaciente(nombre){
    console.log(nombre + " esta siendo atendido en el consultorio");
}
atenderPaciente("Juan Pérez");

function cargarTanqueOxigeno(nivelActual,carga){
    let nivelTotal = nivelActual+carga;
    if (nivelTotal>100){
        nivelTotal=100;
    }
    console.log("Tanque de oxigeno recargado. Nivel: " + nivelTotal + "%");
        return nivelTotal
}

let nivelTanque=50;
nivelTanque=cargarTanqueOxigeno(nivelTanque ,30);
nivelTanque = cargarTanqueOxigeno(nivelTanque, 40);

console.log("Calcular descuentos en la consulta");
function calcularDescuento(precio, descuento){
    let precioFinal = precio - (precio*(descuento/100));
    return precioFinal;
}
let precioOriginal =50;
let porcentajeDescuento=20;
let precioConDescuento = calcularDescuento(precioOriginal,porcentajeDescuento);
console.log("Precio Original: " + precioOriginal + ", Precio con descuento para adultos mayores: " + precioConDescuento);

function evaluarPaciente(saturacion,sintomasControlados,totalSintomas){
    let porcentajeControlados = (sintomasControlados / totalSintomas) *100;
    if(saturacion<90){
        console.log("Advertencia: Saturacion de oxigeno baja. Nivel actual: "+ saturacion +"%");
    }
    if(porcentajeControlados>=70){
        console.log("El paciente evoluciona bien, se controlo el "+ porcentajeControlados + "% de los sintomas");
    } else {
        console.log("El paciente necesita mas tratamiento, solo se controlo el "+ porcentajeControlados + "% de los sintomas");
    }
}
evaluarPaciente(88,3,5);
evaluarPaciente(97,4,5);

const pacientesPorDia =[10,15,20];
let totalPacientes = 0;

for (let i = 0; i < pacientesPorDia.length; i++) {
  totalPacientes += pacientesPorDia[i];
}

console.log(`Total de pacientes atendidos en la semana: ${totalPacientes}`); 
