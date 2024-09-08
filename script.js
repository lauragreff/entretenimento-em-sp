//função de pesquisa
function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p class='mensagem-nada-encontrado'>Nada foi encontrado. <br> Você precisa digitar o nome de um local que quer <br> visitar ou algo que quer fazer, como 'museu' ou 'esporte' ;)</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";

    //itera sobre cada dado da lista de dados
    for (let dado of dados) {
        const nome = dado.nome.toLowerCase();
        const descricao = dado.descricao.toLowerCase();
        const categoria = dado.categoria.toLowerCase();
        const tags = dado.tags ? dado.tags.map(tag => tag.toLowerCase()) : [];

        //verifica se algum campo corresponde à pesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || categoria.includes(campoPesquisa) || tags.some(tag => tag.includes(campoPesquisa))) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="${dado.link}" target="_blank">${dado.nome}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    //caso não haja resultados, exibe mensagem
    if (!resultados) {
        resultados = "<p class='mensagem-nada-encontrado'>Nada foi encontrado. ;( <br> Ainda estamos aprimorando a base de dados!</p>";
    }    

    section.innerHTML = resultados;
}

//função para verificar o scroll
function checkScroll() {
    const apresentacao = document.querySelector('.apresentacao');
    const campoPesquisa = document.querySelector('.campo-pesquisa');
    const triggerPoint = window.innerHeight * 0.7;
    const apresentacaoBottom = apresentacao.getBoundingClientRect().bottom;

    //adiciona ou remove classes de acordo com scroll
    if (apresentacaoBottom < triggerPoint) {
        apresentacao.classList.add('fade-out');
        campoPesquisa.classList.add('visible');
    } else {
        apresentacao.classList.remove('fade-out');
        campoPesquisa.classList.remove('visible');
    }
}

window.addEventListener('scroll', checkScroll);
checkScroll();

//apresentação e carrossel
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
    currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
    updateCarrossel();
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carrosselInner.children.length - 1;
    updateCarrossel();
});