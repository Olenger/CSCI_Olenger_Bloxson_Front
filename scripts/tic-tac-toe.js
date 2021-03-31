var gameOver = false;
var currentPlayer = 'X';
var totalMove =0;
var d =document.getElementByclass('spotId');
var g = document.getElementById('button');
var status = "Player X its your turn";


function placeMarker(totalMove) {
  
  
  if(!gameOver){
   
  totalMove++;
 
  if (totalMove === 1) {
    currentPlayer = "O";
    
  }
  else if (totalMove === 3) {
    currentPlayer = 'O';
    
  }
  else if (totalMove === 5) {
    currentPlayer = 'O';
  
  }
  else if (totalMove === 7) {
    currentPlayer = 'O';
    
  }
  else if (totalMove === 9) {
    gameOver= true;
    currentPlayer = 'O';
      status = "its a tie";
    }
  
  else {
    currentPlayer = 'X';
  }

 if(totalMove !== 9)
  status = "Player " + currentPlayer + " turn";
}


  return totalMove;
}

/*
(45 marks) Players must be able to continue to place their markers until the
game reaches an end. Your code must CORRECTLY determine if the game
has ended with a winner or a tie.
● (5 marks) Once the game has ended, no player shall be allowed to place
their markers.
*/
function currentPlayerWon(spotId)
{
  
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var s2 = document.getElementById('s3');
    var s3 = document.getElementById('s4');
    var s4 = document.getElementById('s5');
    var s5 = document.getElementById('s6');
    var s6 = document.getElementById('s7');
    var s7 = document.getElementById('s7');
    var s8 = document.getElementById('s8');
    var s9 = document.getElementById('s9');
   
    if((s1.innerHTML===s2.innerHTML && s1.innerHTML === s3.innerHTML)|| (s4.innerHTML=== s5.innerHTML && s4.innerHTML === s6.innerHTML)
      (s1.innerHTML=== s5.innerHTML && s1.innerHTML === s9.innerHTML)||(s3.innerHTML=== s5.innerHTML && s3.innerHTML === s7.innerHTML)||
      (s3.innerHTML=== s5.innerHTML && s3.innerHTML === s7.innerHTML)||(s1.innerHTML=== s4.innerHTML && s1.innerHTML === s7.innerHTML)||
      (s2.innerHTML=== s5.innerHTML && s2.innerHTML === s8.innerHTML) ||(s3.innerHTML=== s6.innerHTML && s3.innerHTML === s9.innerHTML))
      {
        gameOver = true;
       // totalMove--;
      status = "Player" + currentPlayer +  "wins";
      
      return gameOver;
     }
      else    
      {
          gameOver = false;
      }
      return gameOver;
     // totalMove--;
      }
      
function displayStatus(){
g.innerHTML= "start game over";
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var s2 = document.getElementById('s3');
    var s3 = document.getElementById('s4');
    var s4 = document.getElementById('s5');
    var s5 = document.getElementById('s6');
    var s6 = document.getElementById('s7');
    var s7 = document.getElementById('s7');
    var s8 = document.getElementById('s8');
    var s9 = document.getElementById('s9');
    s1.innerHTML = " ";
    s2.innerHTML = " ";
    s3.innerHTML = " ";
    s4.innerHTML = " ";
    s5.innerHTML = " ";
    s6.innerHTML = " ";
    s7.innerHTML = " ";
    s8.innerHTML = " ";
    s9.innerHTML = " ";
    totalMove=0;
    currentPlayer = 'X';
}



    
