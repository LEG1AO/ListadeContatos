const form = document.querySelector('form');
const listaContatos = document.querySelector('#lista-contatos');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // obter os valores dos campos do formulário
  const nome = this.nome.value;
  const telefone = this.telefone.value;

  // criar um novo elemento de lista <li> e adicioná-lo à lista de contatos
  const novoContato = document.createElement('li');
  novoContato.textContent = nome + ' - ' + telefone;
  listaContatos.appendChild(novoContato);

  // limpar os valores dos campos do formulário
  this.nome.value = '';
  this.telefone.value = '';
});


