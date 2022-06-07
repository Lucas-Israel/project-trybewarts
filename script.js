const btnSub = document.querySelector('.submit');

btnSub.addEventListener('click', () => {
  const email = document.querySelector('.email').value;
  const senha = document.querySelector('.senha').value;
  if (email && senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
