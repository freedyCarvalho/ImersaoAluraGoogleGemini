// Seleciona o botão
const backToTopButton = document.querySelector('.back-to-top');

// Função para rolar suavemente para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');   
  
    }
  });

// Adiciona um evento de clique ao botão para rolar para o topo
backToTopButton.addEventListener('click', scrollToTop);

// Transição da Header
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
