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
    status = "Player O its your turn";
  }
  else if (totalMove === 3) {
    currentPlayer = 'O';
    status = "Player O its your turn";
  }
  else if (totalMove === 5) {
    currentPlayer = 'O';
    status = "Player O its your turn";
  }
  else if (totalMove === 7) {
    currentPlayer = 'O';
    status = "Player O its your turn";
  }
  else if (totalMove === 9) {
    currentPlayer = 'O';
      status = "its a tie";
    }
  
  else {
    currentPlayer = 'X';
    status = "Player X its your turn";
  }
}
  return totalMove;
}

/*
However, when an occupied square is clicked, nothing
shall happen.
(45 marks) Players must be able to continue to place their markers until the
game reaches an end. Your code must CORRECTLY determine if the game
has ended with a winner or a tie.
● (5 marks) Once the game has ended, no player shall be allowed to place
their markers.
*/
function currentPlayerWon()
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
    
    if(s1.innerHTML=== 'X' && s1.innerHTML=== s2.innerHTML && s1.innerHTML === s3.innerHTML){
      gameOver = true;
      totalMoves--;
      status = "Player" + currentPlayer +  "wins";
      }
    else if(s4.innerHTML=== 'X' && s4.innerHTML=== s5.innerHTML && s4.innerHTML === s6.innerHTML){
      gameOver = true;
      totalMoves--;
      status = "Player" + currentPlayer +  "wins";
      }
      else if(s7.innerHTML=== 'X' && s7.innerHTML=== s8.innerHTML && s7.innerHTML === s9.innerHTML){
        gameOver = true;
        totalMoves--;
        status = "Player" + currentPlayer +  "wins";
        }
        else if(s1.innerHTML=== 'X' && s1.innerHTML=== s5.innerHTML && s1.innerHTML === s9.innerHTML){
          gameOver = true;
          totalMoves--;
          status = "Player" + currentPlayer +  "wins";
          }
          else if(s3.innerHTML=== 'X'  && s3.innerHTML=== s5.innerHTML && s3.innerHTML === s7.innerHTML){
            gameOver = true;
            totalMoves--;
            status = "Player" + currentPlayer +  "wins";
            }
            else if(s1.innerHTML=== 'X' && s1.innerHTML=== s4.innerHTML && s1.innerHTML === s7.innerHTML){
              gameOver = true;
              totalMoves--;
              status = "Player" + currentPlayer +  "wins";
              }
              else if(s2.innerHTML=== 'X' && s2.innerHTML=== s5.innerHTML && s2.innerHTML === s8.innerHTML){
                gameOver = true;
                totalMoves--;
                status = "Player" + currentPlayer + "wins";
                }
                else if(s3.innerHTML=== 'X' && s3.innerHTML=== s6.innerHTML && s3.innerHTML === s9.innerHTML){
                  gameOver = true;
                  totalMoves--;
                  status = "Player" + currentPlayer + "wins";
                  }
                  else if( s1.innerHTML==='O' && s1.innerHTML=== s2.innerHTML && s2.innerHTML === s3.innerHTML){
                    gameOver = true;
                    totalMoves--;
                    status = "Player" + currentPlayer + "wins";
                    }
                  else if( s4.innerHTML==='O' && s4.innerHTML=== s5.innerHTML && s4.innerHTML === s6.innerHTML){
                    gameOver = true;
                    totalMoves--;
                    status = "Player" + currentPlayer +  "wins";
                    }
                    else if( s7.innerHTML==='O' && s7.innerHTML=== s8.innerHTML && s7.innerHTML === s9.innerHTML){
                      gameOver = true;
                      totalMoves--;
                      status = "Player" + currentPlayer + "wins";
                      }
                      else if( s1.innerHTML==='O' && s1.innerHTML=== s5.innerHTML && s1.innerHTML === s9.innerHTML){
                        gameOver = true;
                        totalMoves--;
                        status = "Player" + currentPlayer + "wins";
                        }
                        else if( s3.innerHTML==='O' && s3.innerHTML=== s5.innerHTML && s3.innerHTML === s7.innerHTML){
                          gameOver = true;
                          totalMoves--;
                          status = "Player" + currentPlayer + "wins";
                          }
                          else if(s1.innerHTML==='O' && s1.innerHTML=== s4.innerHTML && s1.innerHTML === s7.innerHTML){
                            gameOver = true;
                            totalMoves--;
                            status = "Player" + currentPlayer + "wins";
                            }
                            else if(s2.innerHTML==='O' && s2.innerHTML=== s5.innerHTML && s2.innerHTML === s8.innerHTML){
                              gameOver = true;
                              totalMoves--;
                              status = "Player" + currentPlayer + "wins";
                              }
                              else if(s3.innerHTML==='O'&& s3.innerHTML=== s6.innerHTML && s3.innerHTML === s9.innerHTML){
                                gameOver = true;
                                totalMoves--;
                                status = "Player" + currentPlayer + "wins";
                                } 
    else    
    {
        gameOver = false;
    }
    return gameOver;

  }

function displayStatus(){
g.innerHTML= "reset";
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

   // if(!gameOver)
    //{
        //get thespot by spotId
     //   var spot = document.getElementById("s1");
     //   if(spot.isEmpty())
        //{
     //       spot.innerHTML === currentPlayer;
          //  if(currentPlayerWon())
           // {
              //  updateGameStatus();
            //}
           //     else
         //       {
    //                totalMove ++;
       // }
     // }
    //}         
        //if the spot is empty, change spot.innertHTML to mark the spot 
 //        if( currentPlayerWon()){
  //       updateGameStatus();
 //        }
   //       else{
   //      totalMove ++;
        // switch the player
   //     }
        //
        // else, do nothing

/*
However, when an occupied square is clicked, nothing
shall happen.
(45 marks) Players must be able to continue to place their markers until the
game reaches an end. Your code must CORRECTLY determine if the game
has ended with a winner or a tie.
● (5 marks) Once the game has ended, no player shall be allowed to place
their markers.
*/



    
    //we need to check if the game is tie
   //  if(!gameOver){
    // we need to check if it is a tie
    // check the counter if total move is 9 and game not over
    //}
    //
   // function updateGameStatus(){
    // if(gameOver === true){

   //  }

    //}
