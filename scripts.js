const quote = document.getElementById('api-advice');
const idAdvice = document.getElementById('id-advice');
const btnGenerate = document.getElementById('generate-api');
const loadTrans = document.getElementById('loading');
const apiUrl = 'https://api.adviceslip.com/advice';

async function runApi() {
  const api = await fetch(apiUrl);
  const data = await api.json();

  if (api) {
    hideLoading();
  }

  const dataHTML = JSON.stringify(data.slip.advice);
  const idHTML = JSON.stringify(data.slip.id);
  quote.innerHTML = dataHTML;
  idAdvice.innerHTML = idHTML;
}

runApi();

function hideLoading() {
  loadTrans.style.display = 'none';
}

btnGenerate.addEventListener('click', function () {
  let randomAdvice = Math.floor(Math.random() * 224) + 1;
  let slipIdRandom = randomAdvice;
  let urlRandom = 'https://api.adviceslip.com/advice/' + slipIdRandom;
  async function generateApi() {
    const api = await fetch(urlRandom);
    const data = await api.json();

    if (api) {
      hideLoading();
    }

    const adviceHTML = JSON.stringify(data.slip.advice);
    const idHTML = JSON.stringify(data.slip.id);
    quote.innerHTML = adviceHTML;
    idAdvice.innerHTML = idHTML;
  }
  generateApi();
});
