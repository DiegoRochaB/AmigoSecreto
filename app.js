let amigos = [];
let inputName = document.getElementById("amigo");
let clearInput = "";
let lista = document.getElementById("listaAmigos");

function adicionarAmigo(){
    if (inputName.value == ""){
        alert("Por favor insira um nome");
    } else {
        amigos.push(inputName.value);
        inputName.value = clearInput;
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

function sortearAmigo(){
    if (amigos.length == 0){
        alert("Adicionar os nomes dos seus amigos primeiro.");
    } else {
        let sorteioNumber = Math.floor(Math.random() * amigos.length + 1);
        let amigoSorteado = amigos[sorteioNumber];
        let mostrarResultado = document.getElementById("resultado");
        mostrarResultado.innerHTML = `${amigoSorteado}`;
    }
}
