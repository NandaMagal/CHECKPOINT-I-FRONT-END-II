/*let nomevisitante = prompt("Digite seu nome por gentileza.");
alert("Seja muito bem vindo", +" " + nomevisitante);
alert("Seja muito bem vindo", +nomevisitante); /*



/* Criar novos cards a partir da inclusao feita pelo usuário*/


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
/*Temos que dar um jeito de colocar estas informaçoes que o usuario vai digitar dentro dos cards criados*/

for (let i = 0; i < quantCards.length; i++) {
    h3 = nomeCidade[i].innerText;
    span = textodescricao[i].innerText;
    a = nomeUrl[i].innerText;

}
/*CAPTUTANDO INFORMAÇÕES DO CARD QUE O USUÁRIO INCLUIU DADOS*/

let infousuario = document.querySelectorAll('.input-field');

/*CAPTURANDO DADOS DOS CARDS JÁ EXISTENTES*/
/*criando uma lista com o elemento pai ;*/
let listaCards = document.querySelectorAll('.cards');

/*capturando o card onde consta o formulario preenchido pelo usuário*/
let container = document.querySelector('.container');

/*CRIANDO UM NOVO CARD */
let novoCard = document.createElement('div');
let nomeCidade = ;
let textoDescricao = ;
let infoUrl = ;

novoCard.innerHTML = `
 <div class="input-field">
     <input type="text" name="username" id="cidade" placeholder="Registre o nome da cidade">${nomeCidade}
        <div class="underline"></div>
        </div>
            <div class="input-field">
                <input type="text" name="descricao" id="descricao" placeholder="Coloque a descrição da cidade">${textoDescricao}
                <div class="underline"></div>
            </div>
            <div class="input-url">
                <input type="url" name="url" id="url" placeholder="Url da imagem">${infoUrl}
                <label for="nome"></label>
            </div>
`

function incluirCidades() {
    document.container.appendChild(novoCard);

}