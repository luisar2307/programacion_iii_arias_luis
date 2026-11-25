// Autor: Luis Arias
console.log(document)

const titulo =document.getElementById("titulo");
console.log(titulo)
titulo.textContent="Consultorio Medico del Portal"

const estado= document.getElementById("estado");
const boton =document.getElementById("botonConsultorio");

boton.addEventListener("click",function(){
    console.log("Ejecutando click");
    estado.textContent="¡Consultorio Abierto!";
    console.log("Texto cambiado en el elemento estado");
    alert("Consultorio abierto: ya se pueden atender pacientes")
})

const estadoPaciente=document.getElementById("estadoPaciente")
const botonPaciente=document.getElementById("botonPaciente");
botonPaciente.addEventListener("click",function(){
    estadoPaciente.textContent="Listo para la consulta"
    alert("El paciente ya esta listo para pasar a consulta")

});
let atendidos=0;
const contador=document.getElementById("contador");
const nuevoPaciente=document.getElementById("nuevoPaciente");
nuevoPaciente.addEventListener("click",function(){
    atendidos+=1;
    contador.textContent=atendidos
})
