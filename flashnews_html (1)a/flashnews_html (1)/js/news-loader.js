// js/news-loader.js
// Sistema de carregamento dinâmico de notícias com imagens reais
class NewsLoader {
    constructor() {
        this.newsData = [];
        this.archiveData = [];
        this.loadedCount = 0;
        this.loadBatchSize = 3; // quantidade de notícias por rolagem
    }

    async loadNewsFromServer() {
        try {
            // Simulação de dados reais atualizados (2025)
            this.newsData = [
                {
                    id: 1,
                    title: "Governo investe R$ 500 milhões em mobilidade urbana sustentável",
                    category: "Infraestrutura",
                    date: "5 de outubro de 2025",
                    excerpt: "Plano prevê ciclovias e ônibus elétricos nas capitais até 2026 para reduzir emissões e modernizar o transporte.",
                    image: "https://images.unsplash.com/photo-1529429611270-4e0b0c1e2c55?auto=format&fit=crop&w=1200&q=80"
                },
                {
                    id: 2,
                    title: "Ministério da Educação lança programa de bolsas para ensino remoto",
                    category: "Educação",
                    date: "3 de outubro de 2025",
                    excerpt: "Novo programa concede bolsas de estudo para cursos online de universidades públicas e privadas.",
                    image: "https://images.unsplash.com/photo-1588075592446-251d61e38f1b?auto=format&fit=crop&w=1200&q=80"
                },
                {
                    id: 3,
                    title: "Startups de IA brasileiras crescem 40% em 2025",
                    category: "Tecnologia",
                    date: "1 de outubro de 2025",
                    excerpt: "Empresas de inteligência artificial ampliam presença internacional com novos investimentos e contratações.",
                    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
                },
                {
                    id: 4,
                    title: "Fortnite ganha atualização com novos modos criativos",
                    category: "Games",
                    date: "29 de setembro de 2025",
                    excerpt: "Epic Games lança atualização que permite criar mapas com física avançada e IA integrada.",
                    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d7?auto=format&fit=crop&w=1200&q=80"
                },
                {
                    id: 5,
                    title: "Presidente assina acordo internacional sobre energia limpa",
                    category: "Política",
                    date: "25 de setembro de 2025",
                    excerpt: "Brasil firma compromisso para ampliar o uso de energia solar e eólica até 2030.",
                    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80"
                },
                {
                    id: 6,
                    title: "Bolsa de valores brasileira fecha em alta após relatório do FMI",
                    category: "Economia",
                    date: "22 de setembro de 2025",
                    excerpt: "Mercado reage positivamente ao relatório do FMI que prevê crescimento de 2,5% para o Brasil.",
                    image: "https://images.unsplash.com/photo-1565374395542-0ce18882c857?auto=format&fit=crop&w=1200&q=80"
                }
            ];

            // Ordenar por data (mais recente primeiro)
            return this.newsData;
        } catch (error) {
            console.error("Erro ao carregar notícias:", error);
            return [];
        }
    }

    async loadArchiveFromServer() {
        this.archiveData = [
            { id: 1, title: "Reforma da Previdência avança no Congresso", date: "14/03/2024" },
            { id: 2, title: "Clima: temperatura recorde em várias cidades", date: "13/03/2024" },
            { id: 3, title: "Nova lei de proteção de dados entra em vigor", date: "12/03/2024" },
            { id: 4, title: "Festival de Cinema atrai público recorde", date: "11/03/2024" }
        ];
        return this.archiveData;
    }

    getNews() {
        return this.newsData;
    }

    getArchive() {
        return this.archiveData;
    }
}

// Inicialização e rolagem infinita
const newsLoader = new NewsLoader();

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("news-container");
    const news = await newsLoader.loadNewsFromServer();

    // Função para renderizar notícias por lote
    const renderNewsBatch = () => {
        const nextBatch = news.slice(newsLoader.loadedCount, newsLoader.loadedCount + newsLoader.loadBatchSize);
        nextBatch.forEach(item => {
            const article = document.createElement("article");
            article.classList.add("news-item");
            article.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="news-image">
                <div class="news-content">
                    <p class="news-meta">${item.date} • ${item.category}</p>
                    <h3>${item.title}</h3>
                    <p>${item.excerpt}</p>
                </div>
            `;
            container.appendChild(article);
        });
        newsLoader.loadedCount += nextBatch.length;
    };

    renderNewsBatch();

    // Detecta quando chega ao fim da página
    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            renderNewsBatch();
        }
    });
});

// Exportar globalmente se necessário
if (typeof window !== "undefined") {
    window.newsLoader = newsLoader;
}
