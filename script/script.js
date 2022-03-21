//Dando boas vindas para os usuários //

alert("OLÁ VISITANTE!");


/*Tentando utilizar Template String */

let nomeVisitante = prompt('Digite seu nome por gentileza.');
let meuTemplate = `Seja muito bem vindo {$nomeVisitante}`;
alert(meuTemplate);

alert("No nosso projeto você poderá incluir suas experiências com passeios, cidades turísticas.");


/*Modificando Classes*/

let listaLi = document.querySelectorAll('li');
console.log(listaLi);
listaLi.forEach(li => {
    li.classList.add('TituloLi');
});
/*IncluindoEstilo red Mode*/
let body = document.querySelector('body');
let listaLi = document.querySelector('li');
let card = document.querySelectorAll('.itemcard');
let subtitulo = document.querySelectorAll('h2');
let conteudo = document.querySelectorAll('p');


function redMode() {
    body.classList.toggle('redMode');
    titulo.classList.toggle('tituloLi');
    card.forEach(div => div.classList.toggle('alteraItem'));
};