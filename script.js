// Modo claro/escuro
const btnTema = document.getElementById('toggle-tema');
btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    btnTema.textContent = 'Modo Claro';
  } else {
    btnTema.textContent = 'Modo Escuro';
  }
});

// Validação simples do formulário
const form = document.getElementById('contato-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita envio padrão
  
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!email.includes('@')) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  alert(`Obrigado pela mensagem, ${nome}! Em breve entrarei em contato.`);
  form.reset();
});
