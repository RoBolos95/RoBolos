document.addEventListener("DOMContentLoaded", function() {
    const addEventButton = document.querySelector(".add-event");
    const adicionarEventoButton = document.querySelector("#adicionarEvento");
    const eventoForm = document.querySelector("#eventoForm");
    
    addEventButton.addEventListener("click", function() {
      // Limpar os campos do formulário antes de abrir o modal
      eventoForm.reset();
      // Exibir o modal
      $('#myModal').modal('show');
    });
    
    adicionarEventoButton.addEventListener("click", function() {
      // Obter os valores dos campos
      const cliente = document.querySelector("#cliente").value;
      const pedido = document.querySelector("#pedido").value;
      const produto = document.querySelector("#produto").value;
      const preco = document.querySelector("#preco").value;
      const quantidade = document.querySelector("#quantidade").value;
      
      // Aqui você pode adicionar lógica para criar um novo evento com os valores acima
      // Por exemplo, adicionar à lista de eventos ou realizar alguma ação com esses valores
      console.log("Cliente:", cliente);
      console.log("N do Pedido:", pedido);
      console.log("Nome do Produto:", produto);
      console.log("Preço:", preco);
      console.log("Quantidade:", quantidade);
      
      // Fechar o modal
      $('#myModal').modal('hide');
    });
  });