let dimension =3;
switch(dimension){
    case 1:
        console.log("Rick y Morty estan en la dimension C-137");
        break;
    case 2:
        console.log("Rick y Morty estan en la dimension C-140");
        break;
    case 3:
        console.log("Rick y Morty estan en la dimension C-500");
        break;
    default:
        console.log("Rick y Morty estan en una dimension desconocida");
}   
let personaje="Rick";
switch(personaje){
    case "Rick":
        console.log("Rick es un cientifico loco");
        break;
    case "Morty":
        console.log("Morty es el nieto de Rick");
        break;
    case "Summer":
        console.log("Summer es la hermana de Morty");
        break;
    default:
        console.log("Personaje desconocido");
}

let energia=100;
switch(true){
    case energia>80:
        console.log("Rick tiene mucha energia");
        break;
    case energia>50:
        console.log("Rick tiene energia moderada");
        break;
    case energia>20:
        console.log("Rick tiene poca energia");
        break;
    default:
        console.log("Rick esta agotado");
}

console.log("Calculadora");
let numero1=10;
let numero2=5;
let operacion="multiplicacion";
switch(operacion){
    case "suma":
        console.log("Resultado de la suma:",numero1+numero2);
        break;
    case "resta":
        console.log("Resultado de la resta:",numero1-numero2);
        break;
    case "multiplicacion":
        console.log("Resultado de la multiplicacion:",numero1*numero2);
        break;
    case "division":
        console.log("Resultado de la division:",numero1/numero2);
        break;
    default:
        console.log("Operacion desconocida");
}