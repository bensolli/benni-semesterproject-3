let winnerArray = localStorage.getItem('winner') ? JSON.parse(localStorage.getItem('winner')) : [];

let winnerModal = document.querySelector(".playerName");
winnerModal.innerHTML += `
<h1>${winnerArray}</h1>
`;



/*
document.addEventListener('mousemove', function(event) {
    //let x = event.clientX;
    //let y = event.clientY;
    document.querySelector(".eyes").style.transform = 'translateY('+(event.clientY-80)+'px)';
    document.querySelector(".eyes").style.transform += 'translateX('+(event.clientX-100)+'px)';  
    //myFunction(x, y);
    let spanEl = document.createElement('span')
    event.appendChild(spanEl)
    e.preventDefault()
},false);*/

characterImages = JSON.parse(localStorage.getItem('players'));

var limit = 1000
var currentAmount = 0;


    stage = document.querySelector('.eyeWrapper');
    stage.addEventListener('mousemove', function(e) {

      //randomImg = Math.floor(Math.random() * 0) + 1;

      //https://stackoverflow.com/questions/45136711/javascript-random-generate-0-or-1-integer
      var randomImg =Math.random(); if(randomImg<0.5){randomImg =Math.floor(randomImg)} else{ randomImg= Math.ceil(randomImg)}

      console.log(randomImg);
      let spanEl = document.createElement('img');
      spanEl.src = characterImages[randomImg]; 
      spanEl.classList.add('eyeSpan');
      spanEl.style.top = e.pageY + 'px';
      spanEl.style.left = e.pageX + 'px';
      //https://stackoverflow.com/questions/49124327/add-dynamic-elements-with-cursor-position?fbclid=IwAR1bBbP73Idt46rz6oCrb_hyU3jhjgX4boqpBbVJNcAejKKGb3OTEf47GqM
      spanEl.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      //spanEl.style.transform = '/*rotate(' + (Math.floor(Math.random() * 360) + 1).toString(36) + 'deg)*/ scale(' + (Math.floor(Math.random() * 1.5) + 1).toString(36) + ')';
      //spanEl.style.transform = ;
      stage.appendChild(spanEl);
      currentAmount++;

      if (currentAmount > limit){
        stage.removeChild(stage.childNodes[0]);
    }
      e.preventDefault();
    })

/*
    stage = document.querySelector('.eyeWrapper');
    stage.addEventListener('mousemove', function(e) {
      let spanEl = document.createElement('span');
      spanEl.classList.add('eyeSpan');
      spanEl.style.top = e.pageY + 'px';
      spanEl.style.left = e.pageX + 'px';
      stage.appendChild(spanEl);

      if(stage.hasChildNodes()){
        stage.removeChild(stage.childNodes[10]);
        
    }
    e.preventDefault();
      
      
    })*/





/*


function multiplyNode(node, count, circ) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(circ);
        node.parentNode.insertBefore(copy, node);
    }
}

multiplyNode(document.querySelector('.eyes'), 10, true);
*/





/*
//https://dev.to/ycmjason/how-to-create-range-in-javascript-539i

function myFunction(x, y) {
    var w = window.innerWidth;
    //var h = window.innerHeight;

    function range(start, end) {
        let ans = [];

        median = ans;

        console.log(ans);
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
      for (i of range(1, w)) {
        //console.log(i);
    }

    //https://stackoverflow.com/questions/20904368/javascript-finding-the-most-middle-value-in-an-array
    var middle = median[Math.floor((median.length - 1) / 2)];
    console.log(middle);

    let middleM = middle * 10/100; 

    let theEyePositionX = x * 10/100;
    console.log(theEyePositionX);
    theEyePositionX = theEyePositionX.toString();

    let theEyePositionY = y * 10/100;
    console.log(theEyePositionY);
    theEyePositionY = theEyePositionY.toString();

    animateEye(theEyePositionX, middleM);
 
  }

  function animateEye(x, m){


    if (document.querySelector(".eyes") === m){
        document.querySelector(".eyes").style.height = m + '%';
        document.querySelector(".eyes").style.height = m + '%';
        document.querySelector(".eyes").style.width = m + '%';
        document.querySelector(".eyes").style.width = m + '%';
        document.querySelector(".eyes").style.backgroundColor = 'red';
    }


    document.querySelector(".eyes").style.left = x + '%';
    document.querySelector(".eyes").style.right = x + '%';

    document.querySelector(".eyes").style.width = x + '%';
    document.querySelector(".eyes").style.width = x + '%';

    //document.querySelector(".eyes").style.top = y + '%';
    //document.querySelector(".eyes").style.bottom = y + '%';

    //document.querySelector(".eyes").style.height = y + '%';
    //document.querySelector(".eyes").style.height = y + '%';
  }



/* Output
 * 1 2 3 4 5 */

//[...range(1, 5)] */