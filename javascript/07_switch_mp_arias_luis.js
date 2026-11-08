// Autor: Luis Arias
let consultorio =3;
switch(consultorio){
    case 1:
        console.log("Consultorio 1: Medicina General");
        break;
    case 2:
        console.log("Consultorio 2: Pediatria");
        break;
    case 3:
        console.log("Consultorio 3: Cardiologia");
        break;
    default:
        console.log("Consultorio desconocido");
}   
let rol="Doctor";
switch(rol){
    case "Doctor":
        console.log("El doctor atiende las consultas y receta los medicamentos");
        break;
    case "Enfermero":
        console.log("El enfermero toma los signos vitales del paciente");
        break;
    case "Recepcionista":
        console.log("La recepcionista registra a los pacientes y agenda las citas");
        break;
    default:
        console.log("Rol desconocido");
}

let nivelDolor=7;
switch(true){
    case nivelDolor>8:
        console.log("Dolor muy intenso: atencion inmediata");
        break;
    case nivelDolor>5:
        console.log("Dolor moderado: atencion prioritaria");
        break;
    case nivelDolor>2:
        console.log("Dolor leve: atencion normal");
        break;
    default:
        console.log("Sin dolor importante");
}

console.log("Calculadora de la farmacia");
let cajas=10;
let cantidad=5;
let operacion="suma";
switch(operacion){
    case "suma":
        console.log("Cajas totales al recibir mas:",cajas+cantidad);
        break;
    case "resta":
        console.log("Cajas restantes al entregar:",cajas-cantidad);
        break;
    case "multiplicacion":
        console.log("Cajas necesarias para varios pacientes:",cajas*cantidad);
        break;
    case "division":
        console.log("Cajas por farmacia al repartir:",cajas/cantidad);
        break;
    default:
        console.log("Operacion desconocida");
}
