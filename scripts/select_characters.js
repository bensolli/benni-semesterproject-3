
/*Characters stores the API values*/
characters = [];
console.log(characters);

/*SelectedPlayer stores the selected players*/
selectedPlayers = [];

/*Stores the character names in an array*/
characterNames = [];
console.log(characterNames);


/*Making it possible to select character using the 1-0 keys*/
document.getElementById("pressEnter").addEventListener("keyup", function(event){
    if (event.keyCode === 49) {
        selectCharacter(583);
      } //1
      if (event.keyCode === 50) {
        selectCharacter(271);
      } //2
      if (event.keyCode === 51) {
        selectCharacter(957);
      } //3
      if (event.keyCode === 52) {
        selectCharacter(148);
      } //4
      if (event.keyCode === 53) {
        selectCharacter(565);
      } //5
      if (event.keyCode === 54) {
        selectCharacter(1052);
      } //6
      if (event.keyCode === 55) {
        selectCharacter(529);
      } //7
      if (event.keyCode === 56) {
        selectCharacter(238);
      } //8
      if (event.keyCode === 57) {
        selectCharacter(216);
      } //9
      if (event.keyCode === 48) {
        selectCharacter(1709);
      } //0
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

/*Fetches the API*/
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

        /*saves the images to the Array characterNames*/
        let theNames = document.querySelector("#character-checkbox-" + id);
        characterNames.push(theNames.dataset.img);

        someCards.innerHTML += `
        <div class="col-3">
            <div class="character-card">
                <h3>Player ${i+1}</h3>
                <h2>${character.name}</h2>
                <p>${character.culture}</p>
                <p>${character.gender}</p>
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



/*Takes the values of the array characterNames and sends it to local storage*/
function startGame(){
    characterNames = characterNames.slice(-2); 
    //localStorage.setItem('player1', JSON.stringify(characterNames[0]));
    localStorage.setItem('players', JSON.stringify(characterNames));
  
}


/*adds sound effects*/
function playAudio() { 
let x = document.getElementById("characterAudio"); 
  x.play(); 
} 



