const clues = {
  msg: 'Últimas conversas revelam uma discussão intensa com um desconhecido.',
  agenda: 'Na agenda, há uma reunião marcada em um local afastado no dia do crime.',
  fotos: 'Entre as fotos, uma imagem borrada mostra um carro suspeito.',
  notas: 'Notas pessoais indicam que Isabela temia alguém próximo.',
  extrato: 'O extrato bancário revela uma transferência suspeita pouco antes da morte.',
  audio: 'Uma gravação de áudio capta um ruído estranho durante uma ligação.'
};
let progress = 0;
const totalClues = Object.keys(clues).length;

function openApp(app) {
  const body = document.getElementById('modal-body');
  body.textContent = clues[app];
  document.getElementById('modal').classList.remove('hidden');
  progress = Math.min(progress + 1, totalClues);
  document.getElementById('progress-count').textContent = progress;
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.app').forEach(btn => {
    btn.addEventListener('click', () => openApp(btn.dataset.app));
  });
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  document.getElementById('analyze').addEventListener('click', () => {
    window.location.href = 'results.html';
  });
});
