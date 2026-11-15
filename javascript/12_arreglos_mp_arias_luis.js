// Autor: Luis Arias
let doctores= ["Dra. Ana Torres","Dr. Carlos Mena","Dra. Lucia Vera","Dr. Pedro Salas","Dra. Marta Ruiz","Dr. Jorge Leon"];

console.log("Doctor 0",doctores[0]);
console.log("Doctor 2",doctores[2]);
console.log("Doctor 5",doctores[5]);
console.log("Doctor 4",doctores[4]);
console.log("Cantidad de doctores ", doctores.length);

console.log("Incluir doctores a un arreglo con Push y Unshift");
doctores.push("Dr. Raul Diaz");
doctores.unshift("Dra. Paula Vega");
console.log("Doctores:" , doctores);
console.log("Modificar un doctor del arreglo");
doctores[7]="Dr. Raul Diaz Mora";
console.log("Doctor 7", doctores[7]);
console.log("Doctor 6", doctores[6]);
console.log("Doctores:" , doctores);

console.log("Eliminar doctores del arreglo : ");
console.log("Doctores:" , doctores);
doctores.pop();
console.log("Doctores:" , doctores);
doctores.shift();
console.log("Doctores:" , doctores);
doctores.splice(1,1);
console.log("Doctores:" , doctores);
