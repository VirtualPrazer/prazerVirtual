// Adicione scripts personalizados se necessário
// Aqui você pode incluir lógica para melhorar a interatividade ou carregar dados dinâmicos no futuro

// Exemplo: se houver comportamento adicional para os carrosséis
document.addEventListener('DOMContentLoaded', function() {
    var carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        carousel.addEventListener('slid.bs.carousel', function() {
            // Ações após o slide mudar
            console.log("Carrossel mudou");
        });
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const username = document.getElementById('floatingInput').value;
  const password = document.getElementById('floatingPassword').value;

  // Verifica se o usuário e senha estão corretos
  if (username === 'xavascas_xoxotantes' && password === 'strawberrycrazy2469') {
      alert('Login realizado com sucesso!');

      // Adiciona o link "Inserir Anúncio" ao header
      const nav = document.querySelector('.nav');
      const inserirAnuncio = document.createElement('li');
      inserirAnuncio.innerHTML = '<a href="inserir_anuncio.html" class="nav-link px-2 text-dark">Inserir Anúncio</a>';
      nav.appendChild(inserirAnuncio);
  } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
  }
});

