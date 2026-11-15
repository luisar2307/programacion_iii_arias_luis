// Autor: Luis Arias
console.log("Ciclo For");
for(let i=1; i<=5; i++){
    console.log("Llamando al paciente numero: "+i);
}

console.log("Cuenta regresiva para la jornada de vacunacion");
for(let i=10; i>=0;i--){
    if(i===0){
        console.log("Inicia la jornada de vacunacion");
    }else{
        console.log("Faltan " +i+" minutos para la jornada de vacunacion");
    }
}

console.log("Nivel del tanque de oxigeno");
let nivelTanque=50;
for(let i=0; i<=100;i+=10){
    if(nivelTanque>=i){
        console.log("Nivel del tanque de oxigeno: "+i+"%");
    }
}

let consumoPorConsulta=10;
let totalConsumido=0;
for(let consulta=1; consulta<=5;consulta++){
    totalConsumido += consumoPorConsulta;
    console.log("Consulta " +consulta);
    console.log("Total de guantes usados hasta ahora: " +totalConsumido+" unidades");
}
console.log("Total de guantes usados: "+totalConsumido+ " unidades.");

console.log("Promedio de pacientes atendidos por dia");
let totalPacientes=0;
let dias=7;
for(let dia=1;dia<=dias;dia++){
    let pacientes=dia*5+5;
    totalPacientes += pacientes;
    console.log("Dia "+dia+": "+pacientes+" pacientes atendidos");
}
console.log("Total de pacientes atendidos " +totalPacientes);
console.log("Promedio de pacientes atendidos por dia: "+(totalPacientes/dias).toFixed(2));

console.log("Consultorios ocupados y libres");
let libres=0;
let ocupados=0;
for(let consultorio=1;consultorio<=10;consultorio++){
    if(consultorio%2===0){
        console.log("Consultorio "+consultorio+" esta ocupado");
        ocupados++;
    }else{
        console.log("Consultorio "+consultorio+" esta libre");
        libres++;
    }
}
console.log("Total de consultorios libres: "+libres);
console.log("Total de consultorios ocupados: "+ocupados);

console.log("Pacientes atendidos en la semana");
let atendidosPorDia=[35,60,45,80,70,90,55];
let total=0;
let diasConMeta=0;
for(let i=0;i<atendidosPorDia.length;i++){
    total +=atendidosPorDia[i];
    console.log("Dia "+(i+1)+": "+atendidosPorDia[i]+" pacientes atendidos");
    if(atendidosPorDia[i]>=50){
        diasConMeta++;
    }else{
        console.log("Dia " +(i+1)+ " no cumplio la meta, se atendieron menos de 50 pacientes");
    }
}

console.log("Total de pacientes atendidos: "+total);
console.log("Numero de dias que cumplieron la meta: " +diasConMeta);

console.log("Recorrer los doctores del portal con for....of");
const doctores=["Dra. Ana Torres","Dr. Carlos Mena","Dra. Lucia Vera","Dr. Pedro Salas","Dra. Marta Ruiz"];
for(const doctor of doctores){
    console.log("Doctor: "+doctor);
}

let consultorio={
    nombre:"Consultorio 101",
    pacientesAtendidos:25,
    minutosPorConsulta:30,
    equipo:["Estetoscopio","Tensiometro","Termometro"]
}

console.log("Recorrer las propiedades del consultorio con for....in");
for(let propiedad in consultorio){
    console.log(propiedad+": "+consultorio[propiedad]);
    if(propiedad==="equipo"){
        console.log("Equipo del consultorio: ");
        for(let instrumento of consultorio[propiedad]){
            console.log("-" +instrumento);
        }
    }
}

for (let instrumento of consultorio["equipo"]){
    console.log("Instrumento: "+instrumento);
}

let jornadas=[
    {nombre: "Jornada 1", atendidos:90, meta:100,doctor:"Dra. Ana Torres"},
    {nombre: "Jornada 2", atendidos:80, meta:100,doctor:"Dr. Carlos Mena"},
    {nombre: "Jornada 3", atendidos:95, meta:100,doctor:"Dra. Lucia Vera"}
];

let exitosas=0;
for(let jornada of jornadas){
    let porcentaje=(jornada.atendidos/jornada.meta)*100;
    console.log(jornada.nombre+ " a cargo de " +jornada.doctor+ " con un " +porcentaje.toFixed(2)+"% de la meta de pacientes");
    if(porcentaje>=90){
        exitosas++;
    }else{
        console.log(jornada.nombre+ " no fue exitosa, se atendio menos del 90% de la meta");
    }
}
console.log("Total de jornadas exitosas: "+exitosas);
