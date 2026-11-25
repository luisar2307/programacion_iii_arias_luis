// Autor: Luis Arias
const doctor=document.getElementById("doctor");
const cambiar=document.getElementById("cambiar");
const verConsultorio=document.getElementById("verConsultorio");
const consultorio=document.getElementById("consultorio");

cambiar.addEventListener("click",function(){
    if(doctor.getAttribute("title")=="Dra. Ana Cevallos"){
        doctor.setAttribute("src", "doctor_ortiz.webp");
        doctor.setAttribute("title","Dr. Carlos Ortiz");
        doctor.setAttribute("alt","Dr. Carlos Ortiz");
        doctor.dataset.consultorio="102"   
    } else{
        doctor.setAttribute("src", "doctora_cevallos.jpe");
        doctor.setAttribute("title","Dra. Ana Cevallos");
        doctor.setAttribute("alt","Dra. Ana Cevallos");
        doctor.dataset.consultorio="101";
    }
});

verConsultorio.addEventListener("click",function(){
    consultorio.textContent="Consultorio: "+doctor.dataset.consultorio;
});

const estadoConsultorio=document.getElementById("estadoConsultorio");

const abrirConsultorio=document.getElementById("abrirConsultorio");

abrirConsultorio.addEventListener("click", function(){
    if(estadoConsultorio.textContent.trim()=="Consultorio Cerrado"){
        estadoConsultorio.style.backgroundColor="green";
        estadoConsultorio.style.color="white";
        estadoConsultorio.textContent=("Consultorio Abierto");
    } else{
        estadoConsultorio.style.backgroundColor="red";
        estadoConsultorio.style.color="white";
        estadoConsultorio.textContent=("Consultorio Cerrado");
    }
});
