document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Aqui seria feita a integração com o backend de autenticação
      window.location.href = 'dashboard.html';
    });
  }
});
