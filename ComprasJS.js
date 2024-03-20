function adicionarItem() {
    var novoItemInput = document.getElementById("novoItem");
    var novoItemValor = novoItemInput.value;
    if (novoItemValor.trim() !== "") {
      var lista = document.getElementById("lista");
      var novoItem = document.createElement("li");
      novoItem.innerHTML = '<input type="checkbox">' + novoItemValor;
      lista.appendChild(novoItem);
      novoItemInput.value = "";
    } else {
      alert("Por favor, insira um item válido.");
    }
  }
  
  function removerItens() {
    var lista = document.getElementById("lista");
    var historico = document.getElementById("historico");
    var itensSelecionados = lista.querySelectorAll("li input[type='checkbox']:checked");
    itensSelecionados.forEach(function(item) {
      var listItem = item.parentNode;
      lista.removeChild(listItem);
      historico.appendChild(listItem.cloneNode(true));
      item.checked = false; 
    });
  }
  