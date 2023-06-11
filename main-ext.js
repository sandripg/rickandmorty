import './style.css'
import {
    getCharacters
} from 'rickmortyapi'




const characters = async () => {
    const moreCharacters = await getCharacters({
        page: 1
    })
    for (let i = 0; i < moreCharacters.length; i++) {
        const character = moreCharacters[i].data.results.name;

    }

    console.log('elemento', moreCharacters);
};



characters();

const cardInfo =
    `<div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h2>Rick Sanchez</h2>
            <h4>Estado: Alive</h4>
            <h4>Especie: Humano</h4>
            <h4>Género: Male</h4>
          </div>
        </div>
      </div>`;

const containerCards = () => {
    const cardsPrint = document.querySelector('#app');
    cardsPrint.innerHTML = cardInfo;

};


containerCards();