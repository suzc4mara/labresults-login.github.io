document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');

  // Foco automático no email
  if (emailInput) emailInput.focus();

  // Feedback simples ao tentar login
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!emailInput.value || !passwordInput.value) {
        alert('Por favor, preencha todos os campos.');
        if (!emailInput.value) emailInput.focus();
        else passwordInput.focus();
        return;
      }
      alert('Login enviado! (Exemplo)');
    });
  }
});
