import './style.css'
import {
  getCharacters
} from 'rickmortyapi'

let numPage = 1;

const buttonPrev = document.querySelector('#prev');
const buttonNext = document.querySelector('#next');

const clickButtonPrev = () => {
  numPage--;
  if (numPage === 1) {
    buttonPrev.disabled = true;
  }
  cardsPrint.innerHTML = '';
  characters()
};


const clickButtonNext = () => {
  numPage++;
  if (numPage > 1) {
    buttonPrev.disabled = false;
  }
  cardsPrint.innerHTML = '';
  characters()
};

buttonPrev.addEventListener('click', clickButtonPrev);
buttonNext.addEventListener('click', clickButtonNext);




const cardsPrint = document.querySelector('#app');

const characters = async () => {
  try {
    console.log('pagina', numPage);
    const moreCharacters = await getCharacters({
      page: numPage
    })
    console.log(moreCharacters);
    for (let i = 0; i < moreCharacters.data.results.length; i++) {
      const character = moreCharacters.data.results[i];
      cardsPrint.innerHTML += cardInfo(character);
    }
  } catch (err) {
    alert('Error al consultar la Api', err);
  }
};


const cardInfo = (character) => {

  return `<div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${character.image}" style="width: 300px; height:300px; border-radius: 30px;">
          </div>
          <div class="flip-card-back">
            <div><h2>${character.name}</h2></div>
            <div class="text-align">
            <h4><span class = "text-color">Estado:</span> ${character.status}</h4>
            <h4><span class = "text-color">Especie:</span> ${character.species}</h4>
            <h4><span class = "text-color">Género:</span> ${character.gender}</h4>
            </div>
          </div>
        </div>
      </div>`
};


characters();