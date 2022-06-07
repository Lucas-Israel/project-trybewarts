const btnSub = document.querySelector('.submit');
const btnAgree = document.querySelector('#agreement');
const btnSub2 = document.querySelector('#submit-btn');

btnSub.addEventListener('click', () => {
  const email = document.querySelector('.email').value;
  const senha = document.querySelector('.senha').value;
  if (email && senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

btnAgree.addEventListener('click', () => {
  if (btnAgree) {
    btnSub2.disabled = false;
  }
});
