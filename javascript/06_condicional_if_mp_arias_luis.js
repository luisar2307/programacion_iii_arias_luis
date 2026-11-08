// Autor: Luis Arias
console.log("Condicionales If");
let temperatura =38;
if(temperatura>37){
    console.log("El paciente tiene fiebre");
}

console.log("Condicionales If-Else Dos caminos");
let citasDisponibles=3;
if(citasDisponibles>0){
    console.log("Hay citas disponibles para hoy");
}else{
    console.log("No hay citas disponibles para hoy");
}

console.log("Condicionales If-Else If Varios caminos");
let temperaturaPaciente = 39; // Simulando el valor medido por el termometro

if(temperaturaPaciente>40){
    console.log("Fiebre muy alta: el paciente pasa de inmediato a urgencias");
}else if(temperaturaPaciente>38){
    console.log("Fiebre alta: se administra un antipiretico y se observa al paciente");
}else if(temperaturaPaciente>37){
    console.log("Febricula: se recomienda reposo y abundante agua");
}else{
    console.log("Temperatura normal");
}

console.log("Condicionales If Anidados");
let doctoresDisponibles = 2;
let consultoriosLibres = 0;

if(doctoresDisponibles>0){
    if(consultoriosLibres>0){
        console.log("Hay doctor y consultorio libre para atender al paciente");
    }else{
        console.log("Hay doctor disponible pero no hay consultorio libre");
    }
}

console.log("condicionales If con Operadores Logicos");
let tieneSeguro = true;
let tieneCita = true;

if(tieneSeguro && tieneCita){
    console.log("El paciente tiene seguro y cita, puede pasar a consulta");
}else{
    console.log("Al paciente le falta el seguro o la cita para pasar a consulta");
}

console.log("Control de admision a consulta");
let consultoriosLibres2 = 3;
let doctoresDisponibles2 = 2;
let pacienteConCita = true;
let seguroVigente = "no";
let documentosCompletos = "si";

if(
consultoriosLibres2>0 && doctoresDisponibles2>0 && pacienteConCita && seguroVigente==="si" && documentosCompletos==="si")
{
    console.log("Consulta Autorizada");
}else{
    if(consultoriosLibres2<1)
        {
            console.log("No hay consultorios libres");
        }
        if(doctoresDisponibles2<1)
        {
            console.log("No hay doctores disponibles");
        }
        if(!pacienteConCita)
        {
            console.log("El paciente no tiene cita");
        }
        if(seguroVigente!=="si")
        {
            console.log("El seguro del paciente no esta vigente");
        }
        if(documentosCompletos!=="si")
        {
            console.log("Faltan documentos del paciente");
        }
        if(consultoriosLibres2<1 && doctoresDisponibles2<1 && !pacienteConCita && seguroVigente!=="si" && documentosCompletos!=="si")
        {
            console.log("No hay consultorios ni doctores, el paciente no tiene cita, su seguro no esta vigente y faltan documentos");
        }
}


console.log("Evaluacion de la jornada medica");
let citasAgendadas = 20;
let citasAtendidas = 17;
let pacienteGrave = true;
let equipoAveriado = false;
let puntaje=0;
let porcentajeAtendidas = (citasAtendidas/citasAgendadas)*100;
let citasPendientes = citasAgendadas-citasAtendidas;
let doctoresDisponibles3 = 2;
let consultoriosLibres3 = 3;
let seguroVigente3 = "si";
let documentosCompletos3 = "si";

console.log("Resultados de la Jornada");
if(porcentajeAtendidas>80){
    console.log("Se atendio mas del 80% de las citas");
    puntaje+=10;
}else if(porcentajeAtendidas>50){
    console.log("Se atendio mas del 50% de las citas");
    puntaje+=5;
}else if(porcentajeAtendidas>20){
    console.log("Se atendio menos del 50% de las citas");
    puntaje+=2;
}else if(porcentajeAtendidas>0){
    console.log("Se atendio menos del 20% de las citas");
    puntaje+=1;
}else{
    console.log("No se atendio ninguna cita");
}

console.log("Puntaje por citas atendidas:",puntaje);
console.log("Citas pendientes:",citasPendientes);
if(pacienteGrave){
    console.log("Hubo un paciente grave durante la jornada");
    puntaje-=5;
}
if(equipoAveriado){
    console.log("El equipo medico esta averiado");
    puntaje-=5;
}

console.log("Puntaje final:",puntaje);

console.log("Autorizacion de cierre de la jornada");
if(
doctoresDisponibles3>0 && consultoriosLibres3>0 && seguroVigente3==="si" && documentosCompletos3==="si" && puntaje>=0)
{
    console.log("Jornada cerrada con exito");
}
