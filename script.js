// Função de pesquisa
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado pelo usuário
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. <br> Você precisa digitar o nome de um local que quer <br> visitar ou algo que quer fazer, como 'museu' ou 'esporte' ;)</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        let nome = dado.nome.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let categoria = dado.categoria.toLowerCase();
        let tags = dado.tags ? dado.tags.map(tag => tag.toLowerCase()) : []; // Converte cada tag para minúsculas

        // Verifica se o nome, descrição, categoria ou alguma tag corresponde à pesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || categoria.includes(campoPesquisa) || tags.some(tag => tag.includes(campoPesquisa))) {
            // Gera os resultados
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Caso não haja resultados, exibe mensagem
    if (!resultados) {
        resultados = "<p class='mensagem-nada-encontrado'>Nada foi encontrado. ;( <br> Ainda estamos aprimorando a base de dados!</p>";
    }    

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

// Função para verificar o scroll
function checkScroll() {
    const apresentacao = document.querySelector('.apresentacao');
    const campoPesquisa = document.querySelector('.campo-pesquisa');
    const triggerPoint = window.innerHeight * 0.7;

    const apresentacaoBottom = apresentacao.getBoundingClientRect().bottom;

    if (apresentacaoBottom < triggerPoint) {
        apresentacao.classList.add('fade-out');
    } else {
        apresentacao.classList.remove('fade-out');
    }

    if (apresentacaoBottom < triggerPoint) {
        campoPesquisa.classList.add('visible');
    } else {
        campoPesquisa.classList.remove('visible');
    }
}

window.addEventListener('scroll', checkScroll);

checkScroll();

// Apresentação e carrossel
const carrosselInner = document.querySelector('.carrossel-inner');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const itemWidth = document.querySelector('.item') ? document.querySelector('.item').offsetWidth + 10 : 0;

let currentIndex = 0;

function updateCarrossel() {
    carrosselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

next.addEventListener('click', () => {
    const maxIndex = carrosselInner.children.length - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarrossel();
});

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carrosselInner.children.length - 1;
    }
    updateCarrossel();
});