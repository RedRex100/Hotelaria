function enviarConsumo() {
    // Coleta os valores dos itens de consumo
    const cerveja = parseInt(document.getElementById('cerveja').value);
    const suco = parseInt(document.getElementById('suco').value);
    const agua = parseInt(document.getElementById('agua').value);
    const lancheNatural = parseInt(document.getElementById('lanche-natural').value);
    const barrinhaCereal = parseInt(document.getElementById('barrinha-cereal').value);

    // Calcula o total de consumo
    const total = (cerveja*9) + (suco*8) + (agua*5) + (lancheNatural*10) + (barrinhaCereal*3.50);
    document.getElementById("total").innerHTML = total;
}