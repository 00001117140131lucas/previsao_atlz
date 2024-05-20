const key = "78f6769cd083cae9b272998807d4e095";

function colocardadosnatela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°c";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarcidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    colocardadosnatela(dados);
}

// Detectando a tecla "Enter" no campo de entrada de texto
document.querySelector(".input-cidade").addEventListener("keypress", function(event) {
    // Verifica se a tecla pressionada é "Enter" (código 13)
    if (event.keyCode === Enter) {
        // Chama a função de busca da cidade
        const cidade = document.querySelector(".input-cidade").value;
        buscarcidade(cidade);
    }
});

// Função para acionar a pesquisa ao clicar no botão
function cliqueinobotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarcidade(cidade);
}
