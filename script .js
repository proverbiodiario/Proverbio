// Lista de provérbios
var provérbios = [
    "Provérbio 1",
    "Provérbio 2",
    "Provérbio 3",
    // Adicione mais provérbios conforme necessário
];

// Função para selecionar um provérbio aleatório
function selecionarProverbioAleatorio() {
    var indice = Math.floor(Math.random() * provérbios.length);
    return provérbios[indice];
}

// Função para verificar se a data mudou desde a última atualização
function dataMudou() {
    var dataAtual = new Date().toLocaleDateString();
    if (dataAtual !== localStorage.getItem('ultimaAtualizacao')) {
        return true;
    }
    return false;
}

// Função para atualizar o provérbio
function atualizarProverbio() {
    if (dataMudou()) {
        var proverbioElement = document.getElementById("proverbio");
        var proverbio = selecionarProverbioAleatorio();
        proverbioElement.textContent = proverbio;
        localStorage.setItem('proverbioAtual', proverbio);
        localStorage.setItem('ultimaAtualizacao', new Date().toLocaleDateString());
    } else {
        var proverbioElement = document.getElementById("proverbio");
        var proverbio = localStorage.getItem('proverbioAtual');
        proverbioElement.textContent = proverbio;
    }
}

// Chamada inicial para exibir um provérbio ao carregar a página
atualizarProverbio();