

// Função para exibir as informações do Title do Site
function exibirInformacoesTitle() {
    // Title e Header do site
    let titleApp = document.getElementById('title-head');
    titleApp.innerHTML = app_content.title;
}

// Função para exibir as informações da Header do ste
function exibirInformacoesHeader() {
    let headerH1 = document.getElementById('header-h1');
    headerH1.innerHTML = app_content.h1;

    let headerP = document.getElementById('header-p');
    headerP.innerHTML = app_content.p;
}


// Função para exibir as informações do blobo de apresentação do Gemini
// Primeiro bloco informativo
function exibirConteudoApresentacao() {
    
    // Primeiros parágrafos
    let apresentacao = document.getElementById('content-apresentacao');
    let textoApresentacaoHtml = "";
    gemini.caracteristicas.forEach(item => {
        textoApresentacaoHtml += `<p>${item}</p>`
    });
    apresentacao.innerHTML = textoApresentacaoHtml;

    let tituloApresentacao = document.getElementById('h2-apresentacao');
    tituloApresentacao.innerHTML = gemini.nome;

    //let textoComplementar = document.getElementById('content-complementar');

    // Texto para o exemplo de uso
    let divExemploUso = document.getElementById('content-exemplos-de-uso');
    let htmlExemplosDeUso = "";

    gemini.utilidade.exemplos.forEach(exemplos => {
        htmlExemplosDeUso += `
        <ul>
            <li>${exemplos}</li>
        </utl>
        `
    });

    divExemploUso.innerHTML = `<h2>${gemini.utilidade.titulo}</h2>` + htmlExemplosDeUso;

}


// Função para exibir as informações sobre a Inteligência Artificial
function exibirConteudoIA() {
    
    // Título da seção
    let tituloBoxIA = document.getElementById('h2-sobre-ia');
    tituloBoxIA.innerHTML = sobreIA.titulo;

    // Texto da seção
    let contentIA = document.getElementById('content-texto-ia');
    let textoSobreIA = "";

    sobreIA.paragrafo.forEach(p => {
        textoSobreIA += `<p>${p}</p>`
    });
    contentIA.innerHTML = textoSobreIA;

    // Texto das Destaques
    let tituloListaIA = document.getElementById('h2-lista-ia');
    tituloListaIA.innerHTML = sobreIA.destaque.titulo;

    let listaIA = document.getElementById('lista-ia');
    let textoDescricaoIA = "";

    sobreIA.destaque.descricao.forEach(itens => {
        textoDescricaoIA += `
            <li>
                ${itens.titulo}
                <span>${itens.descricao}</span>
            </li>`

        // let li = document.createElement('li');
        // li.textContent = itens.titulo;
        // listaIA.appendChild(li);
    });

    listaIA.innerHTML = textoDescricaoIA;
}


// Função que exibe as informações da Footer
function exibirInformacoesFooter() {
    
    // 1) Footer Sobre
    // Obtendo o elemento HTML para poder inserir o conteúdo
    let textoSobre = document.getElementById('footer-sobre');
    
    // Inserindo o conteúdo no elemento HTML
    let htmlH3Sobre = `<h3>${footer.titulo_sobre}</h3>`;
    let textoHtmlSobre = footer.texto_sobre
    textoSobre.innerHTML = htmlH3Sobre + textoHtmlSobre;


    // 2) Footer Links Úteis
    // Obtendo o elemento HTML para poder inserir o título
    let tituloLinksUteis = document.getElementById('footer-h3-links-uteis');
    tituloLinksUteis.innerHTML = footer.links.titulo;

    // Obtendo o elemento HTML para poder inserir o conteúdo
    let linksUteis = document.getElementById('div-footer-links-uteis');
    let listaLinksUteis = document.createElement('ul');
    listaLinksUteis.id = "footer-links-uteis";

    let conteudo = "";

    // Iterando o atributo links e atribuindo o conteúdo
    footer.links.lista.forEach(links => {
        let li = document.createElement('li');
        li.textContent = links.titulo;
        li.addEventListener('click', () => {
            visitarSite(links.url);
        });
        listaLinksUteis.appendChild(li);
    });
    
    linksUteis.appendChild(listaLinksUteis);


    // 3) Footer Redes Sociais
    // Obtendo o elemento H3 do HTML para poder inserir o conteúdo 
    let footerH3redesSociais = document.getElementById('footer-h3-redes-sociais');
    footerH3redesSociais.innerHTML = footer.redes_sociais.titulo;

    // Obtendo o elemento lista do HTML para poder inserir o conteúdo 
    let listaRedesSociais = document.getElementById('footer-ul-redes-sociais');
    let htmlRedesSociais = "";

    footer.redes_sociais.lista.forEach(item => {
        htmlRedesSociais += `
        <li><a href="${item.url}" target="_blank">
            <i class="${item.class}"></i></a>
        </li>`;
    });

    // Atribuindo todo os dados no elemento HTML do site
    listaRedesSociais.innerHTML = htmlRedesSociais;

    // Footer Copyright
    // Obtendo o elemento do HTML para poder inserir a informação de copytight 
    let footerCopyright = document.getElementById('footer-copyright');
    footerCopyright.innerHTML = footer.copyright;
}


// Função para substituir o href
function visitarSite(url) {
    if (typeof window.open !== 'undefined') {
        window.open(url, '_blank');
      } else {
        // Se o navegador não suportar, redirecionar após 5 segundos
        setTimeout(() => {
            window.location.href = url;
          }, 5000); // 5000 milissegundos = 5 segundos
      }
}



// Função para exibir alguns resultados randômicos das habilidades da IA
function exibirResultadosRandomicos(){
    let tituloHistoricoHabilidades = document.getElementById('historico-habilidades-h2');
    tituloHistoricoHabilidades.innerHTML = buscaApp.titulo_historico;

    let listaHabilidades = document.getElementById('habilidades');
    gemini.habilidades.sort(() => Math.random() - 0.5)
        .slice(-5)
        .forEach(habilidade => {
            let li = document.createElement('li');
            li.textContent = habilidade.nome;
            li.addEventListener('click', () => {
                mostrarModal(habilidade.descricao);
            });
            listaHabilidades.appendChild(li);
        });
}


// Codificação para Busca para as habilidades do Gemini
// Conforme o usuário vai digitando a palavra de busca, as informações
// já vão sendo exibidas.

let tituloBoxResultadoBusca = document.getElementById('resultado-busca-h2');
tituloBoxResultadoBusca.innerHTML = buscaApp.titulo_resultado;

let boxResultados = document.getElementById('box-resultados-busca');

// Quando o site é carregado o resultado inicia sem visualização
boxResultados.style.display = 'none';

// Campo de busca
let inputBusca = document.getElementById('busca');

// Div para exibir os resultados da busca
let listaResultados = document.getElementById('lista-resultados');

inputBusca.addEventListener('input', () => {
    let termoBusca = inputBusca.value.toLowerCase();
    //console.log(termoBusca.length);
    listaResultados.innerHTML = ''; // Limpa a lista antes de preencher

    gemini.habilidades.forEach(habilidade => {
        if(termoBusca.length > 0) {
            boxResultados.style.display = 'block';
            if (habilidade.nome.toLowerCase().includes(termoBusca)) {
                let li = document.createElement('li');
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


// Ação para quando clicar no botão Limpar da Busca
let btnLimpar = document.getElementById('btn-limpar');

btnLimpar.addEventListener('click', () => {
    document.getElementById('busca').value = "";
    listaResultados.innerHTML = ''; // Limpa a lista antes de preencher
    boxResultados.style.display = 'none';
});


// Codificação que executa a Busca ao clicar no botão buscar
// let btnBuscar = document.getElementById('btn-buscar');

// btnBuscar.addEventListener('click', () => {
//     let termoBusca = inputBusca.value.toLowerCase();
//     listaResultados.innerHTML = ''; // Limpa a lista antes de preencher

//     gemini.habilidades.forEach(habilidade => {
//         if (habilidade.nome.toLowerCase().includes(termoBusca)) {
//             let li = document.createElement('li');
//             li.textContent = habilidade.nome;
//             listaResultados.appendChild(li);
//         }
//     });
// });


// Exibição do modal ao clicar em alguma habilidade
function mostrarModal(texto) {
    let modal = document.getElementById('modal');
    let modalText = document.getElementById('modal-text');
    modal.style.display = 'block';
    modalText.textContent
   = texto;
}
  

// Codificação para fechar modal quando clicar no X, fora do modal ou mesmo no modal
let span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no X
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar no Modal
let boxModal = document.getElementsByClassName("modal")[0];

boxModal.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do Modal
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// Acionando as funções para que as informações sejam exibidas no site
exibirInformacoesTitle();
exibirConteudoApresentacao();
exibirConteudoIA();
exibirResultadosRandomicos();
exibirInformacoesHeader();
exibirInformacoesFooter();