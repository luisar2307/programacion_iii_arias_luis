console.log("Abriendo portal de la nave..")
let portal=1;
while(portal<=5){
    console.log("Abriendo Portal "+portal+" abierto");
    portal++;
}
console.log("Todos los portales han sido abiertos.");

console.log("Cuenta regresiva despegue de la nave de Morty");
let i=10;
while(i>=0){
    console.log("Falta " +i+" segundos para el despegue de la nave de Morty");
    i--;
}

console.log("Recargar la pistola de portales de Rick");
let energia=50;
let recarga=10;
let totalRecarga=0;
while(energia<100){
    energia += recarga;
    totalRecarga += recarga;
    console.log("Recargando la pistola de portales de Rick: "+energia+"%");
}
console.log("Pistola de portales completamente recargada despues de " +totalRecarga+ "recargas.");

console.log("Consumo de combustible de la nave de Rick");
let combustible=100;
let consumo=45;
let viajes=0;
while(combustible>=consumo){
    combustible -= consumo;
    viajes++;
    console.log("Viaje "+viajes+" realizado. Combustible restante: "+combustible+"%");
    if(combustible <50){
        console.log("Advertencia: Combustible bajo. Combustible restante: "+combustible+"%");
    }
}
console.log("La nave de Rick no puede realizar mas viajes. Combustible restante: "+combustible+"%");
console.log("Total de viajes realizados: "+viajes);

console.log("Activar portales de dimensiones peligrosas con Do .... While");
let energiaPortal=50;
do{
    console.log("Activando portal de dimension peligrosa. Energia restante: "+energiaPortal+"%");
    energiaPortal -= 15;
} while(energiaPortal > 0);
console.log("No hay suficiente energia para activar mas portales de dimensiones peligrosas. Energia restante: "+energiaPortal+"%");

console.log("Comprar una pistola de portales para Rick");
let ahorro=80;
let meta=500;
let ahorroSemanal=70;
let semanas=0;
do{
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana "+semanas+": Ahorro actual: "+ahorro+"$");
} while(ahorro < meta);
console.log("Rick ha alcanzado su meta de ahorro. Total ahorrado: "+ahorro+"$");