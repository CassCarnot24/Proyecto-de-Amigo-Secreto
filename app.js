// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

function AgregarAmigo() {
    Insert = document.getElementById("Amigo");
    Nombre = Insert.value.trim();
    if (Nombre === ""){
        alert ("Por favor indique un nombre");
        return;
    }
Amigos.push(Nombre);
console.log (Amigos);
MostrarAmigos();
Limpiar ();
}

function Limpiar() {
    input = document.getElementById("Amigo");
    input.value = ""
}

function MostrarAmigos() {
    const lista = document.getElementById("ListaAmigos");
    
    lista.innerHTML = "";

    for (let i = 0; i < Amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = Amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (Amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    const indice = Math.floor(Math.random() * Amigos.length);

    const ganador = Amigos.splice(indice, 1)[0];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${ganador}</li>`;

    MostrarAmigos();
}