const reservas = [];
function enviar() {
  const nome = document.getElementById("nome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const confirmarSenha = document.getElementById("confirmar-senha").value.trim();

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    return;
  }
  if (senha == confirmarSenha) {
    const novaReserva = {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      email: email,
      senha: senha
    };
    reservas.push(novaReserva); // Adiciona a reserva à lista
    // Limpa os campos de entrada
    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confirmar-senha").value ="";
    }
    let n =""
    for (r of reservas) {
      n += r.nome
    }
    document.getElementById("reservas").innerHTML = n;
  }