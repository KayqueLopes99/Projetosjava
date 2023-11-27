// Função para adicionar um filme à lista
/*function adicionarFilme() {
    // Pega o valor (filme favorito) do elemento com o id 'filme'
    var filmeFavorito = document.getElementById('filme').value;
  
    // Pega o elemento da lista de filmes usando o id 'listaFilmes'
    var elementoListaFilmes = document.getElementById('listaFilmes');
  
    // Adiciona o filme à lista (imagem do filme)
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>';
  
    // Limpa o campo de entrada do filme após adicioná-lo
    document.getElementById('filme').value = '';
  } */
  // Função para adicionar um filme à lista
function adicionarFilme() {
    // Pega o valor (URL do filme) do elemento com o id 'filme'
    var filmeFavorito = document.getElementById('filme').value;

    // Pega o elemento da lista de filmes usando o id 'listaFilmes'
    var elementoListaFilmes = document.getElementById('listaFilmes');

    // Cria um novo elemento div para conter a imagem e o botão de remoção
    var filmeDiv = document.createElement('div');

    // Adiciona a imagem do filme à div
    filmeDiv.innerHTML = '<img src=' + filmeFavorito + '>';

    // Cria um novo botão de remoção
    var botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';

    // Configura a função a ser chamada quando o botão de remoção é clicado
    botaoRemover.onclick = function() {
        // Remove o elemento pai do botão (a div que contém a imagem e o botão)
        elementoListaFilmes.removeChild(filmeDiv);
    };

    // Adiciona o botão de remoção à div do filme
    filmeDiv.appendChild(botaoRemover);

    // Adiciona a div completa à lista de filmes
    elementoListaFilmes.appendChild(filmeDiv);

    // Limpa o campo de entrada do filme após adicioná-lo
    document.getElementById('filme').value = '';
}