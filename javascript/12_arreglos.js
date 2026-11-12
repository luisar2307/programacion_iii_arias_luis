let personajes= ["Rick","Morty","Summer","Jerry","Arias","Luis"];

console.log("Elemento 0",personajes[0]);
console.log("Elemento 2",personajes[2]);
console.log("Elemento 5",personajes[5]);
console.log("Elemento 4",personajes[4]);
console.log("Tamaño del arreglo ", personajes.length);

console.log("Incluir elementos a un arreglo con Push");
personajes.push("Fiallos");
personajes.unshift("Andre");
console.log("Personajes:" , personajes);
console.log("modificar elementos a un arreglo");
personajes[7]="Andres";
console.log("Elemento 7", personajes[7]);
console.log("Elemento 6", personajes[6]);
console.log("Personajes:" , personajes);

console.log("Eliminar un elemento del arreglo : ");
console.log("Personajes:" , personajes);
personajes.pop();
console.log("Personajes:" , personajes);
personajes.shift();
console.log("Personajes:" , personajes);
personajes.splice(1,1);
console.log("Personajes:" , personajes);
