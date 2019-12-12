/*Characters stores the API values*/
characters = [];
console.log(characters);

/*SelectedPlayer stores the selected players*/
selectedPlayers = [];

/*Stores the character names in an array*/
characterImages = [];
console.log(characterImages);

/*Making it possible to select character using the 1-0 keys*/
document.getElementById("pressEnter").addEventListener("keyup", function(event){
      switch (event.keyCode){
        case 49: selectCharacter(583); break;
        case 50: selectCharacter(271); break;
        case 51: selectCharacter(957); break;
        case 52: selectCharacter(148); break;
        case 53: selectCharacter(565); break;
        case 54: selectCharacter(1052); break;
        case 55: selectCharacter(529); break;
        case 56: selectCharacter(238); break;
        case 57: selectCharacter(216); break;
        case 48: selectCharacter(1709);
    }
});

/*Runs the API and the selection of the characters*/
function selectCharacter(id){
    playAudio();
    addPlayer(id);
    markSelectedPlayersChecked();
    addStartBtn();
    fetchCharacterInfo(id)
    .then(createCard);
}

/*Fetches the API and stores it in the characgers array */
function fetchCharacterInfo(id) {
    return fetch('https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/' + id)
    .then((response) => response.json()).then((CharacterInfo) => characters[id] = CharacterInfo);
}

//Signifies what's player 1 and 2?
function createCard(){

    let someCards = document.getElementById("cards");
    someCards.innerHTML = "";

    for (let i = 0; i < selectedPlayers.length; i++){ 

        let id = selectedPlayers[i];
        let character = characters[id];

        /*saves the images to the Array characterImages*/
        let theNames = document.querySelector("#character-checkbox-" + id);
        characterImages.push(theNames.dataset.img);

        someCards.innerHTML += `
        <div class="col-3">
            <div class="character-card">
                <h2>Player ${i+1}</h2>
                <h3>${character.name}</h3>
                <p>${character.culture}</p>
                <p>${character.playedBy}</p>
            </div>
        </div>`;
    }
}

/*Limits SelectedPlayer to have two element*/
function addPlayer(id){

    /*Adds the selected players to the end of SelectedPlayer*/
    selectedPlayers.push(id);

    /*Overwrites SelectedPlayer to only contain the two last selected players*/
    selectedPlayers = selectedPlayers.slice(-2);
}

function markSelectedPlayersChecked() {
      
    /*Unchecking all the checkboxeses*/
    let checkboxList = document.getElementsByTagName('input');
    for (let i = 0; i < checkboxList.length; i++){ 
        checkboxList[i].checked = false;
    }
    
    /*Loops the characterArray to check the added players*/
    for (let i = 0; i < selectedPlayers.length; i++){ 
        document.getElementById("character-checkbox-" + selectedPlayers[i]).checked = true;
    }  
}

/*adds a start button when two players has been selected*/
function addStartBtn(){
    if(selectedPlayers.length === 2){
        let startBtnDiv = document.getElementById("startBtnDiv");
        startBtnDiv.innerHTML = "";
        startBtnDiv.innerHTML += `<a onclick="startGame(); createPlayer1()" href="thegameboard.html" class="[ start-btn ]" id="enter-btn" >Start Game</a>`;
    } else{
        let startBtnDiv = document.getElementById("startBtnDiv");
        startBtnDiv.innerHTML = "";
    }
}

/*Takes the values of the array characterImages and sends it to local storage*/
function startGame(){
    characterImages = characterImages.slice(-2); 
    //localStorage.setItem('player1', JSON.stringify(characterImages[0]));
    localStorage.setItem('players', JSON.stringify(characterImages));  
}



