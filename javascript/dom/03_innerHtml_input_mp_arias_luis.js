// Autor: Luis Arias
const mensaje=document.getElementById("mensaje");
const saludo=document.getElementById("saludo");

mensaje.textContent="Mensaje del doctor: tome reposo y abundante agua";
saludo.innerHTML="<h1>Bienvenido al Portal de Consultas Medicas</h1>";

const ficha=document.getElementById("ficha");
ficha.innerHTML=`
<h1>Juan Pérez</h1>
<p>Edad: 34 años</p>
<p>Especialidad: Medicina General</p>
<p>Estado: En consulta</p>`;

const nombre=document.getElementById("nombre");
const saludar=document.getElementById("saludar");
const registrar=document.getElementById("registrar");
registrar.addEventListener("click",function(){
    console.log("Ejecutando click", nombre.value);
    saludar.textContent="Paciente registrado: "+nombre.value
});
