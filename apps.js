class Personas {
    constructor(pNombre, pEdad, pAltura, pPeso) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.altura = pAltura;
        this.peso = pPeso;
    }
}

function validar(){
    let formularioEdad = document.getElementById("edad").value;
    if (formularioEdad <= 18){
        alert("Debes ser mayor de 18 años para ingresar");
        datosOk = false;
        
    }
    else if (isNaN(formularioEdad) || formularioEdad == ""){
        alert ("Debes ingresar tu edad")
        datosOk = false
    }
    else{
        datosOk = true;
    }
}

function cargarPaciente (e) {
    e.preventDefault
    validar()
    if (datosOk) {
        let confirmar = confirm ("¿Deseas cargar los datos?")
        if (confirmar){
            let pNombre = document.getElementById("nombre").value
            let pEdad = document.getElementById("edad").value
            let pAltura = document.getElementById("altura").value
            let pPeso = document.getElementById("peso").value
            let paciente = new Personas (pNombre, pEdad, pAltura, pPeso)
            listaDePacientes.push(paciente)
            mostrarPaciente()
        }
        else {
            alert ("No se ingresaran datos")
        }
    }

    
}

function mostrarPaciente(){
    for (let paciente of listaDePacientes){
        $("#tarjetaPaciente").append ( 
        `<div class="paciente">
        <h3>${paciente.nombre}</h3>
        <p>IMC: ${calcularImc (paciente.altura , paciente.peso)}</p>`)
    }
}


function calcularImc(altura,peso){
    let IMC = (peso / (altura*altura))
    return IMC
}

let listaDePacientes = []

$("#boton").on ("click", cargarPaciente)



