let nomevisitante = prompt("Digite seu nome por gentileza.");
alert("Seja muito bem vindo", +" " + nomevisitante);
alert("Seja muito bem vindo", +nomevisitante);

/* Capturar quantas cidades (cards o usuário deseja incluir)*/

let quantCards = prompt("Prezado visitante favor incluir quantos Cards(cidades) deseja incluir ?");

/*Capturar informações sobre o card novo que o usuário deseja incluir*/

let nomeCidade = document.querySelector('form.#cidade');
let textoDescricao = document.querySelector('form.#descricao');
let nomeUrl = document.querySelector('form.#url');


/* class =cards  texto h3 recebe o nome da cidade do card de formulário.
class =cards  texto span recebe o nome da descricao do card de formulário.
class =cards  img (precisa alterar para URL) recebe o nome da URL do card de formulário.
 */


for (let i = 0; i < quantCards.length; i++) { <
    h3 = nomeCidade[i].innerText;
    span = textodescricao[i].innerText;
    button a = nomeUrl[i].innerText;

}