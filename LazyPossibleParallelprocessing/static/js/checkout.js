  const lista = [1, 2, 3, 4];
  function criarBotoes() {
    const botoesContainer = document.getElementById('botoes');
    for (const item of lista) {
      const botao = document.createElement('button');
      botao.textContent = item;
      botao.onclick = () => executarFuncao(item); // Define a função a ser executada ao clicar
      botoesContainer.appendChild(botao);
    }
  }
  function executarFuncao(item) {
    console.log(`Botão ${item} foi clicado!`);
    // Aqui você pode adicionar o código para executar a função específica do botão
  }
  window.onload = criarBotoes; // Chama a função para criar os botões ao carregar a página