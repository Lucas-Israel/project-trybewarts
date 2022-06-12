const btnSub = document.querySelector('.submit');
const btnAgree = document.querySelector('#agreement');
const btnSub2 = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const caracteres = document.getElementById('counter');
const form1 = document.querySelector('#evaluation-form');
const form2 = document.querySelector('#form-data');

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

const familyCheck = () => {
  const familia = document.getElementsByName('family');
  for (let index = 0; index < familia.length; index += 1) {
    const element = familia[index];
    if (element.checked) {
      return element.value;
    }
  }
  return '';
};

const materiaCheck = () => {
  let materia = '';
  const subject = document.getElementsByClassName('subject');
  for (let index = 0; index < subject.length; index += 1) {
    const element = subject[index];
    if (element.checked) {
      materia += `${element.value}, `;
    }
  }
  return materia;
};

const rateCheck = () => {
  const rate = document.getElementsByName('rate');
  for (let index = 0; index < rate.length; index += 1) {
    const element = rate[index];
    if (element.checked) {
      return element.value;
    }
  }
  return '';
};

btnSub2.addEventListener('click', (event) => {
  const nome = document.querySelector('#input-name').value;
  const sobreNome = document.querySelector('#input-lastname').value;
  const emailInput = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const obs = textArea.value;

  event.preventDefault();
  form1.style.display = 'none';
  form2.style.display = 'block';
  form2.querySelector('#form2div1').innerText = `Nome: ${nome} ${sobreNome}`;
  form2.querySelector('#form2div2').innerText = `Email: ${emailInput}`;
  form2.querySelector('#form2div3').innerText = `Casa: ${casa}`;
  form2.querySelector('#form2div4').innerText = `Família: ${familyCheck()}`;
  form2.querySelector('#form2div5').innerText = `Matérias: ${materiaCheck()}`;
  form2.querySelector('#form2div6').innerText = `Avaliação: ${rateCheck()}`;
  form2.querySelector('#form2div7').innerText = `Observações: ${obs}`;
});
