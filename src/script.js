document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');

  // Foco automático no email
  if (emailInput) emailInput.focus();

  // Função para shake animado
  function shakeForm() {
    if (form) {
      form.classList.remove('shake');
      void form.offsetWidth;
      form.classList.add('shake');
      setTimeout(() => form.classList.remove('shake'), 500);
    }
  }

  // Foco automático no campo de senha ao Enter no email
  if (emailInput && passwordInput) {
    emailInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        passwordInput.focus();
      }
    });
    passwordInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        form && form.dispatchEvent(new Event('submit', {cancelable: true, bubbles: true}));
      }
    });
  }
  if (passwordInput) {
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'toggle-password-btn';
    toggleBtn.setAttribute('aria-label', 'Mostrar ou ocultar senha');
    const eyeOpen = `<svg viewBox="0 0 24 24" fill="white"><path d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z" stroke="#7A5C3E" stroke-width="2" fill="white"/><circle cx="12" cy="12" r="4" stroke="#7A5C3E" stroke-width="2" fill="white"/></svg>`;
    const eyeClosed = `<svg viewBox="0 0 24 24" fill="white"><path d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z" stroke="#7A5C3E" stroke-width="2" fill="white"/><circle cx="12" cy="12" r="4" stroke="#7A5C3E" stroke-width="2" fill="white"/><line x1="3" y1="21" x2="21" y2="3" stroke="#7A5C3E" stroke-width="2"/></svg>`;
    toggleBtn.innerHTML = eyeOpen;
    let visible = false;
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      visible = !visible;
      if (visible) {
        passwordInput.type = 'text';
        toggleBtn.innerHTML = eyeClosed;
      } else {
        passwordInput.type = 'password';
        toggleBtn.innerHTML = eyeOpen;
      }
    });
    passwordInput.parentNode.appendChild(toggleBtn);
  }

  // Validação de formulário
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Remove mensagens antigas
      const oldMsg = form.querySelector('.form-msg');
      if (oldMsg) oldMsg.remove();
      let valid = true;
      if (!emailInput.value || !emailInput.value.includes('@')) {
        valid = false;
      }
      if (!passwordInput.value || passwordInput.value.length < 4) {
        valid = false;
      }
      if (!valid) {
        const msg = document.createElement('div');
        msg.className = 'form-msg';
        msg.textContent = 'Fill in your email and password correctly (minimum 4 characters).';
        form.appendChild(msg);
        shakeForm();
        if (!emailInput.value || !emailInput.value.includes('@')) emailInput.focus();
        else passwordInput.focus();
        return;
      }
      window.location.href = 'exames.html';
    });
  }
});
