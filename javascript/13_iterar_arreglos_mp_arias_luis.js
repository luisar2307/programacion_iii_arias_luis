// Autor: Luis Arias
let pulsaciones=[72,80,95,88];
let posicion=2;
let nuevoValor=75;
for (let i=0; i< pulsaciones.length; i++){
    console.log("Medicion ", i);
    console.log("Pulsaciones por minuto: ", pulsaciones[i]);
    if(posicion>= 0 && posicion<pulsaciones.length){
        pulsaciones[posicion]= nuevoValor
    }else{
        console.log("Posicion no valida");
    }
}
console.log(pulsaciones);

let pacientes =[
    {id:1,nombre:"Juan Pérez", temperatura:36,edad:34},
    {id:2,nombre:"María Gómez",temperatura:38,edad:8},
    {id:3,nombre:"Pedro Ruiz",temperatura:39,edad:67},
];
for (let paciente of pacientes){
    console.log("ID: ", paciente.id);
    console.log("Nombre: ", paciente.nombre);
    console.log("Temperatura: ", paciente.temperatura);
    console.log("Edad: ", paciente.edad);
}

console.log("El consultorio organiza las consultas de la semana");
let consultasDoctores=[
    {doctor:"Dra. Ana Torres",pacientes:[8,10,12]},
    {doctor:"Dr. Carlos Mena",pacientes:[6,9,9]},
    {doctor:"Dra. Lucia Vera",pacientes:[5,7,8]},
];
let totalPacientes=0;
for(let consulta of consultasDoctores){
    totalPacientes=0;
    console.log("Doctor: ", consulta.doctor);
    for(let cantidad of consulta.pacientes){
        console.log("Pacientes atendidos en el dia ",cantidad);
        totalPacientes+=cantidad;
    }
    console.log("Total de pacientes atendidos por ", consulta.doctor,"son : ",totalPacientes)
}

let consultasOriginales=[30,50,70,40];
let consultasDobles = consultasOriginales.map(elemento=>{
    return elemento * 2
});
console.log("Consultas esperadas si se duplica la demanda:", consultasDobles);
let altaDemanda= consultasOriginales.filter(consultas=>consultas>=50);
console.log("Semanas con alta demanda (50 o mas consultas):", altaDemanda);
let resultado =consultasOriginales.reduce((acumulador,elemento)=>{
    return acumulador+elemento;
});
console.log("Total de consultas del mes:", resultado);
