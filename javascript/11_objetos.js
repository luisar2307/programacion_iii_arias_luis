let nombre="Rick";
let edad =70;
let planeta="Tierra C-137";
let energia=100;
let averiada =false;

let nave ={
    nombre:"Rick",
    edad:70,
    planeta: "Tierra C-137",
    energia:100,
    averiada:false
}

console.log("Informacion de la nave de Rick");
console.log("Nombre del piloto: " + nave.nombre);
console.log("Edad del piloto: "+ nave.edad);
console.log("planeta de origen: "+nave.planeta);
console.log("niel de energia: "+nave.energia +"%");
console.log("estado de la nave: "+nave["averiada"]);

console.log("agregar una nueva propiedad a la nave de rick");
nave.modelo="Nave espacial x-2000";
console.log("Modelo de la nave: "+nave.modelo);
nave["capacidadPasajeros"]=5;
console.log("Capacidad de pasajeros: "+ nave["capacidadPasajeros"]);
console.log("Nave de Rick", nave);

console.log("Actualizar el nivel de energia de la nave de Rick");
nave.energia=80;
console.log("Nuevo nivel de energia: " +nave.energia +"%");
nave["averiada"]=true;
console.log("Nuevo estado de la nave: " + (nave.averiada ? "averiada" : "Operativa"));
console.log("Nave de Rick ", nave);
console.log("eliminar una propiedad de la nave de Rick");
delete nave.capacidadPasajeros;
console.log("Propideda 'capacidadPasajeros' eliminada");
console.log("Nave de Rick", nave);

console.log("Recorrer las propiedades de la nave de Rick");
for(let propiedad in nave){
    console.log(propiedad + ": " + nave[propiedad]);
}

let laboratorio ={
    misiles:10,
    drogas:15,
    cristales:49
}

console.log("total de unidades en el laboratorio");
for( let TotalUnidades in laboratorio){
    console.log(TotalUnidades + laboratorio[TotalUnidades] );
}
let total =laboratorio.misiles+ laboratorio.drogas+laboratorio.cristales;
console.log("total de unidades del laboratorio: " +total );