const btnSub = document.querySelector('.submit');
const btnAgree = document.querySelector('#agreement');
const btnSub2 = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const caracteres = document.getElementById('counter');
const form = document.querySelector('#evaluation-form');

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

const maxCarac = 500;

textArea.addEventListener('keyup', () => {
  const texts = textArea.value.length;
  const counter = maxCarac - texts;
  caracteres.textContent = counter;
});

// https://stackabuse.com/character-counter-for-text-areas-with-vanilla-javascript/

// btnSub2.addEventListener('click', (event) => {
//   event.preventDefault();
//   form.style.display = 'none';
// });
