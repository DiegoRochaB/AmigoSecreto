//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let inputName = document.getElementById("amigo");
let clearInput = "";
let lista = document.getElementById("listaAmigos")

function adicionarAmigo(){
    if (inputName.value == ""){
        alert("Por favor insira um nome");
    } else {
        amigos.push(inputName.value);
        inputName.value = clearInput;
        console.log(amigos);
    }
}

function listaDeAmigos() {
    if (lista.children.length === 0) {
    } else {
      lista.innerHTML = '';
    }
    
    for (let i = 0; i < amigos.length; i++) {
      lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
  }

/*
function listaDeAmigos (){
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        lista.innerHTML = `<li>${amigos[i]}</li>`;
    }
}
*/
//lista.innerHTML += "";