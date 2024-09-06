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