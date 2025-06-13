// Alternar tema claro/escuro
const btnTema = document.getElementById('toggle-tema');
btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    btnTema.textContent = 'Modo Claro';
  } else {
    btnTema.textContent = 'Modo Escuro';
  }
});

// Elementos do formulário e modal
const form = document.getElementById('contato-form');
const modal = document.getElementById('modal');
const fecharModal = document.getElementById('fechar-modal');
const mensagemModal = document.getElementById('mensagem-modal');

// Envio do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevenir envio padrão

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Validações simples
  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!email.includes('@')) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Mostrar mensagem no modal
  mensagemModal.textContent = `Obrigado, ${nome}! Em breve entrarei em contato.`;
  modal.style.display = 'flex';  // exibe o modal

  form.reset(); // limpar formulário
});

// Fechar modal
fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Opcional: fechar modal clicando fora da caixa (no fundo)
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
