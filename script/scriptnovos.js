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


/* Criar novos cards a partir da inclusao feita pelo usuário*/

let cidade1 = document.createElement('div');
let cidade2 = document.createElement('div');
let cidade3 = document.createElement('div');
let cidade4 = document.createElement('div');
let cidade5 = document.createElement('div');
let cidade6 = document.createElement('div');

let container = document.querySelector('.container');

divcidade1.innerHTML = `
<div class="icon" >
    <a href="assets/flower.jpeg " alt="Shop here. ">
    <h3>vitoria-es</h3>
    <span>Salvador é um município brasileiro e capital do estado da Bahia. Situada na Zona da Mata da Região Nordeste do Brasil, Salvador é notável em todo o país pela sua gastronomia. A influência africana em muitos aspectos culturais da cidade a torna o centro da cultura afro-brasileira.</span>

</div>`;

divcidade2.innerHTML = `   
<div class="icon" >
     <img src="assets/flower.jpeg " alt="Shop here. "></a>
            </div>
            <h3>Campos do Jordão</h3>
            <span>Campos do Jordão é um município na Serra da Mantiqueira, no Brasil, e faz parte do estado de São Paulo. Engloba uma cidade com o mesmo nome, onde é comum a arquitetura de estilo suíço. Abrangendo um terço do município, as florestas de pinheiros do parque e as montanhas albergam várias aves e animais em risco de extinção.</span>
            <button a href="assets/flower.jpeg " alt="Shop here. ">mais informações</button>
</div>`

divcidade3.innerHTML = `    
<div class="icon ">

<img src="assets/flower.jpeg " alt="Shop here. "></a>
</div>
<h3>SALVADOR</h3>
<span>Salvador é um município brasileiro e capital do estado da Bahia. Situada na Zona da Mata da Região Nordeste do Brasil, Salvador é notável em todo o país pela sua gastronomia. A influência africana em muitos aspectos culturais da cidade a torna o centro da cultura afro-brasileira.</span>
<button a href="assets/flower.jpeg " alt="Shop here. ">mais informações</button>
</div>`

divcidade4.innerHTML = `    
<div class="icon ">

<img src="assets/flower.jpeg " alt="Shop here. "></a>
</div>
<h3>SALVADOR</h3>
<span>Salvador é um município brasileiro e capital do estado da Bahia. Situada na Zona da Mata da Região Nordeste do Brasil, Salvador é notável em todo o país pela sua gastronomia. A influência africana em muitos aspectos culturais da cidade a torna o centro da cultura afro-brasileira.</span>
<button a href="assets/flower.jpeg " alt="Shop here. ">mais informações</button>
</div>`

divcidade5.innerHTML = ` <
<div class="icon ">

<img src="assets/flower.jpeg " alt="Shop here. "></a>
</div>
<h3>SALVADOR</h3>
<span>Salvador é um município brasileiro e capital do estado da Bahia. Situada na Zona da Mata da Região Nordeste do Brasil, Salvador é notável em todo o país pela sua gastronomia. A influência africana em muitos aspectos culturais da cidade a torna o centro da cultura afro-brasileira.</span>
<button a href="assets/flower.jpeg " alt="Shop here. ">mais informações</button>
</div>`

divcidade6.innerHTML = ` <
<div class="icon ">

<img src="assets/flower.jpeg " alt="Shop here. "></a>
</div>
<h3>SALVADOR</h3>
<span>Salvador é um município brasileiro e capital do estado da Bahia. Situada na Zona da Mata da Região Nordeste do Brasil, Salvador é notável em todo o país pela sua gastronomia. A influência africana em muitos aspectos culturais da cidade a torna o centro da cultura afro-brasileira.</span>
<button a href="assets/flower.jpeg " alt="Shop here. ">mais informações</button>
</div>`


function
incluirCidades() {
    container.appendChild(divcidade1);
    container.appendChild(divcidade2);
    container.appendChild(divcidade3);
    container.appendChild(divcidade4);
    container.appendChild(divcidade5);
    container.appendChild(divcidade6);
}