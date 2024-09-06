

// Title e Header do site
const titleApp = document.getElementById('title-head');
titleApp.innerHTML = app_content.title;

const headerH1 = document.getElementById('header-h1');
headerH1.innerHTML = app_content.h1;

const headerP = document.getElementById('header-p');
headerP.innerHTML = app_content.p;


// Exibição dos conteúdos
const apresentacao = document.getElementById('content-apresentacao');
apresentacao.innerHTML = gemini.descricao;

const tituloApresentacao = document.getElementById('h2-apresentacao');
tituloApresentacao.innerHTML = gemini.nome;

const textoComplementar = document.getElementById('content-complementar');
textoComplementar.innerHTML = gemini.descricao_complementar;

const textoSobre = document.getElementById('footer-sobre');
textoSobre.innerHTML = footer.sobre;


// Box sobre a Inteligência Artificial
const tituloBoxIA = document.getElementById('h2-sobre-ia');
tituloBoxIA.innerHTML = textoIA.titulo;

const contentIA = document.getElementById('content-texto-ia');
contentIA.innerHTML = textoIA.paragrafo;

const tituloListaIA = document.getElementById('titulo-lista-ia');
tituloListaIA.innerHTML = textoIA.destaque_titulo;

const listaIA = document.getElementById('lista-ia');

textoIA.destaque_itens.forEach(itens => {
    const li = document.createElement('li');
    li.textContent = itens;
    listaIA.appendChild(li);
});



// Footer Links Úteis
const linksUteis = document.getElementById('footer-links-uteis');

footer.links.forEach(links => {
    const li = document.createElement('li');
    li.textContent = links.titulo;
    li.addEventListener('click', () => {
        visitarSite(links.url);
    });
    linksUteis.appendChild(li);
});


// Footer Copyright
const footerCopyright = document.getElementById('footer-copyright');
footerCopyright.innerHTML = footer.copyright;


// Função para substituir o href
function visitarSite(url){
    if (typeof window.open !== 'undefined') {
        window.open(url, '_blank');
      } else {
        // Se o navegador não suportar, redirecionar após 5 segundos
        setTimeout(() => {
            window.location.href = url;
          }, 5000); // 5000 milissegundos = 5 segundos
      }
}



// Lista das habilidades randomizadas
const tituloHistoricoHabilidades = document.getElementById('historico-habilidades-h2');
tituloHistoricoHabilidades.innerHTML = buscaApp.titulo_historico;

const listaHabilidades = document.getElementById('habilidades');
gemini.habilidades.sort(() => Math.random() - 0.5)
    .slice(-5)
    .forEach(habilidade => {
        const li = document.createElement('li');
        li.textContent = habilidade.nome;
        li.addEventListener('click', () => {
            mostrarModal(habilidade.descricao);
        });
        listaHabilidades.appendChild(li);
    });



// Busca para as habilidades do Gemini

const tituloBoxResultadoBusca = document.getElementById('resultado-busca-h2');
tituloBoxResultadoBusca.innerHTML = buscaApp.titulo_resultado;

const boxResultados = document.getElementById('box-resultados-busca');

// Quando o site é carregado o resultado inicia sem visualização
boxResultados.style.display = 'none';

// Campo de busca
const inputBusca = document.getElementById('busca');

// Div para exibir os resultados da busca
const listaResultados = document.getElementById('lista-resultados');

inputBusca.addEventListener('input', () => {
    const termoBusca = inputBusca.value.toLowerCase();
    //console.log(termoBusca.length);
    listaResultados.innerHTML = ''; // Limpa a lista antes de preencher

    gemini.habilidades.forEach(habilidade => {
        if(termoBusca.length > 0) {
            boxResultados.style.display = 'block';
            if (habilidade.nome.toLowerCase().includes(termoBusca)) {
                const li = document.createElement('li');
                //li.textContent = habilidade;
                li.textContent = habilidade.nome;
                li.addEventListener('click', () => {
                    mostrarModal(habilidade.descricao);
                });
                listaResultados.appendChild(li);
            }
        } else {
            boxResultados.style.display = 'none';
        }      
    });
});



// Busca ao clicar no botão buscar
const btnBuscar = document.getElementById('btn-buscar');

btnBuscar.addEventListener('click', () => {
    const termoBusca = inputBusca.value.toLowerCase();
    listaResultados.innerHTML = ''; // Limpa a lista antes de preencher

    gemini.habilidades.forEach(habilidade => {
        if (habilidade.toLowerCase().includes(termoBusca)) {
            const li = document.createElement('li');
            li.textContent = habilidade;
            listaResultados.appendChild(li);
        }
    });
});


// Exibição do modal ao clicar em alguma habilidade
function mostrarModal(texto) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modal.style.display = 'block';
    modalText.textContent
   = texto;
}
  

// Fechar modal quando clicar no X, fora do modal ou mesmo no modal
const span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
}

const boxModal = document.getElementsByClassName("modal")[0];
  
boxModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}