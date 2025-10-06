// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar o arquivo de notícias
    function loadNewsData() {
        // Simular dados de notícias (em um sistema real, isso viria de um banco de dados)
        const newsData = [
            {
                id: 1,
                title: "Presidente assina decreto para reforma tributária",
                category: "Política",
                date: "15 de março de 2024",
                excerpt: "O presidente da República assinou hoje um decreto que inicia o processo de reforma tributária, com o objetivo de simplificar o sistema fiscal brasileiro e reduzir a carga tributária sobre empresas.",
                image: "Imagem da Notícia"
            },
            {
                id: 2,
                title: "Bolsa de Valores fecha em alta após anúncio do BC",
                category: "Economia",
                date: "15 de março de 2024",
                excerpt: "A bolsa de valores brasileira encerrou o pregão em alta de 2,3% após o Banco Central anunciar medidas para controlar a inflação e estabilizar a economia.",
                image: "Imagem da Notícia"
            },
            {
                id: 3,
                title: "Nova startup brasileira atrai investimento de R$ 50 milhões",
                category: "Tecnologia",
                date: "15 de março de 2024",
                excerpt: "Uma startup de inteligência artificial sediada em São Paulo conseguiu atrair um investimento de R$ 50 milhões de fundos internacionais para expandir suas operações na América Latina.",
                image: "Imagem da Notícia"
            },
            {
                id: 4,
                title: "Seleção Brasileira vence amistoso e se prepara para Copa América",
                category: "Esportes",
                date: "14 de março de 2024",
                excerpt: "A seleção brasileira de futebol venceu por 3 a 1 o amistoso contra a Argentina em Buenos Aires, mostrando bom desempenho na preparação para a Copa América que será realizada no Brasil.",
                image: "Imagem da Notícia"
            }
        ];
        
        return newsData;
    }

    // Função para renderizar as notícias
    function renderNews(newsData) {
        const newsContainer = document.getElementById('news-container');
        const featuredContainer = document.getElementById('featured-container');
        
        if (!newsContainer || !featuredContainer) return;
        
        // Renderizar notícias diárias
        newsData.slice(0, 3).forEach(news => {
            const newsCard = createNewsCard(news);
            newsContainer.appendChild(newsCard);
        });
        
        // Renderizar notícia em destaque
        if (newsData.length > 3) {
            const featuredCard = createNewsCard(newsData[3]);
            featuredContainer.appendChild(featuredCard);
        }
    }

    // Função para criar um cartão de notícia
    function createNewsCard(news) {
        const card = document.createElement('article');
        card.className = 'news-card';
        
        card.innerHTML = `
            <div class="news-image">${news.image}</div>
            <div class="news-content">
                <div class="news-meta">
                    <span>${news.date}</span>
                    <span>•</span>
                    <span>${news.category}</span>
                </div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
                <a href="#" class="read-more" data-id="${news.id}">Ler mais <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        // Adicionar evento de clique
        card.querySelector('.read-more').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Visualizando notícia completa. Em um sistema real, esta página mostraria o conteúdo completo da notícia.');
        });
        
        return card;
    }

    // Função para carregar o arquivo de arquivos
    function loadArchiveData() {
        // Simular dados de arquivos (em um sistema real, isso viria de um banco de dados)
        return [
            { id: 1, title: "Reforma da Previdência avança no Congresso", date: "14/03/2024" },
            { id: 2, title: "Clima: temperatura recorde em várias cidades", date: "13/03/2024" },
            { id: 3, title: "Nova lei de proteção de dados entra em vigor", date: "12/03/2024" },
            { id: 4, title: "Festival de Cinema atrai público recorde", date: "11/03/2024" },
            { id: 5, title: "Eleições municipais: candidatos se registram", date: "10/03/2024" }
        ];
    }

    // Função para renderizar o arquivo
    function renderArchive(archiveData) {
        const archiveList = document.getElementById('archive-list');
        
        if (!archiveList) return;
        
        archiveData.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <a href="#" class="archive-link" data-id="${item.id}">
                    <span class="archive-date">${item.date}</span>
                    <span>${item.title}</span>
                </a>
            `;
            
            // Adicionar evento de clique
            listItem.querySelector('.archive-link').addEventListener('click', function(e) {
                e.preventDefault();
                alert('Visualizando notícia do arquivo. Em um sistema real, esta página carregaria o conteúdo completo da notícia.');
            });
            
            archiveList.appendChild(listItem);
        });
    }

    // Inicializar a aplicação
    function init() {
        const newsData = loadNewsData();
        renderNews(newsData);
        
        const archiveData = loadArchiveData();
        renderArchive(archiveData);
    }

    // Executar a inicialização
    init();
});