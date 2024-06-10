// Função responsável por adicionar item pelo evento de onkeypress no input
function adicionarItemPelaTecla(event) {
  // Pegando o tipo da tecla pelo evento
  var tecla = event.key;

  // Verificando se a tecla pressionada é o Enter
  if (tecla === "Enter") {
    // Chamando a função responsável por adicionar item
    adicionarItem();
  }
}

function adicionarItem() {
  // Pegando o valor do input
  var valorInputed = document.querySelector("input").value;

  // Pegando a tag UL do nosso HTML pelo ID
  var minhaTagUL = document.getElementById("lista-de-tarefas");

  // Criando tag LI com JavaScript
  var criarTagLI = document.createElement("li");

  // Adicionando um evento de click para a tag <li>
  criarTagLI.addEventListener("click", concluirTarefa);

  // Criando uma tag em negrito
  var tagRemover =
    "<i onclick='removerItem(event)' class='fa-solid fa-circle-minus'></i>";

  // Adicionando um texto para nossa tag li criada
  criarTagLI.innerHTML = valorInput + tagRemover;

  // Adicionando a tag li para nossa ul
  // minhaTagUL.appendChild(criarTagLI);

  // Limpando o valor do input
  var input = document.getElementById("input-tarefa");
  input.value = "";


  console.log("ENTROU NA FUNÇÃO ADICIONAR ITEM");
}

function removerItem(event) {
  // Pegando tag <i> dentro do nosso event
  var meuIcone = event.target;

  // Pegando a tag <li> através da minha tag <i> com propriedade parentElement
  var minhaLi = meuIcone.parentElement;

  // Excluindo a tag <li> com a função remove()
  minhaLi.remove();
}

// function concluirTarefa(event) {
//   // Pegando tag <li> dentro do nosso event
//   var minhaTagLi = event.target;

//   minhaTagLi.className = "essa-classe-nao-existe-no-css-por-isso-nao-aplica-estilo";
// }
