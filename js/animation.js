// Tentativa 01
// // Seleciona o botão
// const backToTopButton = document.querySelector('.back-to-top');


// // Função para rolar suavemente para o topo
// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// }

// window.addEventListener('scroll', () => {
//     if (window.pageYOffset > 100) {
//       backToTopButton.classList.add('show');
//     } else {
//       backToTopButton.classList.remove('show');   
  
//     }
//   });

// // Adiciona um evento de clique ao botão para rolar para o topo
// backToTopButton.addEventListener('click', scrollToTop);


// Tentativa: 2
// // Seleciona o botão
// const backToTopButton = document.querySelector('.back-to-top');

// // Função para rolar suavemente para o topo
// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// }

// // Adiciona um evento de clique ao botão para rolar para o topo
// backToTopButton.addEventListener('click', scrollToTop);





// Seleciona o link "Voltar ao Topo"
const backToTopButton = document.querySelector('.back-to-top');

// Adiciona um listener de evento ao scroll da página
// Exibe o botão quando o scroll ultrapassa o limite configurado
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Adiciona um listener de evento ao botão
backToTopButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    // Rola suavemente até o topo da página
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Define a rolagem como suave
    });
});






/*
// Array com os caminhos das imagens
const imagens = [
  '../img/header-gemini-teia-shadow-d-opc.png.jpg',
  '../img/header-homem-ia.png'
];


// Seleciona o elemento da imagem no HTML (certifique-se de ter um elemento com o id "imagemHeader")
const imagemHeader = document.getElementById('imagemHeader');
//const imagemHeader = document.getElementsByTagName('header');

let indiceImagem = 0;

function trocarImagem() {
  // Atualiza o atributo src da imagem
  imagemHeader.src = imagens[indiceImagem];

  // Incrementa o índice da imagem
  indiceImagem++;

  // Se o índice ultrapassar o limite do array, volta para o início
  if (indiceImagem >= imagens.length) {
      indiceImagem = 0;
  }
}

// Chama a função trocarImagem a cada 5 segundos
setInterval(trocarImagem, 5000);
*/

// Array com os caminhos das imagens
const imagens = [
  '../img/header-gemini-teia-shadow-d-opc.png',
  '../img/header-homem-ia.png',
  '../img/header-homem-ia-again.png',
  '../img/homem-ia-union-jog.png'
];

// Seleciona o elemento do header
const header = document.querySelector('header');

let indiceImagem = 0;

function trocarImagem() {
  // Atualiza a propriedade background-image do header
  header.style.backgroundImage = `url(${imagens[indiceImagem]})`;

  // Incrementa o índice da imagem
  indiceImagem++;

  // Se o índice ultrapassar o limite do array, volta para o início
  if (indiceImagem >= imagens.length) {
      indiceImagem = 0;
  }
}

// Chama a função trocarImagem a cada 5 segundos
setInterval(trocarImagem, 5000);
