// Função para calcular o custo do projeto arquitetônico (questão 17)
function calcularCustoProjeto() {
    const area = parseFloat(document.getElementById('area17').value);
    const valorMetro = parseFloat(document.getElementById('valorMetro17').value);
    const resultadoDiv = document.getElementById('resultado17');
    
    const custo = area * valorMetro;
    resultadoDiv.innerHTML = `<em>Custo final:</em> R$ ${custo.toFixed(2)}`;
    resultadoDiv.classList.add('aparece');
}

// Função para calcular a altura da cisterna (questão 27)
function calcularAlturaCisterna() {
    const comprimento = parseFloat(document.getElementById('comprimento27').value);
    const largura = parseFloat(document.getElementById('largura27').value);
    const litros = parseFloat(document.getElementById('litros27').value);
    const resultadoDiv = document.getElementById('resultado27');
    
    const volumeNecessario = litros / 1000;
    const altura = volumeNecessario / (comprimento * largura);
    resultadoDiv.innerHTML = `<em>Altura necessária:</em> ${altura.toFixed(2)} metros`;
    resultadoDiv.classList.add('aparece');
}

// Função para calcular as unidades de milhar, centena, dezena e unidade (questão 37)
function calcularDigitos() {
    const numero = parseInt(document.getElementById('numero37').value);
    const resultadoDiv = document.getElementById('resultado37');
    if (numero < 1000 || numero > 9999) {
        resultadoDiv.innerHTML = "Por favor, digite um número entre 1000 e 9999.";
        return;
    }
    
    const milhar = Math.floor((numero % 10000) / 1000);
    const centena = Math.floor((numero % 1000) / 100);
    const dezena = Math.floor((numero % 100) / 10);
    const unidade = numero % 10;
    resultadoDiv.innerHTML = 
        `<em>Milhar:</em> ${milhar}, <em>Centena:</em> ${centena}, <em>Dezena:</em> ${dezena}, <em>Unidade:</em> ${unidade}`;
    resultadoDiv.classList.add('aparece');
}
