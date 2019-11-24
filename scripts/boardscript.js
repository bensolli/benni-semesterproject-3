let playerOne = {
    tileNumber: 1,
    dragonEgg: 0,
    isPlayersturn: true
}

let playerTwo = {
    tileNumber: 1,
    dragonEgg: 0,
    isPlayersturn: false

}



function playerturns() {
    //clearsPreviousSteps();
    spikeTrap();
    console.log(playerOne.tileNumber);
console.log(playerTwo.tileNumber);
    dragonEgg();
    firetrap();
    playersTurnModal();
    checkifwon();

    if (playerOne.isPlayersturn == true) {

        playerTwo.isPlayersturn = true;
        playerOne.isPlayersturn = false;

        theDice();

        playerOne.tileNumber = playerOne.tileNumber + diceNumber;
        console.log(playerOne.tileNumber);

        itsPlayerOnesTurn();

    } else {
        playerOne.isPlayersturn = true;
        playerTwo.isPlayersturn = false;

        theDice();

        playerTwo.tileNumber = playerTwo.tileNumber + diceNumber;

        itsPlayerTwosTurn();


    }

    console.log(playerOne);
    console.log(playerTwo);

}


function rollTheDice() {

    playerturns();

}


function theDice() {
    playAudio();
    diceNumber = Math.floor(Math.random() * 6) + 1;
    let diceImage = "images/dice/dice-" + diceNumber + ".svg";
    document.querySelector('.dice-img').setAttribute('src', diceImage);
}



function itsPlayerOnesTurn() {
    setTimeout(function () {

        if (playerOne.tileNumber > 1) {
            let playertokens = document.querySelector(".board_step-" + playerOne.tileNumber);
            playertokens.innerHTML = "";

            playerOneClear = playerOne.tileNumber - diceNumber;
            console.log(playerOneClear);

            let playertoken1 = document.querySelector(".board_step-" + playerOneClear);
            playertoken1.innerHTML = "";

            /*getting the items from local storage, and converting it to a usable array*/
            let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
            console.log(playerArray);

            playertokens.innerHTML += `
        <div class="playertoken"><img src=${playerArray[0]} /></div>`;

        } else {
            let playertokens = document.querySelector(".board_step-" + playerOne.tileNumber);
            playertokens.innerHTML = "";

            /*getting the items from local storage, and converting it to a usable array*/
            let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
            console.log(playerArray);

            playertokens.innerHTML += `
        <div class="playertoken"><img src=${playerArray[0]} /></div>`;
        }

    }, 500);

}

function itsPlayerTwosTurn() {
    setTimeout(function () {


        if (playerOne.tileNumber > 1) {
            let playertokens = document.querySelector(".board_step-" + playerTwo.tileNumber);
            playertokens.innerHTML = "";

            playerTwoClear = playerTwo.tileNumber - diceNumber;
            console.log(playerTwoClear);

            let playertoken1 = document.querySelector(".board_step-" + playerTwoClear);
            playertoken1.innerHTML = "";

            /*getting the items from local storage, and converting it to a usable array*/
            let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [];
            console.log(playerArray);

            playertokens.innerHTML += `
            <div class="playertoken"><img src=${playerArray[1]} /></div>`;

        } else {
            let playertoken1 = document.querySelector(".board_step-" + playerTwoClear);
            playertoken1.innerHTML = "";

            /*getting the items from local storage, and converting it to a usable array*/
            let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [];
            console.log(playerArray);

            playertokens.innerHTML += `
            <div class="playertoken"><img src=${playerArray[1]} /></div>`;
        }
    }, 500);
}

/*
function clearsPreviousSteps() {

    //let boardRange = (0, 30);
    var boardRange = new Array(30);
    console.log(boardRange);

    for (let i = 0; i < boardRange.length; i++) {
        if (boardRange < playerOne.tileNumber) {
            let boardSteps = document.querySelector(".board_step-" + boardRange);
            boardSteps.innerHTML = "";
            console.log(boardSteps);
           if (boardRange < playerTwo.tileNumber){
            let boardSteps = document.querySelector(".board_step-" + boardRange);
            boardSteps.innerHTML = "";
            console.log(boardSteps);
           }
        }

    }
}*/


function spikeTrap(){
    setTimeout(function () {
    if (playerOne.tileNumber == 3) {
            playerOne.tileNumber = 1;
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Oh no! player one you stept on deadly spikes, go back to start so mommmy can put a bandaid on it!</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        }
    
    if (playerTwo.tileNumber == 3) {
            playerTwo.tileNumber = 1;
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Oh no! player two stept on deadly spikes, go back to start so mommmy can put a bandaid on it!</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        } 
    }, 1100);
}


function dragonEgg() {
    setTimeout(function () {
    //let dragonEggStep = document.querySelector(".board_step-wrapper-7");

    if (playerOne.tileNumber == 7 /*&& dragonEggStep.innerHTML == `<img src="images/traps/dragon-egg.svg" alt="dragon-egg" class="[ board-tokens ]" id="dragon-egg" />`*/) {
        playerOne.dragonEgg = 1;

        let playermodal = document.querySelector(".modal-wrapper-container");
        playermodal.innerHTML += `
    <div class="modal-wrapper">
        <div class="modal-card">
            <h2>Player one aquired a dragon egg, and is now restiant to fire!</h2>
            <button onclick="clearModal()">continue</button>
        </div>
    </div>`;

    } else {

        if (playerTwo.tileNumber == 7 /*&& dragonEggStep.innerHTML == `<img src="images/traps/dragon-egg.svg" alt="dragon-egg" class="[ board-tokens ]" id="dragon-egg" />`*/) {
            playerTwo.dragonEgg = 1;
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Player two aquired a dragon egg, and is now restiant to fire!</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        }
    }
}, 1100);
    console.log(playerOne.dragonEgg);
    console.log(playerTwo.dragonEgg);
}




function firetrap() {
    setTimeout(function () {
    if (playerOne.tileNumber == 17) {
        if (playerTwo.dragonEgg = 1) {
            playerOne.tileNumber = 18;
            playerOne.dragonEgg = 0;
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Player one skipped the fire, sadly the dragon egg did not survive</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        } else {
            playerOne.tileNumber = 10;
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Oh no! player one had to run back ten steps to put out the fire</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        }
    } else if (playerTwo.tileNumber == 17) {
        if (playerTwo.dragonEgg = 1) {
            playerTwo.tileNumber = 18;
            playerTwo.dragonEgg = 0;
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Player two skipped the fire, sadly the dragon egg did not survive</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        } else {
            playerOne.tileNumber = 10;
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Oh no! player two had to run back ten steps to put out the fire</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        }
    }
}, 1100);
}





function playersTurnModal() {

    setTimeout(function () {
        if (playerOne.isPlayersturn == true) {
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Its player one's turn!</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        } else {
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Its player two's turn!</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
        }
    }, 1000);
}

function clearModal() {
    let playermodal = document.querySelector(".modal-wrapper-container");
    playermodal.innerHTML = "";
}

function checkifwon() {
    if (playerOne.tileNumber >= 30) {
        localStorage.setItem('winner', JSON.stringify('Player One is the winner!'));
        window.open("winner-page.html", "_top");

    } else {
        localStorage.setItem('winner', JSON.stringify('Player Two is the winner!'));
        if (playerTwo.tileNumber >= 30) {
            window.open("winner-page.html", "_top");

        } else {

        }
    }
}

/*adds sound effects*/
function playAudio() {
    let x = document.getElementById("characterAudio");
    x.play();
}





