console.log(document)

const titulo =document.getElementById("titulo");
console.log(titulo)
titulo.textContent="Laboratorio Interdimensional"

const estado= document.getElementById("estado");
const boton =document.getElementById("botonPortal");

boton.addEventListener("click",function(){
    console.log("Ejecutando click");
    estado.textContent="¡Portal Activado!";
    console.log("Texto cambiado en el elemento estado1");
    alert("Proceso de activacion del portal terminado")
})

const estadito=document.getElementById("morti")
const botonsito=document.getElementById("mortiAventura");
botonsito.addEventListener("click",function(){
    estadito.textContent="Listo para la aventura"
    alert("Morty ya esta listo para la aventura")

});
let viajes=0;
const contador=document.getElementById("contador");
const nuevoViaje=document.getElementById("nuevoViaje");
nuevoViaje.addEventListener("click",function(){
    viajes+=1;
    contador.textContent=viajes
})