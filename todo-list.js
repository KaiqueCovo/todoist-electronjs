function adicionarItem() {
  // Pegando o valor do input
  const valorInput = document.querySelector("input").value;

  // Pegando a tag UL do nosso HTML pelo ID
  const minhaTagUL = document.getElementById("lista-de-tarefas");

  // Criando tag LI com JavaScript
  const criarTagLI = document.createElement("li");

  // Adicionando um texto para nossa tag li criada
  criarTagLI.innerText = valorInput;

  // Adicionando a tag li para nossa ul
  minhaTagUL.appendChild(criarTagLI);

  console.log("ENTROU NA FUNÇÃO ADICIONAR ITEM");
}
