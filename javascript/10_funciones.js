console.log("Rick y Morty: Funciones en JavaScript")

function abrirPortal() {
    console.log("Hola ");
}

abrirPortal();

function pilotoNave(nombre){
    console.log(nombre + "esta pilotando la nave");
}
pilotoNave("Rick");

function recargarPistola(energiaActual,recarga){
    let energiaTotal = energiaActual+recarga;
    if (energiaTotal>100){
        energiaTotal=100;
    }
    console.log("Pistola de portales recargada. Nivel de energìa: " + energiaTotal + "%");
        return energiaTotal
}

let energiaPistola=50;
energiaPistola=recargarPistola(energiaPistola ,30);
energiaPistola = recargarPistola(energiaPistola, 40);

console.log("Calcular descuentos interdimensionales");
function calcularDescuento(precio, descuento){
    let precioFinal = precio - (precio*(descuento/100));
    return precioFinal;
}
let precioOriginal =100;
let porcentajeDescuento=20;
let precioConDescuento = calcularDescuento(precioOriginal,porcentajeDescuento);
console.log("Precio Original: " + precioOriginal + ", Precio con descuento: " + precioConDescuento);

function evaluarCombustibleExamen(combustible,correctas,totalPreguntas){
    let porcentajeCorrectas = (correctas / totalPreguntas) *100;
    if(combustible<20){
        console.log("Advertencia: Combustible bajo. Nivel actual: "+ combustible +"%");
    }
    if(porcentajeCorrectas>=70){
        console.log("Felicidades Has aprobado el examen con un "+ porcentajeCorrectas + "% de respuestas correctas");
    } else {
        console.log("Lo siento, has reprobado el examen con un "+ porcentajeCorrectas + "");
    }
}

const cristalesPorDia =2;
let totalCristales = 0;

for (let i = 1; i < cristalesPorDia.length; i++) {
  totalCristales += cristalesPorDia[i];
}

console.log(`Total de cristales de Rick: ${totalCristales}`); 

console.log(`Total de cristales de Rick: ${totalCristales}`); 
