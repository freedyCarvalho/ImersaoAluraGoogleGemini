// Função para exibir as informações do Title do Site
function exibirInformacoesTitle() {
    try {
        // Title e Header do site
        let titleApp = document.getElementById('title-head');
        titleApp.innerHTML = app_content.title;
    } catch (erro) {
        console.error("Ocorreu um erro ao carregar as informações do site", erro);
    }
    
}

// Função para exibir as informações da Header do ste
function exibirInformacoesHeader() {
    try {
        let headerH1 = document.getElementById('header-h1');
        headerH1.innerHTML = app_content.h1;

        let headerP = document.getElementById('header-p');
        headerP.innerHTML = app_content.p;
    } catch (erro) {
        console.error("Ocorreu um erro ao carregar as informações da header", erro);
    }
}


// Função para exibir as informações do blobo de apresentação do Gemini
// Primeiro bloco informativo
function exibirConteudoApresentacao() {
    
   try {

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

        document.querySelector('.sobre-gemini').style.display = "block";

   } catch (erro) {
        console.error("Ocorreu um erro ao carregar a seção de apresentação do Gemini", eror);
   }

}


// Função para exibir as informações sobre a Inteligência Artificial
function exibirConteudoIA() {
    
    try {
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
        });

        listaIA.innerHTML = textoDescricaoIA;

        document.querySelector('.sobreIA').style.display = "block";


    } catch (erro) {
        console.error("Ocorreu um erro ao carregar a seção Sobre IA", erro);
    }
};


// Função para exibir as informações das aplicações da IA
function ExibirConteudoAplicacaoIA()
{
    try {

        let aplicacaoIA = document.querySelector('.aplicacaoIA h2');
        aplicacaoIA.innerHTML = "A inteligência artificial tem sido aplicada em diversas áreas";
        
        let aplicacaoInfo = document.querySelector('.box-aplicacao-informacoes');
        
        templateAplicacaoIA = "";
        let count = 0;
        
        pesquisas.forEach(p => {
            count++;
            templateAplicacaoIA += 
            `
                <div class="box-aplicacao-informacoes">
                    <h4>${p.titulo}</h4>
                    <p>${p.manchete}</p>
                    <div class="box-aplicacao-publicacoes">
                        <img src="img/materias/${p.imagem}" alt="${p.titulo}" title="${p.titulo}" srcset="">
                        <div class="box-aplicacao-conteudo">
                            <p>${p.texto}</p>
                            <p>Fonte: ${p.midia}</p> 
                            <p><time datetime="${p.data}">Data: ${p.data}</time></p>
                            <p><a href="${p.url}" target="_blank">Clique aqui para ter acesso a todo o conteúdo</a></p>
                        </div>
                    </div>
                </div>
            `
        });
        
        aplicacaoInfo.innerHTML = templateAplicacaoIA;
        document.querySelector('.aplicacaoIA').style.display = 'block';

    } catch (error) {
        console.error("Um erro ocorreu ao carregar o conteúdo da Aplicação da IA:", error);
    }
}


// Função que exibe as informações da Footer
function exibirInformacoesFooter() {
    
    try {

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

    } catch (erro) {
        console.error("Ocorreu um erro ao carregar a footer do website:", erro);
    }
}


// Função para substituir o href
function visitarSite(url) {
    try {

        if (typeof window.open !== 'undefined') {
            window.open(url, '_blank');
          } else {
            // Se o navegador não suportar, redirecionar após 5 segundos
            setTimeout(() => {
                window.location.href = url;
              }, 5000); // 5000 milissegundos = 5 segundos
          }
    } catch (erro) {
        console.error("Ocorreu um erro ao executar a função visitarSite()", erro);
    }
}


// Função para remover o acento
// Usado para o sistema de busca do site
function removerAcento(texto) {
     return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

String.prototype.removerAcentuacao = function() {
    return this.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};
  


// Função para exibir alguns resultados randômicos das habilidades da IA
function exibirResultadosRandomicos(){
    try {
        let tituloHistoricoHabilidades = document.getElementById('historico-habilidades-h2');
        tituloHistoricoHabilidades.innerHTML = buscaApp.titulo_historico;

        let listaHabilidades = document.getElementById('habilidades');
        gemini.habilidades.sort(() => Math.random() - 0.5)
            .slice(-5)
            .forEach(habilidade => {
                let li = document.createElement('li');
                li.textContent = habilidade.nome;
                li.addEventListener('click', () => {
                    mostrarModal(habilidade.nome, habilidade.descricao, habilidade.imagem);
                });
                listaHabilidades.appendChild(li);
            });
    } catch (erro) {
        console.error("Ocorreu um erro ao carregar o histórido das pesquisas realizadas", erro);
    }
};


function buscarHabilidades() {

    try {
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
            let termoBusca = inputBusca.value.toLowerCase().removerAcentuacao();
            //console.log(termoBusca.length);
            listaResultados.innerHTML = ''; // Limpa a lista antes de preencher

            gemini.habilidades.forEach(habilidade => {
                if(termoBusca.length > 0) {
                    boxResultados.style.display = 'block';
                    if (habilidade.nome.toLowerCase().removerAcentuacao().includes(termoBusca)) {
                        let li = document.createElement('li');
                        //li.textContent = habilidade;
                        li.textContent = habilidade.nome;
                        console.log(habilidade.imagem);
                        li.addEventListener('click', () => {
                            mostrarModal(habilidade.nome, habilidade.descricao, habilidade.imagem);
                        });
                        listaResultados.appendChild(li);
                    }
                } else {
                    boxResultados.style.display = 'none';
                }      
            });
        });
    } catch (erro) {
        console.error("Ocorreu um erro ao executar a busca de habilidades", erro);
    }
};


function limparResultadoDeBusca() {
    try {
        let boxResultados = document.getElementById('box-resultados-busca');
        // Div para exibir os resultados da busca
        let listaResultados = document.getElementById('lista-resultados');

        // Ação para quando clicar no botão Limpar da Busca
        let btnLimpar = document.getElementById('btn-limpar');

        btnLimpar.addEventListener('click', () => {
            document.getElementById('busca').value = "";
            listaResultados.innerHTML = ''; // Limpa a lista antes de preencher
            boxResultados.style.display = 'none';
        });
    } catch (erro) {
        console.error("Ocorreu um erro ao tentar limpar o resultado da busca", erro);
    }
}


// Exibição do modal ao clicar em alguma habilidade
function mostrarModal(titulo, texto, img) {
    
    try {

        let modal = document.getElementById('modal');
        let modalTitle = document.getElementById('modal-titulo');
        let modalText = document.getElementById('modal-text');
        let imagem = document.getElementById('modal-imagem');
        
        // Selecionando a figcaption da legenda do modal
        let figcaption = document.querySelector('figcaption');
        figcaption.innerHTML = "As imagens foram geradas pelo ";

        // Adiciona um link ao final da legenda
        let link = document.createElement('a');
        link.href = 'http://canva.com';
        link.textContent = 'Canva.com';
        link.style.marginLeft = '5px';
        link.target = "_blank";
        figcaption.appendChild(link);

        modal.style.display = 'block';
        modalTitle.innerHTML = titulo;
        modalText.textContent = texto;
        imagem.src = './img/habilidades/' + img;
        imagem.alt = titulo;
        imagem.title = titulo;

    } catch (erro) {
        console.error("Ocorreu um erro ao exibir o modal das habilidades do Gemini", erro);
    }
    
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
document.addEventListener('DOMContentLoaded', function() {
    buscarHabilidades();
    limparResultadoDeBusca();
    exibirInformacoesTitle();
    exibirConteudoApresentacao();
    exibirConteudoIA();
    ExibirConteudoAplicacaoIA()
    exibirResultadosRandomicos();
    exibirInformacoesHeader();
    exibirInformacoesFooter();
});
