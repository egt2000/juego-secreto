let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

  function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);        
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
};

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    //si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya completo el juego');        
    } else {
        console.log(numeroGenerado);
        console.log(listaNumeroSorteados);
        //si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
};

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
    
}

function limpiarCaja() {
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}


function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();