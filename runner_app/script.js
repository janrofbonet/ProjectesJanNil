// script.js

function showPaceCalculator() {
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('calculator').classList.remove('hidden');
  document.getElementById('calc-title').innerText = 'Calcular Ritmo (min/km)';
  document.getElementById('input-fields').innerHTML = `
    <label>Distancia (km):</label>
    <input type="number" id="distance" placeholder="km" />
    <label>Tiempo Total (min):</label>
    <input type="number" id="time" placeholder="min" />
  `;
}

function showTotalTimeCalculator() {
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('calculator').classList.remove('hidden');
  document.getElementById('calc-title').innerText = 'Calcular Tiempo Total';
  document.getElementById('input-fields').innerHTML = `
    <label>Distancia (km):</label>
    <input type="number" id="distance" placeholder="km" />
    <label>Ritmo (min/km):</label>
    <input type="number" id="pace" placeholder="min/km" />
  `;
}

function calculate() {
  const distance = parseFloat(document.getElementById('distance').value);
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = '';

  if (document.getElementById('calc-title').innerText.includes('Ritmo')) {
    const time = parseFloat(document.getElementById('time').value);
    if (distance && time) {
      const pace = (time / distance).toFixed(2);
      resultElement.innerText = `Ritmo: ${pace} min/km`;
    } else {
      resultElement.innerText = 'Por favor, introduce todos los valores';
    }
  } else {
    const pace = parseFloat(document.getElementById('pace').value);
    if (distance && pace) {
      const totalTime = (pace * distance).toFixed(2);
      resultElement.innerText = `Tiempo Total: ${totalTime} min`;
    } else {
      resultElement.innerText = 'Por favor, introduce todos los valores';
    }
  }
}

function backToMenu() {
  document.getElementById('main-menu').classList.remove('hidden');
  document.getElementById('calculator').classList.add('hidden');
  document.getElementById('result').innerHTML = '';
}
