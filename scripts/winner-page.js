


let winnerArray  = JSON.parse(localStorage.getItem('winner'));
let winnerArrayImg = JSON.parse(localStorage.getItem('winnerImg'));

var limitCardNumber = 50;
var currentAmountCardNumber = 0;

    screen = document.querySelector('.winnerCardWrapper');
    screen.addEventListener('mousemove', function(event) {

      let winnerCard = document.createElement('div');
      winnerCard.classList.add('winnerCardWrapper--winnerCard');
      winnerCard.innerHTML += `
            <div class="winnerCardWrapper--winnerCard__img">
                <img src="${winnerArrayImg}" alt="winner" />
            </div>
            <div class="winnerCardWrapper--winnerCard__text">
                <h1>${winnerArray}</h1>
                <a href="index.html" id="enter-btn" class="[ start-btn ]">ENTER/RESTART</a>
            </div>
        `;
      
      winnerCard.style.top = event.pageY + 'px';
      winnerCard.style.left = event.pageX + 'px';
      winnerCard.style.border = ' 2px solid #'+ (Math.random()*0xFFFFFF<<0).toString(16);
      winnerCard.style.background = 'rgba(0,0,50,0.1)';
      screen.appendChild(winnerCard);
      currentAmountCardNumber++;

      if (currentAmountCardNumber > limitCardNumber){
        screen.removeChild(screen.childNodes[0]);
    }
      event.preventDefault();
    })

