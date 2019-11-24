let playerOne = {
    tileNumber: 1,
    dragonEgg: 0,
    isPlayersturn: true,
    index: 0,
    playerType: "one"
}

let playerTwo = {
    tileNumber: 1,
    dragonEgg: 0,
    isPlayersturn: false,
    index: 1,
    playerType: "two"
}



function playerturns() {

    if (playerOne.isPlayersturn == true) {

        playerTwo.isPlayersturn = true;
        playerOne.isPlayersturn = false;

        theDice();
        playerOne.tileNumber = playerOne.tileNumber + diceNumber;

        playersTurnModal(playerOne)
        itsPlayerTurn(playerOne);
        traps(playerOne);


    } else {
        playerOne.isPlayersturn = true;
        playerTwo.isPlayersturn = false;

        theDice();
        playerTwo.tileNumber = playerTwo.tileNumber + diceNumber;

        playersTurnModal(playerTwo);
        itsPlayerTurn(playerTwo);
        traps(playerTwo);
    }

    console.log(playerOne);
    console.log(playerTwo);

}

function traps(traps){

    if(traps.tileNumber == 3){
        spikeTrap(traps);
    }
    if(traps.tileNumber == 7){
        dragonEgg(traps);
    }
    if(traps.tileNumber == 8){
        firetrap(traps);
    }
    if(traps.tileNumber == 14){
        whiteWalker(traps);
    }
    if(traps.tileNumber == 17){
        firetrap(traps);
    }
    if(traps.tileNumber == 25){
        spikeTrap(traps);
    }
    if(traps.tileNumber == 28){
        whiteWalker(traps);
    }
    if(traps.tileNumber >= 30){   
        checkIfWon(traps);
    }
}


function theDice() {
    playAudio();
    diceNumber = Math.floor(Math.random() * 6) + 1;
    let diceImage = "images/dice/dice-" + diceNumber + ".svg";
    document.querySelector('.dice-img').setAttribute('src', diceImage);
}



function itsPlayerTurn(player) {
   
    setTimeout(function () {
        let playertokens = document.querySelector(".board_step-" + player.tileNumber);

        let playertoken1 = document.querySelector("#player-" + player.index);
        if (playertoken1) {
            playertoken1.remove();
        }

        /*getting the items from local storage, and converting it to a usable array*/
        let playerArray = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : []
        console.log(playerArray);

        playertokens.innerHTML += `
                <div id="player-${player.index}"><img src=${playerArray[player.index]} /></div>`;

    }, 500);

}


function spikeTrap(traps) {
    setTimeout(function () {

            traps.tileNumber = 1;
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
            <div class="modal-wrapper">
                <div class="modal-card">
                    <h2>Oh no! player ${traps.playerType} you stept on deadly spikes, go back to start so mommmy can put a bandaid on it!</h2>
                    <button onclick="clearModal()">continue</button>
                </div>
            </div>`;

    }, 1100);
}


function dragonEgg(traps) {
    setTimeout(function () {

            traps.dragonEgg = 1;
            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
            <div class="modal-wrapper">
                <div class="modal-card">
                    <h2>Player ${traps.playerType}  aquired a dragon egg, and is now fire resistant!</h2>
                    <button onclick="clearModal()">continue</button>
                </div>
            </div>`;

    }, 1100);
}




function firetrap(traps) {
    setTimeout(function () {

            if (traps.dragonEgg == 1) {
                traps.tileNumber = traps.tileNumber + 1;
                traps.dragonEgg = 0;
                let playermodal = document.querySelector(".modal-wrapper-container");
                playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Player ${traps.playerType} skipped the fire with one extra step, sadly the dragon egg did not survive</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
            } else {
                traps.tileNumber = traps.tileNumber - 10;
                let playermodal = document.querySelector(".modal-wrapper-container");
                playermodal.innerHTML += `
        <div class="modal-wrapper">
            <div class="modal-card">
                <h2>Oh no! player ${traps.playerType} had to run back ten steps to put out the fire</h2>
                <button onclick="clearModal()">continue</button>
            </div>
        </div>`;
            }
        
    }, 1100);
}


function whiteWalker(traps) {
    setTimeout(function () {
            traps.tileNumber = traps.tileNumber - 10;

            let playermodal = document.querySelector(".modal-wrapper-container");
            playermodal.innerHTML += `
            <div class="modal-wrapper">
                <div class="modal-card">
                    <h2>Oh no! player ${traps.playerType} just encountered a white walker! Save yourself! go to back 10 steps</h2>
                    <button onclick="clearModal()">continue</button>
                </div>
            </div>`;

    }, 1100);
}


function playersTurnModal(player) {

    let playermodal = document.querySelector("#playersTurn");
    playermodal.innerHTML = "";
    playermodal.innerHTML += `
        <h2>Its player ${player.playerType} turn!</h2>
        <p>toss dice to continue</p>`;
}


function clearModal() {
    let playermodal = document.querySelector(".modal-wrapper-container");
    playermodal.innerHTML = "";
}

function checkIfWon(traps) {
 
        localStorage.setItem('winner', JSON.stringify('Player' + ' ' + traps.playerType + ' ' + 'is the winner!'));
        window.open("winner-page.html", "_top");
}

/*adds sound effects*/
function playAudio() {
    let x = document.getElementById("characterAudio");
    x.play();
}





