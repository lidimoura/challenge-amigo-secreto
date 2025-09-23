//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Array para armazernar os amigos
let amigos = [];

//Função para adicionar amigos
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    input.value = ""; //limpa o campo de input
    
    atualizarLista();
    
}

//Função para atualizar a lista de amigos na tela
function atualizarLista() {
    //Seleciona o elemento (ul) onde os itens serão exibidos
    const lista = document.getElementById("listaAmigos");

    //Se o elemento não existir, interrompe para evitar erros
     if (!lista) {
        console.warn("Elemento '#listaAmigos' não encontrado.");
        return;
    }

    //Limpa a lista antes de recomeçar o sorteio 
    lista.innerHTML = "";

    //Percorre o array de amigos e cria um <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li"); //cria o item
    li.textContent = amigos[i]; //contéudo do item
    lista.appendChild(li); //adiciona o item na lista
    }
}

//Função para sortear um amigo da lista
function sortearAmigo() {
    //Seleciona o elemento onde o resultado será exibido
    const resultado = document.getElementById("resultado");

    //Verifica se o array de amigos não está vazio
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }   

    //Gera um indice aleatório dentro do array amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Exiibe o resultado na tela
    if (resultado) {
        resultado.innerHTML = `<lis>${amigoSorteado}<li>`;
    } else {
        console.warn("Elemento ´#resultado´ não encontrado.");
    }
}

