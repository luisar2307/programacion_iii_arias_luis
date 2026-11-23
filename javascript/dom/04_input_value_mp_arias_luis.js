// Autor: Luis Arias
const dosis=document.getElementById("dosis");
const miligramos=document.getElementById("miligramos");
const calcular=document.getElementById("calcular");
const resultado=document.getElementById("resultado");

calcular.addEventListener("click",function(){
   if(dosis.value.trim()===""
    || miligramos.value.trim()===""){
        resultado.textContent="Completa ambos campos";
        return;
    }
    const cantidad= Number(dosis.value);
    const miligramosNumber= Number(miligramos.value);
    if(!Number.isFinite(cantidad)||
        !Number.isFinite(miligramosNumber)){
            resultado.textContent="Ingrese valores validos";
            return;
        }
        const total= cantidad * miligramosNumber;
        resultado.textContent="Medicamento total: "+total+" mg";
});
