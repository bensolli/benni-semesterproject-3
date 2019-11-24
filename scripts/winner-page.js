let winnerArray = localStorage.getItem('winner') ? JSON.parse(localStorage.getItem('winner')) : [];

let winnerModal = document.querySelector(".playerName");
winnerModal.innerHTML += `
<h1>${winnerArray}</h1>
`;