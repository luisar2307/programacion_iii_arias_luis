console.log("Condicionales If");
let energia =50;
if(energia>0){
    console.log("Rick tiene energia suficiente para viajar a otra dimension");
}

console.log("Condicionales If-Else Dos caminos");
let combustible=400;
if(combustible>0){
    console.log("Rick tiene combustible suficiente para viajar a otra dimension");
}else{
    console.log("Rick no tiene combustible suficiente para viajar a otra dimension");
}

console.log("Condicionales If-Else If Varios caminos");
let nivelEnergia = 75; // Simulando el valor de energía

if(nivelEnergia>100){
    console.log("Rick tiene energia suficiente para viajar a otra dimension");
}else if(nivelEnergia>50){
    console.log("Rick tiene energia suficiente para viajar a otra dimension pero no sabe si volvera");
}else if(nivelEnergia>0){
    console.log("Rick tiene energia suficiente para viajar a otra dimension pero no sabe si volvera y ademas esta muy cansado");
}else{
    console.log("Rick no tiene energia suficiente para viajar a otra dimension");
}

console.log("Condicionales If Anidados");
let energiaRick = 80;
let combustibleRick = 30;

if(energiaRick>0){
    if(combustibleRick>0){
        console.log("Rick tiene energia y combustible suficiente para viajar a otra dimension");
    }else{
        console.log("Rick tiene energia suficiente pero no tiene combustible para viajar a otra dimension");
    }
}

console.log("condicionales If con Operadores Logicos");
let energiaMorty = 60;
let combustibleMorty = 20;

if(energiaMorty>0 && combustibleMorty>0){
    console.log("Morty tiene energia y combustible suficiente para viajar a otra dimension");
}else{
    console.log("Morty no tiene energia o combustible suficiente para viajar a otra dimension");
}

console.log("Control de viajes interdimencionales");
let combustibleRick2 = 400;
let energiaRick2 = 80;
let rick_disponible = true;
let summer_disponible = "no";
let nave_disponible = "si";

if(
combustibleRick2>0 && energiaRick2>0 && rick_disponible && summer_disponible==="si" && nave_disponible==="si")
{
    console.log("Viaje Autorizado");
}else{
    if(combustibleRick2<50)
        {
            console.log("Rick no tiene suficiente combustible para viajar a otra dimension");
        }
        if(energiaRick2<50)
        {
            console.log("Rick no tiene suficiente energia para viajar a otra dimension");
        }
        if(!rick_disponible)
        {
            console.log("Rick no esta disponible para viajar a otra dimension");
        }
        if(summer_disponible!=="si")
        {
            console.log("Summer no esta disponible para viajar a otra dimension");
        }
        if(nave_disponible!=="si")
        {
            console.log("La nave no esta disponible para viajar a otra dimension");
        }
        if(combustibleRick2<50 && energiaRick2<50 && !rick_disponible && summer_disponible!=="si" && nave_disponible!=="si")
        {
            console.log("Rick no tiene suficiente combustible y energia, Rick no esta disponible, Summer no esta disponible y la nave no esta disponible para viajar a otra dimension");
        }
}


console.log("Mision interdimencional");
let combustibleRick3 = 400;
let cristalesObjetivo = 100;
let combustibleinicial = 1000;
let combustibleConsumido=850;
let mortyHerido = true;
let naveAveriada = false;
let bonificacion=0;
let porcentajeCombustibleConsumido = (combustibleConsumido/combustibleinicial)*100;
let combustibleRestante = combustibleinicial-combustibleConsumido;
let energiaRick3 = 80;
let rick_disponible2 = true;
let summer_disponible2 = "si";
let nave_disponible2 = "si";

console.log("Resultados de la Mision");
if(porcentajeCombustibleConsumido>80){
    console.log("Rick consumio mas del 80% de su combustible");
    bonificacion+=10;
}else if(porcentajeCombustibleConsumido>50){
    console.log("Rick consumio mas del 50% de su combustible");
    bonificacion+=5;
}else if(porcentajeCombustibleConsumido>20){
    console.log("Rick consumio menos del 50% de su combustible");
    bonificacion+=2;
}else if(porcentajeCombustibleConsumido>0){
    console.log("Rick consumio menos del 20% de su combustible");
    bonificacion+=1;
}else{
    console.log("Rick no consumio combustible");
}

console.log("Bonificacion por combustible consumido:",bonificacion);
if(mortyHerido){
    console.log("Morty esta herido");
    bonificacion-=5;
}
if(naveAveriada){
    console.log("La nave esta averiada");
    bonificacion-=5;
}

console.log("Bonificacion final:",bonificacion);

console.log("Control de viajes interdimencionales con Bonificacion");
if(
combustibleRick3>0 && energiaRick3>0 && rick_disponible2 && summer_disponible2==="si" && nave_disponible2==="si" && bonificacion>=0)
{
    console.log("Viaje Autorizado");
}
