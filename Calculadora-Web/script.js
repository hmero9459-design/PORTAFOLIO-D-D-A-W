// Obtener la pantalla de la calculadora
let pantalla = document.getElementById("pantalla");

// Función para agregar números u operadores a la pantalla
function agregar(valor) {
    pantalla.value += valor;
}

// Función para limpiar toda la pantalla
function limpiar() {
    pantalla.value = "";
}

// Función para borrar el último carácter escrito
function borrar() {
    pantalla.value = pantalla.value.slice(0, -1);
}

// Función para calcular el resultado
function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = "Error";
    }
}