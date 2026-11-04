console.log("Operadores Aritmeticos");
let a =10;
let b =5;
console.log("Suma:",a+b);
console.log("Resta:",a-b);
console.log("Multiplicacion:",a*b);
console.log("Division:",a/b);
console.log("Modulo:",a%b);

console.log("Operadores de Comparacion");
console.log("a es igual a b:",a==b);
console.log("a es diferente a b:",a!=b);
console.log("a es mayor que b:",a>b);
console.log("a es menor que b:",a<b);
console.log("a es mayor o igual que b:",a>=b);
console.log("a es menor o igual que b:",a<=b);

console.log("Operadores Logicos");
let c=true;
let d=false;
console.log("c AND d:",c && d);
console.log("c OR d:",c || d);
console.log("NOT c:",!c);

console.log("Operadores de Asignacion");
let e=10;
console.log("Valor inicial de e:",e);
e+=5;
console.log("Valor de e despues de e+=5:",e);
e-=3;
console.log("Valor de e despues de e-=3:",e);
e*=2;
console.log("Valor de e despues de e*=2:",e);
e/=4;
console.log("Valor de e despues de e/=4:",e);

console.log("Operadores de Incremento y Decremento");
let f=10;
console.log("Valor inicial de f:",f);
f++;
console.log("Valor de f despues de f++:",f);
f--;
console.log("Valor de f despues de f--:",f);

console.log("Operadores de Concatenacion");
let nombre="Rick";
let apellido="Sanchez";
console.log("Nombre completo:",nombre+" "+apellido);
let nombreCompleto=`${nombre} ${apellido}`;
console.log("Nombre completo con template literals:",nombreCompleto);

console.log ("Operacdores de Comparacion Estrica");
let g=10;
let h="10";
console.log("g es igual a h:",g==h);
console.log("g es estrictamente igual a h:",g===h);
console.log("g es diferente a h:",g!=h);
console.log("g es estrictamente diferente a h:",g!==h);

console.log("Operadores Ternarios");
let edad=20;
let mensaje =(edad >=18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

console.log("Tabla de multiplicar del 5");
for (let i=1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}

console.log("Tabla de division del 5");
for (let i=1;i<=10;i++){
    console.log(`5 / ${i} = ${5/i}`);
}