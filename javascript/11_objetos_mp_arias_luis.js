// Autor: Luis Arias
let nombre="Juan Pérez";
let edad =34;
let ciudad="Quito";
let temperatura=36;
let hospitalizado =false;

let paciente ={
    nombre:"Juan Pérez",
    edad:34,
    ciudad: "Quito",
    temperatura:36,
    hospitalizado:false
}

console.log("Informacion del paciente");
console.log("Nombre del paciente: " + paciente.nombre);
console.log("Edad del paciente: "+ paciente.edad);
console.log("Ciudad de residencia: "+paciente.ciudad);
console.log("Temperatura corporal: "+paciente.temperatura +" grados");
console.log("Hospitalizado: "+paciente["hospitalizado"]);

console.log("Agregar una nueva propiedad al paciente");
paciente.tipoSangre="O+";
console.log("Tipo de sangre: "+paciente.tipoSangre);
paciente["alergias"]="Penicilina";
console.log("Alergias: "+ paciente["alergias"]);
console.log("Paciente", paciente);

console.log("Actualizar la temperatura del paciente");
paciente.temperatura=38;
console.log("Nueva temperatura: " +paciente.temperatura +" grados");
paciente["hospitalizado"]=true;
console.log("Nuevo estado del paciente: " + (paciente.hospitalizado ? "Hospitalizado" : "En casa"));
console.log("Paciente ", paciente);
console.log("Eliminar una propiedad del paciente");
delete paciente.alergias;
console.log("Propiedad 'alergias' eliminada");
console.log("Paciente", paciente);

console.log("Recorrer las propiedades del paciente");
for(let propiedad in paciente){
    console.log(propiedad + ": " + paciente[propiedad]);
}

let farmacia ={
    paracetamol:10,
    ibuprofeno:15,
    amoxicilina:49
}

console.log("Total de cajas en la farmacia");
for( let medicamento in farmacia){
    console.log(medicamento + ": " + farmacia[medicamento] );
}
let total =farmacia.paracetamol+ farmacia.ibuprofeno+farmacia.amoxicilina;
console.log("Total de cajas de la farmacia: " +total );
