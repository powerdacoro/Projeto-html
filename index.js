


function descontos() {
    const lista = ["luciana", "Juliana Costa Rodrigues", "Daniel Costa Rodrigues"];
    const cliente = document.getElementById("cli").value.toLowerCase(); // Converte para minúsculo para ignorar case
  
    if (!cliente) {
      alert("Por favor, digite um nome.");
      return;
    }
  
    const clienteEncontrado = lista.find(nome => nome.toLowerCase() === cliente);
  
    if (clienteEncontrado) {
      alert( `Parabéns, ${clienteEncontrado}! Você tem um desconto!`);
    } 
  }