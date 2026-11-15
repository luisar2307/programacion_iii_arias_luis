// Autor: Luis Arias
console.log("Operadores Aritmeticos");
let pacientes =10;
let doctores =5;
console.log("Suma (personas en la clinica):",pacientes+doctores);
console.log("Resta (pacientes de mas):",pacientes-doctores);
console.log("Multiplicacion:",pacientes*doctores);
console.log("Division (pacientes por doctor):",pacientes/doctores);
console.log("Modulo (pacientes que sobran al repartir):",pacientes%doctores);

console.log("Operadores de Comparacion");
console.log("pacientes es igual a doctores:",pacientes==doctores);
console.log("pacientes es diferente a doctores:",pacientes!=doctores);
console.log("pacientes es mayor que doctores:",pacientes>doctores);
console.log("pacientes es menor que doctores:",pacientes<doctores);
console.log("pacientes es mayor o igual que doctores:",pacientes>=doctores);
console.log("pacientes es menor o igual que doctores:",pacientes<=doctores);

console.log("Operadores Logicos");
let hayDoctor=true;
let hayConsultorio=false;
console.log("hay doctor Y hay consultorio:",hayDoctor && hayConsultorio);
console.log("hay doctor O hay consultorio:",hayDoctor || hayConsultorio);
console.log("NO hay doctor:",!hayDoctor);

console.log("Operadores de Asignacion");
let cajas=10;
console.log("Cajas de paracetamol en bodega:",cajas);
cajas+=5;
console.log("Cajas despues de recibir 5 (cajas+=5):",cajas);
cajas-=3;
console.log("Cajas despues de entregar 3 (cajas-=3):",cajas);
cajas*=2;
console.log("Cajas despues de duplicar el stock (cajas*=2):",cajas);
cajas/=4;
console.log("Cajas por farmacia al repartir entre 4 (cajas/=4):",cajas);

console.log("Operadores de Incremento y Decremento");
let enEspera=10;
console.log("Pacientes en la sala de espera:",enEspera);
enEspera++;
console.log("Llega un paciente (enEspera++):",enEspera);
enEspera--;
console.log("Un paciente pasa a consulta (enEspera--):",enEspera);

console.log("Operadores de Concatenacion");
let nombre="Juan";
let apellido="Pérez";
console.log("Paciente:",nombre+" "+apellido);
let nombreCompleto=`${nombre} ${apellido}`;
console.log("Paciente con template literals:",nombreCompleto);

console.log ("Operadores de Comparacion Estricta");
let edadNumero=10;
let edadTexto="10";
console.log("edadNumero es igual a edadTexto:",edadNumero==edadTexto);
console.log("edadNumero es estrictamente igual a edadTexto:",edadNumero===edadTexto);
console.log("edadNumero es diferente a edadTexto:",edadNumero!=edadTexto);
console.log("edadNumero es estrictamente diferente a edadTexto:",edadNumero!==edadTexto);

console.log("Operadores Ternarios");
let edad=20;
let mensaje =(edad >=18) ? "Paciente adulto: pasa a Medicina General" : "Paciente menor: pasa a Pediatria";
console.log(mensaje);

console.log("Tabla de dosis: 5 mg por cada kilo de peso");
for (let i=1;i<=10;i++){
    console.log(`Paciente de ${i} kg: ${5*i} mg`);
}

console.log("Reparto de 5 litros de suero entre varios pacientes");
for (let i=1;i<=10;i++){
    console.log(`5 litros entre ${i} pacientes = ${5/i} litros cada uno`);
}
