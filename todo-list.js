// Função responsável por adicionar item pelo evento de onkeypress no input
function adicionarItemPelaTecla(event) {
  // Pegando o tipo da tecla pelo evento
  const tecla = event.key;

  // Verificando se a tecla pressionada é o Enter
  if (tecla === "Enter") {
    // Chamando a função responsável por adicionar item
    adicionarItem();
  }
}

function adicionarItem() {
  // Pegando o valor do input
  const valorInput = document.querySelector("input").value;

  // Pegando a tag UL do nosso HTML pelo ID
  const minhaTagUL = document.getElementById("lista-de-tarefas");

  // Criando tag LI com JavaScript
  const criarTagLI = document.createElement("li");

  // Criando uma tag em negrito
  const tagRemover = "<b onclick='removerItem(event)'> Remover </b>";

  // Adicionando um texto para nossa tag li criada
  criarTagLI.innerHTML = valorInput + tagRemover;

  // Adicionando a tag li para nossa ul
  minhaTagUL.appendChild(criarTagLI);

  console.log("ENTROU NA FUNÇÃO ADICIONAR ITEM");
}

function removerItem(event) {
  // Pegando tag <b> dentro do nosso evento
  const tagRemover = event.target;

  const tagLi = tagRemover.parentNode;

  console.log("CLIKEI NA FUNÇÃO REMOVER");

  //tagLi.parentNode.removeChild(node);

  tagLi.remove();

  console.log(tagLi);
}
