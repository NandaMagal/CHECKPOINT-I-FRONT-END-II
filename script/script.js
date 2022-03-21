//Dando boas vindas para os usuários //

alert("OLÁ VISITANTE!");


/*Tentando utilizar Template String */

let nomeVisitante = prompt('Digite seu nome por gentileza.');
let meuTemplate = `Seja muito bem vindo {$nomeVisitante}`;
alert(meuTemplate);

alert("No nosso projeto você poderá incluir suas experiências com passeios, cidades turísticas.");


/*Modificando Classes*/


/*IncluindoEstilo red Modo*/
let body = document.querySelector('body');
let card = document.querySelectorAll('itemcard');


function redMode() {
    body.classList.toggle('redModo');
    card.forEach(div => div.classList.toggle('alteraItem'));
};