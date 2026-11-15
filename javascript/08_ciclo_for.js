console.log("Ciclo For");
for(let i=1; i<=5; i++){
    console.log("Iteraciòn nùmero: "+i);
}

console.log("Cuenta regresiva despegue de la nave de Morty");
for(let i=10; i>=0;i--){
    if(i===0){
        console.log("Despegue de la nave de Morty");
    }else{
        console.log("Falta " +i+" segundos para el despegue de la nave de Morty");
    }
}

console.log("Nivel de energia de Rick");
let energia=50;
for(let i=0; i<=100;i+=10){
    if(energia>=i){
        console.log("Nivel de energia de Rick: "+i+"%");
    }
}

let consumoPorViaje=10;
let totalConsumido=0;
for(let viaje=1; viaje<=5;viaje++){
    totalConsumido += consumoPorViaje;
    console.log("Viaje " +viaje);
    console.log("Total consumido hasta ahora: " +totalConsumido+" unidades de combustible");
}
console.log("Total consumido: "+totalConsumido+ "unidades.");

console.log("Promedio de los cristales");
let totalCristales=0;
let dias=7;
for(let dia=1;dia<=dias;dia++){
    let cristales=dia*5+5;
    totalCristales += cristales;
    console.log("Dia "+dia+": "+cristales+" cristales recolectados");
}
console.log("Total de cristales recolectados " +totalCristales);
console.log("Promedio de cristales recolectados por dia: "+(totalCristales/dias).toFixed(2));

console.log("Dimensiones Peligrosas");
let seguras=0;
let peligrosas=0;
for(let dimension=1;dimension<=10;dimension++){
    if(dimension%2===0){
        console.log("Dimension "+dimension+" es peligrosa");
        peligrosas++;
    }else{
        console.log("Dimension "+dimension+" es segura");
        seguras++;
    }
}
console.log("Total de dimensiones seguras: "+seguras);
console.log("Total de dimensiones peligrosas: "+peligrosas);

console.log("Recoleccion de Cristales de Morty");
let cristales=[35,60,45,80,70,90,55];
let total=0;
let viajesExitosos=0;
for(let i=0;i<cristales.length;i++){
    total +=cristales[i];
    console.log("Viaje "+(i+1)+": "+cristales[i]+" cristales recolectados");
    if(cristales[i]>=50){
        viajesExitosos++;
    }else{
        console.log("Viaje" +(i+1)+ "no fue exitoso, se recolectaron menos de 50 cristales");
    }
}

console.log("Total de cristales recolectados: "+total);
console.log("Numero de viajes exitosos:" +viajesExitosos);

console.log("Recorrer Personajes de Rick y Morty con for....of");
const personajes=["Rick","Morty","Summer","Beth","Jerry"];
for(const personaje of personajes){
    console.log("Personaje: "+personaje);
}

let nave={
    nombre:"Nave de Rick",
    combustible:100,
    velocidad:500,
    tripulacion:["Rick","Morty","Summer"]
}

console.log("Recorrer Personajes de Rick y Morty con for....in");
for(let propiedad in nave){
    console.log(propiedad+": "+nave[propiedad]);
    if(propiedad==="tripulacion"){
        console.log("Tripulacion de la nave: ");
        for(let tripulante of nave[propiedad]){
            console.log("-" +tripulante);
        }
    }
}

for (let tripulante of nave["tripulacion"]){
    console.log("Tripulante: "+tripulante);
}

let misiones=[
    {nombre: "Mision 1", cristales:90, meta:100,personaje:"Rick"},
    {nombre: "Mision 2", cristales:80, meta:100,personaje:"Morty"},
    {nombre: "Mision 3", cristales:95, meta:100,personaje:"Summer"}
];

let exitosas=0;
for(let mision of misiones){
    let porcentaje=(mision.cristales/mision.meta)*100;
    console.log(mision.nombre+ " completada por" +mision.personaje+ "con un" +porcentaje.toFixed(2)+"% de cristales recolectados");
    if(porcentaje>=90){
        exitosas++;
    }else{
        console.log(mision.nombre+ " no fue exitosa, se recolectaron menos del 90% de cristales");
    }
}
console.log("Total de misiones exitosas: "+exitosas);

