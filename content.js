const app_content = {
    title: "Gemini - A sua IA pessoal",
    h1: "Gemini",
    p: "Sua inteligência artificial sempre à disposição."
}

const buscaApp = {
    titulo_resultado: "Resultado da busca: Habilidades",
    titulo_historico: "Últimas habilidades pesquisadas"
}

const gemini = {
    nome: "Gemini: nosso maior e mais hábil modelo de IA",
    descricao: "Um modelo de linguagem de última geração capaz de gerar textos criativos, traduzir idiomas, escrever diferentes tipos de conteúdo e responder a suas perguntas com informações precisas.",
    descricao_complementar: "<p>Gemini será uma nova geração de modelos de IA, inspirados na forma como as pessoas compreendem o mundo e interagem com ele. Uma IA que pareça menos um software inteligente e mais um colaborador ou assistente especializado, ainda mais útil e intuitivo.</p> <p> O Gemini é o resultado de um trabalho colaborativo e em grande escala entre diferentes times do Google.</p> <p>Esse modelo foi construído desde a sua concepção para ser multimodal, o que significa que pode compreender, operar e combinar diferentes tipos de informações, incluindo texto, imagem, áudio e vídeo.</p>",
    habilidades: [
        {
            nome: "Geração de texto",
            descricao: "Crie textos originais e personalizados para diversas finalidades, como artigos, e-mails, posts para redes sociais e muito mais. Ideal para quem precisa de conteúdo de qualidade rapidamente."
        },
        {
            nome: "Tradução de idiomas",
            descricao: "Traduza textos de um idioma para outro de forma precisa e natural, facilitando a comunicação global e a compreensão de diferentes culturas."
        },
        {
            nome: "Respostas a perguntas",
            descricao: "Responda a suas perguntas de forma clara e concisa, buscando informações em diversas fontes. Perfeito para tirar dúvidas sobre diversos assuntos."
        },
        {
            nome: "Resumo de textos",
            descricao: "Resuma textos longos e complexos em parágrafos concisos, destacando as ideias principais. Ideal para quem precisa se manter informado rapidamente."
        },
        {
            nome: "Criação de diferentes formatos de conteúdo",
            descricao: "Gere diversos formatos de conteúdo, como poemas, scripts, músicas e códigos, expandindo as possibilidades criativas."
        },
        {
            nome: "Aprendizagem contínua",
            descricao: "Aprenda continuamente com novas informações e interações, tornando-se cada vez mais inteligente e capaz de realizar tarefas complexas."
        },
        {
            nome: "Análise de sentimentos",
            descricao: "Analise o sentimento expresso em um texto, identificando se é positivo, negativo ou neutro. Útil para entender a opinião pública sobre determinado assunto."
        },
        {
            nome: "Geração de código",
            descricao: "Gere código em diversas linguagens de programação, como Python, JavaScript e C++. Ideal para desenvolvedores que precisam de um ponto de partida para seus projetos."
        },
        {
            nome: "Criação de histórias interativas",
            descricao: "Crie histórias interativas nas quais o usuário pode tomar decisões e influenciar o desenrolar da narrativa. Perfeito para criar experiências imersivas."
        },
        {
            nome: "Resolução de problemas",
            descricao: "Ajude a resolver problemas lógicos e matemáticos, fornecendo soluções passo a passo e explicações detalhadas."
        },
        {
            nome: "Simulação de conversas",
            descricao: "Simule conversas com diferentes personagens, desde amigos até figuras históricas. Ideal para fins educacionais ou de entretenimento."
        },
        {
            nome: "Geração de ideias criativas",
            descricao: "Gere ideias originais e inovadoras para diversos projetos, como campanhas de marketing, desenvolvimento de produtos e resolução de problemas."
        },
        {
            nome: "Adaptação a diferentes estilos de escrita",
            descricao: "Adapte seu estilo de escrita para se adequar a diferentes públicos e contextos, como formal, informal, técnico ou criativo."
        },
        {
            nome: "Criação de conteúdo para mídias sociais",
            descricao: "Crie posts engajadores para redes sociais, como o Twitter, Instagram e Facebook, aumentando o alcance e o envolvimento do seu público."
        },
        {
            nome: "Extração de informações de textos",
            descricao: "Extraia informações relevantes de grandes volumes de texto, como artigos científicos, relatórios e notícias."
        },
        {
            nome: "Geração de scripts para vídeos",
            descricao: "Gere scripts para vídeos explicativos, tutoriais e outros formatos de vídeo, facilitando a criação de conteúdo audiovisual."
        },
        {
            nome: "Criação de jogos de texto",
            descricao: "Crie jogos textuais interativos, nos quais o jogador avança na história através de comandos de texto."
        },
        {
            nome: "Geração de música",
            descricao: "Componha melodias e harmonias em diversos estilos musicais, podendo criar trilhas sonoras personalizadas ou auxiliar na composição de músicas originais."
        },
        {
            nome: "Criação de apresentações",
            descricao: "Gere apresentações visuais atraentes e informativas, com slides personalizados e conteúdo relevante para diferentes públicos."
        },
        {
            nome: "Geração de relatórios",
            descricao: "Gere relatórios concisos e informativos a partir de dados brutos, facilitando a análise e a tomada de decisões."
        }
    ],
    exemplosDeUso: [
        "Ajudar a escrever e-mails e redações",
        "Traduzir textos para diferentes idiomas",
        "Responder a dúvidas sobre diversos assuntos",
        "Criar histórias e poemas",
        "Auxiliar na programação",
        "Analisar a opinião de clientes em relação a um produto",
        "Gerar código para um site simples",
        "Criar uma história interativa para crianças",
        "Resolver problemas matemáticos simples",
        "Simular uma conversa com um personagem histórico",
        "Gerar ideias para um novo produto",
        "Escrever um artigo de blog em um estilo específico",
        "Criar posts para o Instagram",
        "Extrair informações importantes de um documento legal",
        "Gerar um script para um vídeo explicativo",
        "Criar um jogo de texto baseado em uma história em particular",
        "Compor uma música em um estilo específico",
        "Criar uma apresentação para uma reunião",
        "Gerar um relatório sobre um determinado assunto"
    ]
};


const textoIA = {
    titulo: "A Inteligência Artificial: Uma Mão Amiga no Nosso Dia a Dia",
    paragrafo: "<p>A Inteligência Artificial (IA), antes vista como algo distante da realidade, tornou-se uma parte cada vez mais presente em nossas vidas. Mas afinal, o que é a IA e como ela pode nos ajudar?</p> <p>A IA, simplificando, é a capacidade de máquinas aprenderem e realizarem tarefas que antes só nós,    humanos, éramos capazes de fazer. Isso inclui desde tarefas simples, como reconhecer rostos em fotos, até tarefas mais complexas, como traduzir idiomas e até mesmo dirigir carros.</p> <p>É importante ressaltar que a IA não veio para substituir os humanos, mas sim para complementar nossas capacidades. A IA é uma ferramenta que pode ser usada para o bem, como para resolver problemas sociais e ambientais, ou para o mal, como para manipular informações e disseminar fake news.</p> <p>Em resumo, a IA é uma tecnologia com um enorme potencial para transformar o mundo. Ao entender como ela funciona e como podemos utilizá-la de forma ética e responsável, podemos construir um futuro melhor para todos.</p>",
    destaque_titulo: "Mas como a IA pode nos ajudar no dia a dia?",
    destaque_itens: [
        "Facilitando a vida: A IA está presente em assistentes virtuais como a Siri e o Google Assistant, que podem responder perguntas, tocar músicas e até mesmo controlar dispositivos em casa.",
        "Melhorando a saúde: Através da análise de dados médicos, a IA pode auxiliar no diagnóstico de doenças, no desenvolvimento de novos medicamentos e na criação de tratamentos personalizados.",
        "Aumentando a produtividade: Em diversas áreas, como indústria e comércio, a IA automatiza processos, reduzindo erros e aumentando a eficiência.",
        "Personalizando a experiência: Plataformas de streaming e redes sociais utilizam a IA para recomendar filmes, músicas e conteúdos que se adaptam aos nossos gostos e interesses.",
        "Impulsionando a pesquisa: A IA é uma ferramenta poderosa para pesquisadores em diversas áreas, como ciência, engenharia e humanidades."
    ]
};


const footer = {
    sobre: "<h3>Sobre a imersão DEV</h3> <p>Essa imersão é oferecida por Alura com Google Gemini</p> <p>Instrutores: Luciano Martins, Rafaella Ballerini e Guilherme Lima</p> <p>Esta Imersão foi feita para quem tem pouco ou nenhum conhecimento em programação e quer aprender a programar, usar o Gemini na prática e comerçar um portfólio</p>",
    links: [
        {
            titulo: "Alura",
            url: "https://www.alura.com.br/sobre"
        },
        {
            titulo: "Google Gemini",
            url: "https://goo.gle/AluraGemini"
        },
        {
            titulo: "Discord",
            url: "https://discord.gg/UV8ujzHchj"
        },
        {
            titulo: "Live 04/09 às 18:30 | Como construir uma carreira Dev",
            url: "https://youtube.com/live/pAWkbX09yBw"
        }
    ],
    copyright: "<p>&copy; 2024 - Imersão Dev com Gemini. Desenvolvendo um projeto com a Alura e o Google Gemini.</p>"
};