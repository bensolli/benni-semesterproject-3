


//let winnerArray = localStorage.getItem('winner') ? JSON.parse(localStorage.getItem('winner')) : [];
//let winnerArrayImg = localStorage.getItem('winnerImg') ? JSON.parse(localStorage.getItem('winnerImg')) : [];

let winnerArray  = JSON.parse(localStorage.getItem('winner'));
let winnerArrayImg = JSON.parse(localStorage.getItem('winnerImg'));

/*
let winnerModal = document.querySelector(".playerName");
winnerModal.innerHTML += `
<h1>${winnerArray}</h1>
`;
*/

characterImages = JSON.parse(localStorage.getItem('players'));

var limitCardNumber = 50;
var currentAmountCardNumber = 0;

    screen = document.querySelector('.winnerCardWrapper');
    screen.addEventListener('mousemove', function(e) {

      //https://stackoverflow.com/questions/45136711/javascript-random-generate-0-or-1-integer
      //var randomImg = Math.random(); if(randomImg<0.5){randomImg =Math.floor(randomImg)} else{ randomImg= Math.ceil(randomImg)}

      //console.log(randomImg);
      let divCard = document.createElement('div');
      divCard.classList.add('winnerCardWrapper--winnerCard');
      divCard.innerHTML += `
            <div class="winnerCardWrapper--winnerCard__img">
                <img src="${winnerArrayImg}" alt="winner" />
            </div>
            <div class="winnerCardWrapper--winnerCard__text">
                <h1>${winnerArray}</h1>
                <a href="index.html" id="enter-btn" class="[ start-btn ]">ENTER/RESTART</a>
            </div>
        `;
      
      divCard.style.top = e.pageY + 'px';
      divCard.style.left = e.pageX + 'px';
      //https://stackoverflow.com/questions/49124327/add-dynamic-elements-with-cursor-position?fbclid=IwAR1bBbP73Idt46rz6oCrb_hyU3jhjgX4boqpBbVJNcAejKKGb3OTEf47GqM
      divCard.style.border = ' 2px solid #'+ (Math.random()*0xFFFFFF<<0).toString(16);
      divCard.style.background = 'rgba(0,0,50,0.1)';
      //divCard.style.transform = 'rotate(' + (Math.floor(Math.random() * 360) + 1).toString(36) + 'deg) scale(' + (Math.floor(Math.random() * 1.5) + 1).toString(36) + ')';
      screen.appendChild(divCard);
      currentAmountCardNumber++;

      if (currentAmountCardNumber > limitCardNumber){
        screen.removeChild(screen.childNodes[0]);
    }
      e.preventDefault();
    })

/*
characterImages = JSON.parse(localStorage.getItem('players'));

var limit = 1000
var currentAmount = 0;


    stage = document.querySelector('.eyeWrapper');
    stage.addEventListener('mousemove', function(e) {

      //randomImg = Math.floor(Math.random() * 0) + 1;

      //https://stackoverflow.com/questions/45136711/javascript-random-generate-0-or-1-integer
      var randomImg = Math.random(); if(randomImg<0.5){randomImg =Math.floor(randomImg)} else{ randomImg= Math.ceil(randomImg)}

      console.log(randomImg);
      let spanEl = document.createElement('img');
      spanEl.src = characterImages[randomImg]; 
      spanEl.classList.add('eyeSpan');
      spanEl.style.top = e.pageY + 'px';
      spanEl.style.left = e.pageX + 'px';
      //https://stackoverflow.com/questions/49124327/add-dynamic-elements-with-cursor-position?fbclid=IwAR1bBbP73Idt46rz6oCrb_hyU3jhjgX4boqpBbVJNcAejKKGb3OTEf47GqM
      spanEl.style.background = '#'+ (Math.random()*0xFFFFFF<<0).toString(16);
      //spanEl.style.transform = 'rotate(' + (Math.floor(Math.random() * 360) + 1).toString(36) + 'deg) scale(' + (Math.floor(Math.random() * 1.5) + 1).toString(36) + ')';
      //spanEl.style.transform = ;
      stage.appendChild(spanEl);
      currentAmount++;

      if (currentAmount > limit){
        stage.removeChild(stage.childNodes[0]);
    }
      e.preventDefault();
    })

*/



