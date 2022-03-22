/*let nomevisitante = prompt("Digite seu nome por gentileza.");
alert("Seja muito bem vindo", +" " + nomevisitante);
alert("Seja muito bem vindo", +nomevisitante); /*





/*Capturar informações sobre o card novo que o usuário deseja incluir*/

let nomeCidade = document.getElementById("cidade");
let textoDescricao = document.getElementById("descricao");
let nomeUrl = document.getElementById("url");
/* Validando o button submit */

let formulario = document.getElementById("botao");
botaoSubmit.addEventListener(`click`, function(event) {
    event.preventDefault()
});

/*CAPTURANDO DADOS DOS CARDS JÁ EXISTENTES*/
/*criando uma lista com o elemento pai ;*/


/*CRIANDO UM NOVO CARD verificar a chamda dos elementos se será com div ou cada elemento*/
let novoCard = document.createElement('div');
let nomeCidade = document.createElement('div');
let textoDescricao = document.createElement('div');
let infoUrl = document.createElement('div');
let infoimagem = document.createElement('div');


let nomeCidade = document.getElementById('h3');
let textoDescricao = document.getElementById('span');
let infoimagem = document.getElementById('img');
let nomeUrl = document.getElementById('button a');

/* Criar novos cards a partir da inclusao feita pelo usuário*/

novoCard.innerHTML = `
    <div class = "input-field" >
        <input type = "text"
        name = "username"
        id = "cidade"
        placeholder = "Registre o nome da cidade" > 
        <div class = "underline">
    </div> 
    <div class = "input-field" >
        <input type = "text"
        name = "descricao"
        id = "descricao"
        placeholder = "Coloque a descrição da cidade" >
    <div class = "underline" >
    </div>
    <div class = "input-url">
    < input type = "url"
        name = "url"
        id = "url"
        placeholder = "Url da imagem" > 
    </div >
        `

function incluirCidades() {
    document.cards.appendChild(novoCard);
}

/*capturando o card onde consta o formulario preenchido pelo usuário*/
let listaCards = document.querySelector('.cards');

/* Capturar quantas cidades (cards o usuário deseja incluir)*/

let quantCards = prompt("Prezado visitante favor incluir quantos Cards(cidades) deseja incluir ?"); * /


/* class =cards  texto h3 recebe o nome da cidade do card de formulário.
class =cards  texto span recebe o nome da descricao do card de formulário.
class =cards  img (precisa alterar para URL) recebe o nome da URL do card de formulário.
 */
/*Temos que dar um jeito de colocar estas informaçoes que o usuario vai digitar dentro dos cards criados*/
for (let i = 0; i < quantCards.length; i++) {
    infoimagem[i].innerText = nomeimagem;
    nomeCidade[i].innerText = nomecity;
    textodescricao[i].innerText = descricao;
    nomeUrl[i].innerText = nomeurl;
}