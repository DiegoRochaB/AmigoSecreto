//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];
let inputName = document.getElementById("amigo");
let clearInput = "";

function adicionarAmigo(){
    if (inputName.value == ""){
        alert("Por favor insira um nome");
    } else {
        listaNomes.push(inputName.value);
        inputName.value = clearInput;
        console.log(listaNomes);
    }
}