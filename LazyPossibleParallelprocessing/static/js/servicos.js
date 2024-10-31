function enviarServicos() {
    const cafedamanhaSim = document.getElementById('cafe-da-manha-sim');
    const servicoDeQuartoSim = document.getElementById('servico-de-quarto-sim');
    const lavanderiaSim = document.getElementById('lavanderia-sim');
    const almocoSim = document.getElementById('almoco-sim');
    const jantaSim = document.getElementById('janta-sim');
      let custoServico = 0;
      if (servicoDeQuartoSim.checked) {
        custoServico = 150;
      }
      if (cafedamanhaSim.checked) {
        custoServico += 100;
      }
    if (lavanderiaSim.checked) {
        custoServico += 50;
      }
    if (almocoSim.checked) {
        custoServico += 100;
      }
    if (jantaSim.checked) {
        custoServico += 100;
      }
document.getElementById("total").innerHTML = custoServico;
}
