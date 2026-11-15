// Autor: Luis Arias
console.log("Abriendo los consultorios de la clinica..")
let consultorio=1;
while(consultorio<=5){
    console.log("Consultorio "+consultorio+" abierto");
    consultorio++;
}
console.log("Todos los consultorios han sido abiertos.");

console.log("Cuenta regresiva para el inicio de la cirugia");
let i=10;
while(i>=0){
    console.log("Faltan " +i+" minutos para el inicio de la cirugia");
    i--;
}

console.log("Carga del desfibrilador");
let energia=50;
let recarga=10;
let totalRecarga=0;
while(energia<100){
    energia += recarga;
    totalRecarga += recarga;
    console.log("Cargando el desfibrilador: "+energia+"%");
}
console.log("Desfibrilador completamente cargado despues de agregar " +totalRecarga+ " unidades de carga.");

console.log("Consumo de suero en las consultas");
let suero=100;
let consumo=45;
let consultas=0;
while(suero>=consumo){
    suero -= consumo;
    consultas++;
    console.log("Consulta "+consultas+" realizada. Suero restante: "+suero+"%");
    if(suero <50){
        console.log("Advertencia: Suero bajo. Suero restante: "+suero+"%");
    }
}
console.log("No hay suficiente suero para otra consulta. Suero restante: "+suero+"%");
console.log("Total de consultas realizadas: "+consultas);

console.log("Aplicar las dosis de un medicamento con Do .... While");
let medicamento=60;
do{
    console.log("Aplicando dosis. Medicamento restante: "+medicamento+" ml");
    medicamento -= 15;
} while(medicamento > 0);
console.log("No hay mas medicamento para aplicar. Medicamento restante: "+medicamento+" ml");

console.log("Comprar un tensiometro para el consultorio");
let ahorro=80;
let meta=500;
let ahorroSemanal=70;
let semanas=0;
do{
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana "+semanas+": Ahorro actual: "+ahorro+"$");
} while(ahorro < meta);
console.log("El consultorio ha alcanzado su meta de ahorro. Total ahorrado: "+ahorro+"$");
