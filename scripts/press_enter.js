
document.getElementById("pressEnter").addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("start-btn").click();
      }

  });
