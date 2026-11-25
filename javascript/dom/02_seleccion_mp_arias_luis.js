// Autor: Luis Arias
const temperatura=document.getElementById("temperatura");
const consultorio=document.getElementById("consultorio");
const estadoConsultorio=document.getElementById("estadoConsultorio");

temperatura.textContent="Temperatura: 36.5 grados"
consultorio.textContent="Consultorio: 101"
estadoConsultorio.textContent="Estado: abierto"

// seleccion a travez de una clase
const doctor=document.querySelector(".doctor");
doctor.textContent="Dra. Ana Torres - Medicina General (de turno)";

const h2Objeto=document.querySelector("h2");
h2Objeto.textContent="Preparando consultorio";

const sala=document.querySelector("#sala");
sala.textContent="Preparando sala de espera";

const estadoPaciente=document.querySelector("#paciente .estado");
estadoPaciente.textContent="Listo para pasar a consulta";

const especialidades=document.querySelectorAll(".especialidad")
console.log(especialidades)
console.log(especialidades.length)
console.log(especialidades[0].textContent);
console.log(especialidades[1].textContent);
console.log(especialidades[2].textContent);
console.log(especialidades[3].textContent);
console.log(especialidades[4].textContent);
console.log(especialidades[5].textContent);

console.log("Recorrer a traves del for")
for(let i=0; i<especialidades.length;i++){
    console.log(especialidades[i].textContent);
}

console.log("Con for Each");
especialidades.forEach(function(especialidad){
    console.log(especialidad.textContent);
});

console.log("Con for of");
for(let especialidad of especialidades){
    console.log(especialidad.textContent);
}
