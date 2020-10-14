// pegando elemeto pelo id
var postIt = document.querySelector('#post-it');

// criando elementos
var inputElement = document.createElement('input');
var btnElement = document.createElement('button');

// inserindo propriedades nos elementos
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('id', 'info');
inputElement.setAttribute('placeholder', 'Digite o texto');

btnElement.setAttribute('type', 'button');
btnElement.setAttribute('id', 'btn');

// criando texto e inserindo no botão
var textBtn = document.createTextNode('Gerar');
btnElement.appendChild(textBtn);

// inserindo elementos na página
postIt.appendChild(inputElement);
postIt.appendChild(btnElement);

// estilizando elementos
document.body.style.margin = "0";
document.body.style.padding = "0";


postIt.style.width = '100%';
postIt.style.height = '100vh';
postIt.style.flexDirection = 'column';
postIt.style.backgroundColor = '#222831';

inputElement.style.width = "200px";
inputElement.style.height = "40px";
inputElement.style.border = "none";
inputElement.style.borderRadius = "10px";
inputElement.style.marginRight = "10px";


btnElement.style.width = "200px";
btnElement.style.height = "40px";
btnElement.style.border = "none";
btnElement.style.borderRadius = "10px";
btnElement.style.fontWeight = "bold";
btnElement.style.backgroundColor = "#ddb72f";

// Criando função para gerar o post it 
btnElement.onclick = function() {
    var boxElement = document.createElement('div');
    boxElement.setAttribute('id', 'quadrado');
    postIt.appendChild(boxElement);


    boxElement.style.width = '300px';
    boxElement.style.height = '300px';
    boxElement.style.backgroundColor = '#ddb72f';
    boxElement.style.margin = '30px';

    var value = document.createTextNode(inputElement.value);
    boxElement.appendChild(value);

    inputEelement.value = ""
}



