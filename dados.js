let dados = [
    {
        nome: "MASP",
        descricao: "O Museu de Arte de São Paulo Assis Chateaubriand (MASP) é uma das instituições culturais mais importantes do Brasil e da América Latina.",
        link: "https://masp.org.br",
        categoria: "museu",
        tags: ["arte", "cultura", "exposições"]
    },
    {
        nome: "MuBE",
        descricao: "O Museu Brasileiro de Escultura e Ecologia (MuBE) é um espaço de arte contemporânea que abriga exposições de esculturas e outras formas de arte.",
        link: "https://www.mube.space",
        categoria: "museu",
        tags: ["escultura", "arte", "cultura"]
    },
    {
        nome: "Parque Ibirapuera",
        descricao: "Um dos maiores parques urbanos do Brasil, com uma grande área verde e atividades para todas as idades.",
        link: "https://www.prefeitura.sp.gov.br/ibira",
        categoria: "parque",
        tags: ["natureza", "lazer", "família"]
    },
    {
        nome: "Cinema Kinoplex",
        descricao: "Um cinema moderno com uma ampla variedade de filmes em cartaz.",
        link: "https://www.kinoplex.com.br",
        categoria: "cinema",
        tags: ["filmes", "entretenimento", "cinema"]
    },
    {
        nome: "MIS",
        descricao: "O Museu da Imagem e do Som é um espaço dedicado à preservação e exposição da memória audiovisual.",
        link: "https://www.mis-sp.org.br",
        categoria: "museu",
        tags: ["audiovisual", "cultura", "exposições"]
    },
    {
        nome: "Museu da Língua Portuguesa",
        descricao: "Um museu interativo dedicado à celebração e preservação da língua portuguesa.",
        link: "https://museudalinguaportuguesa.org.br",
        categoria: "museu",
        tags: ["língua", "cultura", "educação"]
    },
    {
        nome: "Pinacoteca",
        descricao: "A Pinacoteca de São Paulo é um dos museus de arte mais importantes do Brasil, com um vasto acervo de obras brasileiras.",
        link: "https://www.pinacoteca.org.br",
        categoria: "museu",
        tags: ["arte", "cultura", "história"]
    },
    {
        nome: "Museu Catavento",
        descricao: "Museu interativo de ciência e tecnologia voltado para crianças e adolescentes.",
        link: "https://cataventocultural.org.br",
        categoria: "museu",
        tags: ["ciência", "educação", "interativo"]
    },
    {
        nome: "Estádio do Corinthians",
        descricao: "O estádio do Sport Club Corinthians Paulista, também conhecido como Arena Corinthians, recebe jogos de futebol e eventos.",
        link: "https://www.corinthians.com.br/arena",
        categoria: "esporte",
        tags: ["futebol", "corinthians", "arena"]
    },
    {
        nome: "Estádio do São Paulo",
        descricao: "O Morumbi é o estádio oficial do São Paulo Futebol Clube e um dos maiores estádios do Brasil.",
        link: "https://www.saopaulofc.net",
        categoria: "esporte",
        tags: ["futebol", "são paulo", "morumbi"]
    },
    {
        nome: "Estádio do Santos",
        descricao: "A Vila Belmiro é o estádio do Santos Futebol Clube, um dos clubes mais tradicionais do Brasil.",
        link: "https://www.santosfc.com.br",
        categoria: "esporte",
        tags: ["futebol", "santos", "vila belmiro"]
    },
    {
        nome: "Estádio do Palmeiras",
        descricao: "O Allianz Parque é o estádio do Palmeiras, um dos clubes de futebol mais importantes do Brasil.",
        link: "https://www.palmeiras.com.br/allianz-parque",
        categoria: "esporte",
        tags: ["futebol", "palmeiras", "arena"]
    },
    {
        nome: "Roller Jam",
        descricao: "Um espaço de entretenimento especializado em patinação com uma pista ampla e música animada.",
        link: "https://www.rollerjam.com.br",
        categoria: "lazer",
        tags: ["patinação", "diversão", "família"]
    },
    {
        nome: "Zoológico de São Paulo",
        descricao: "Um dos maiores zoológicos do Brasil, com diversas espécies de animais e atividades educativas.",
        link: "https://www.zoologico.com.br",
        categoria: "parque",
        tags: ["animais", "natureza", "educação"]
    },
    {
        nome: "Museu da Imigração Japonesa",
        descricao: "Museu dedicado à história e cultura da imigração japonesa no Brasil.",
        link: "https://www.bunkyo.org.br/br/museu-historico/",
        categoria: "museu",
        tags: ["história", "japonesa", "cultura"]
    },
    {
        nome: "Currys Culinária Indiana",
        descricao: "Restaurante localizado na Liberdade especializado em culinária indiana com pratos autênticos e sabores marcantes.",
        link: "https://www.instagram.com/currysculinariaindiana/",
        categoria: "restaurante",
        tags: ["culinária", "indiana", "comida"]
    },
    {
        nome: "Joystick Bar",
        descricao: "Bar temático com jogos arcade e ambiente descontraído.",
        link: "https://www.instagram.com/barjoystick/",
        categoria: "bar",
        tags: ["jogos", "bar", "diversão"]
    },
    {
        nome: "Madame Underground Club",
        descricao: "Bar alternativo com música ao vivo e festas temáticas.",
        link: "https://www.instagram.com/madameclub/?hl=pt",
        categoria: "bar",
        tags: ["música", "noite", "diversão"]
    },
    {
        nome: "Shopping SP Market",
        descricao: "Um dos maiores shoppings da cidade, com diversas lojas e um parque de diversões indoor.",
        link: "https://www.shoppingspmarket.com.br",
        categoria: "shopping",
        tags: ["compras", "lazer", "lojas"]
    },
    {
        nome: "Shopping Higienópolis",
        descricao: "Shopping de alto padrão com lojas de luxo e gastronomia variada.",
        link: "https://iguatemi.com.br/patiohigienopolis/index.php/",
        categoria: "shopping",
        tags: ["compras", "luxo", "lojas"]
    },
    {
        nome: "Shopping Cidade São Paulo",
        descricao: "Shopping localizado na Avenida Paulista com ampla variedade de lojas e restaurantes.",
        link: "https://www.shoppingcidadesp.com.br",
        categoria: "shopping",
        tags: ["compras", "avenida paulista", "restaurantes"]
    },
    {
        nome: "Biblioteca Mário de Andrade",
        descricao: "Uma das bibliotecas mais importantes de São Paulo, com grande acervo de livros e espaço de leitura.",
        link: "https://www.instagram.com/bibliotecamariodeandrade/",
        categoria: "biblioteca",
        tags: ["livros", "cultura", "leitura"]
    },
    {
        nome: "Igreja da Sé",
        descricao: "Catedral imponente localizada no centro de São Paulo, um marco da arquitetura gótica.",
        link: "https://www.instagram.com/catedraldasesp/",
        categoria: "igreja",
        tags: ["religião", "arquitetura", "história"]
    },
    {
        nome: "Shopping Internacional Guarulhos",
        descricao: "Shopping localizado em Guarulhos, com opções de lazer e compras.",
        link: "https://www.internacionalshopping.com",
        categoria: "shopping",
        tags: ["compras", "guarulhos", "lojas"]
    },
    {
        nome: "Autódromo de Interlagos",
        descricao: "Famoso circuito de corridas que sedia o Grande Prêmio do Brasil de Fórmula 1.",
        link: "https://autodromodeinterlagos.com.br",
        categoria: "esporte",
        tags: ["corrida", "f1", "esporte", "fórmula 1"]
    },
    {
        nome: "Aquário de São Paulo",
        descricao: "O maior aquário da América Latina, com diversas espécies marinhas e aquáticas.",
        link: "https://www.aquariodesaopaulo.com.br",
        categoria: "parque",
        tags: ["animais", "aquático", "educação"]
    }
];