//creating function for random numner
function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}



let input = document.querySelector(".input")
let dice = document.querySelector(".dice")
let token = document.querySelector(".token");
let token2 = document.querySelector(".token2");
const movemusic = new Audio("movingSound.mp3");
const winnerSound = new Audio("WinningSound.mp3")
const backmusic = new Audio("backgroundmusic.mp3");
const eatMusic = new Audio("eatingsound.mp3")
// initial visibility of the tokens
token.style.display = "none";
token2.style.display = "none";
let player1;
let player2;
let choice = confirm("do you want to add name for both player");
if(choice){
  player1 = prompt("Enter name for player 1");
  player2 = prompt("Enter name for player 2");
}
else{
    player1 = "Player 1";
    player2 = "Player 2";
}
let player1position = document.querySelector(".player1")
let player2position = document.querySelector(".player2")

let postion = 0;
let postion2 = 0;
let obj = {
    1: [1, 10],
    2: [2, 10],
    3: [3, 10],
    4: [4, 10],
    5: [5, 10],
    6: [6, 10],
    7: [7, 10],
    8: [8, 10],
    9: [9, 10],
    10: [10, 10],

    11: [10, 9],
    12: [9, 9],
    13: [8, 9],
    14: [7, 9],
    15: [6, 9],
    16: [5, 9],
    17: [4, 9],
    18: [3, 9],
    19: [2, 9],
    20: [1, 9],

    21: [1, 8],
    22: [2, 8],
    23: [3, 8],
    24: [4, 8],
    25: [5, 8],
    26: [6, 8],
    27: [7, 8],
    28: [8, 8],
    29: [9, 8],
    30: [10, 8],


    31: [10, 7],
    32: [9, 7],
    33: [8, 7],
    34: [7, 7],
    35: [6, 7],
    36: [5, 7],
    37: [4, 7],
    38: [3, 7],
    39: [2, 7],
    40: [1, 7],

    41: [1, 6],
    42: [2, 6],
    43: [3, 6],
    44: [4, 6],
    45: [5, 6],
    46: [6, 6],
    47: [7, 6],
    48: [8, 6],
    49: [9, 6],
    50: [10, 6],

    51: [10, 5],
    52: [9, 5],
    53: [8, 5],
    54: [7, 5],
    55: [6, 5],
    56: [5, 5],
    57: [4, 5],
    58: [3, 5],
    59: [2, 5],
    60: [1, 5],

    61: [1, 4],
    62: [2, 4],
    63: [3, 4],
    64: [4, 4],
    65: [5, 4],
    66: [6, 4],
    67: [7, 4],
    68: [8, 4],
    69: [9, 4],
    70: [10, 4],

    71: [10, 3],
    72: [9, 3],
    73: [8, 3],
    74: [7, 3],
    75: [6, 3],
    76: [5, 3],
    77: [4, 3],
    78: [3, 3],
    79: [2, 3],
    80: [1, 3],

    81: [1, 2],
    82: [2, 2],
    83: [3, 2],
    84: [4, 2],
    85: [5, 2],
    86: [6, 2],
    87: [7, 2],
    88: [8, 2],
    89: [9, 2],
    90: [10, 2],

    91: [10, 1],
    92: [9, 1],
    93: [8, 1],
    94: [7, 1],
    95: [6, 1],
    96: [5, 1],
    97: [4, 1],
    98: [3, 1],
    99: [2, 1],
    100: [1, 1]

};
var chance = 2;
let start = document.querySelector(".start");

// if user clicked on 1 button then logic 

start.addEventListener("click", (e) => {
   start.style.display = "none",
    token.style.display = "block";
    token2.style.display = "block";
    //setting the starting position of the tokens
    token.style.girdRowStart = 10;
    token.style.gridColumnStart = 1;
    token2.style.girdRowStart = 10;
    token2.style.gridColumnStart = 1;


    dice.addEventListener("click", () => {
        backmusic.play();
        let randnum = randomNumber();
        input.value = randnum;
        if (chance % 2 == 0) {
          if(postion <=100){
            if (randnum == 6) {
               
                move1By(randnum, chance);
            }
            else {
                move1By(randnum, chance);
                chance = chance + 1;
            }
        }
        }
        else {
            if(postion2<=100){
            if (randnum == 6) {
               
                move2By(randnum, chance);

            }
            else {
               
                move2By(randnum, chance);
                chance = chance + 1;
            }
        }
        }
    })
});

//creating function for moving token


//moving first player
function move1By(randnum, chance) {
   
  if((postion+randnum) <=100){
    postion += randnum;
    player1position.value = postion;
    if (postion <= 10) {

        movemusic.play();
        if (postion == 4) {
            token.style.gridRowStart = 8;
            token.style.gridColumnStart = 5;
            postion = 25;
            player1position.value = postion;
        }
        else {

            token.style.girdRowStart = 10;
            token.style.gridColumnStart = obj[postion][0];
        }
        

    }
    else if (postion > 10 && postion <= 20) {
        movemusic.play();
        if (postion == 13) {
            token.style.gridRowStart = 6;
            token.style.gridColumnStart = 6;
            postion = 46;
             player1position.value = postion;
        }
        else {
            token.style.gridColumnStart = obj[postion][0];
            token.style.gridRowStart = obj[postion][1];

        }

    }
    else if (postion > 20 && postion <= 30) {
        movemusic.play();
        if (postion == 27) {
            eatMusic.play();
            token.style.gridRowStart = 10;
            token.style.gridColumnStart = 5;
            postion = 5;
             player1position.value = postion;
        }
        else {
            token.style.gridColumnStart = obj[postion][0];
            token.style.gridRowStart = obj[postion][1];
        }
 
    }
    else if (postion > 30 && postion <= 40) {
        movemusic.play();
        if (postion == 40) {
            eatMusic.play();
            token.style.gridRowStart = 10;
            token.style.gridColumnStart = 3;
            postion = 3;
             player1position.value = postion;
        }
        else if (postion == 33) {
            token.style.gridRowStart = 6;
            token.style.gridColumnStart = 9;
            postion = 49;
             player1position.value = postion;
        }
        else {
            token.style.gridColumnStart = obj[postion][0];
            token.style.gridRowStart = obj[postion][1];
        }


    }
    else if (postion > 40 && postion <= 50) {
        movemusic.play();
        if (postion == 50) {
            token.style.gridRowStart = 4;
            token.style.gridColumnStart = 9;
            postion = 69;
             player1position.value = postion;
        }
        else if (postion == 43) {
            eatMusic.play();
            token.style.gridRowStart = 9;
            token.style.gridColumnStart = 3;
            postion = 18;
             player1position.value = postion;
        }
        else if (postion == 42) {
            token.style.gridRowStart = 4;
            token.style.gridColumnStart = 3;
            postion = 63;
             player1position.value = postion;
        }
        else {
            token.style.gridColumnStart = obj[postion][0];
            token.style.gridRowStart = obj[postion][1];
        }
    
    }
    else if (postion > 50 && postion <= 60) {
        movemusic.play();
        if (postion == 54) {
            eatMusic.play();
            token.style.gridRowStart = 7;
            token.style.gridColumnStart = 10;
            postion = 31;
             player1position.value = postion;
        }
        else {
            token.style.gridColumnStart = obj[postion][0];
            token.style.gridRowStart = obj[postion][1];
        }
    }
    else if (postion > 60 && postion <= 70) {
        movemusic.play();
        if (postion == 66) {
            eatMusic.play();
            token.style.gridRowStart = 6;
            token.style.gridColumnStart = 5;
            postion = 45;
             player1position.value = postion;
        }
        else if (postion == 62) {
            token.style.gridRowStart = 1;
            token.style.gridColumnStart = 1;
            postion = 81;
             player1position.value = postion;
        }
        else {
            token.style.gridColumnStart = obj[postion][0];
            token.style.gridRowStart = obj[postion][1];
        }

    }
    else if (postion > 70 && postion <= 80) {
        movemusic.play();
        if (postion == 74) {
            token.style.gridRowStart = 1;
            token.style.gridColumnStart = 9;
            postion = 92;
             player1position.value = postion;
        }
        else {
            token.style.gridColumnStart = obj[postion][0];
            token.style.gridRowStart = obj[postion][1];
        }

    }
    else if (postion > 80 && postion <= 90) {
        movemusic.play();
        if (postion == 89) {
            eatMusic.play();
            token.style.gridRowStart = 5;
            token.style.gridColumnStart = 8;
            postion = 53;
             player1position.value = postion;
        }
        else {
            token.style.gridColumnStart = obj[postion][0];
            token.style.gridRowStart = obj[postion][1];
        }


    }
    else if (postion > 90 && postion <= 100) {
        movemusic.play();

        if (postion == 95) {
            eatMusic.play();
            token.style.gridRowStart = 3;
            token.style.gridColumnStart = 4;
            postion = 77;
            player1position.value = postion;
        } else if (postion == 99) {
            eatMusic.play();
            token.style.gridRowStart = 6;
            token.style.gridColumnStart = 1;
            postion = 41;
            player1position.value = postion;
        } else if (postion === 100) {
            token.style.gridColumnStart = 1;
            token.style.gridRowStart = 1;
            winnerSound.play();
            alert(`${player1} won the game`);
            resetGame();
        } else {
            token.style.gridColumnStart = obj[postion][0];
            token.style.gridRowStart = obj[postion][1];
        }
    }
    }
    else{
        postion =postion;
    }
}
//moving second player
function move2By(randnum, chance) {
    if((postion2+randnum) <=100){
    postion2 += randnum;
    player2position.value = postion2;
    if (postion2 <= 10) {

        movemusic.play();
        if (postion2 == 4) {
            token2.style.gridRowStart = 8;
            token2.style.gridColumnStart = 5;
            postion2 = 25;
            player2position.value = postion2;
        }
        else {
            token2.style.girdRowStart = 10;
            token2.style.gridColumnStart = obj[postion2][0];
        }

    }
    else if (postion2 > 10 && postion2 <= 20) {
        movemusic.play();
        if (postion2 == 13) {
            token2.style.gridRowStart = 6;
            token2.style.gridColumnStart = 6;
            postion2 = 46;
            player2position.value = postion2;
        }
        else {
            token2.style.gridColumnStart = obj[postion2][0];
            token2.style.gridRowStart = obj[postion2][1];

        }

    }
    else if (postion2 > 20 && postion2 <= 30) {
        movemusic.play();
        if (postion2 == 27) {
            token2.style.gridRowStart = 10;
            token2.style.gridColumnStart = 5;
            postion2 = 5;
            player2position.value = postion2;
        }
        else {
            token2.style.gridColumnStart = obj[postion2][0];
            token2.style.gridRowStart = obj[postion2][1];
        }

    }
    else if (postion2 > 30 && postion2 <= 40) {
        movemusic.play();
        if (postion2 == 40) {
            token2.style.gridRowStart = 10;
            token2.style.gridColumnStart = 3;
            postion2 = 3;
            player2position.value = postion2;
        }
        else if (postion2 == 33) {
            token2.style.gridRowStart = 6;
            token2.style.gridColumnStart = 9;
            postion2 = 49;
            player2position.value = postion2;
        }
        else {
            token2.style.gridColumnStart = obj[postion2][0];
            token2.style.gridRowStart = obj[postion2][1];
        }
    }
    else if (postion2 > 40 && postion2 <= 50) {
        movemusic.play();
        if (postion2 == 50) {
            token2.style.gridRowStart = 4;
            token2.style.gridColumnStart = 9;
            postion2 = 69;
            player2position.value = postion2;
        }
        else if (postion2 == 43) {
            token2.style.gridRowStart = 9;
            token2.style.gridColumnStart = 3;
            postion2 = 18;
            player2position.value = postion2;
        }
        else if (postion2 == 42) {
            token2.style.gridRowStart = 4;
            token2.style.gridColumnStart = 3;
            postion2 = 63;
            player2position.value = postion2;
        }
        else {
            token2.style.gridColumnStart = obj[postion2][0];
            token2.style.gridRowStart = obj[postion2][1];
        }
    }
    else if (postion2 > 50 && postion2 <= 60) {
        movemusic.play();
        if (postion2 == 54) {
            token2.style.gridRowStart = 7;
            token2.style.gridColumnStart = 10;
            postion2 = 31;
            player2position.value = postion2;
        }
        else {
            token2.style.gridColumnStart = obj[postion2][0];
            token2.style.gridRowStart = obj[postion2][1];
        }
    }
    else if (postion2 > 60 && postion2 <= 70) {
        movemusic.play();
        if (postion2 == 66) {
            token2.style.gridRowStart = 6;
            token2.style.gridColumnStart = 5;
            postion2 = 45;
            player2position.value = postion2;
        }
        else if (postion2 == 62) {
            token2.style.gridRowStart = 1;
            token2.style.gridColumnStart = 1;
            postion2 = 81;
             player2position.value = postion2;
        }
        else {
            token2.style.gridColumnStart = obj[postion2][0];
            token2.style.gridRowStart = obj[postion2][1];
        }
    }
    else if (postion2 > 70 && postion2 <= 80) {
        movemusic.play();
        if (postion2 == 74) {
            token2.style.gridRowStart = 1;
            token2.style.gridColumnStart = 9;
            postion2 = 92;
             player2position.value = postion2;
        }
        else {
            token2.style.gridColumnStart = obj[postion2][0];
            token2.style.gridRowStart = obj[postion2][1];
        }
    }
    else if (postion2 > 80 && postion2 <= 90) {
        movemusic.play();
        if (postion2 == 89) {
            token2.style.gridRowStart = 5;
            token2.style.gridColumnStart = 8;
            postion2 = 53;
             player2position.value = postion2;
        }
        else {
            token2.style.gridColumnStart = obj[postion2][0];
            token2.style.gridRowStart = obj[postion2][1];
        }
    }
    else if (postion2 > 90 && postion2 <= 100) {
        movemusic.play();
    
        if (postion2 == 95) {
            eatMusic.play();
            token2.style.gridRowStart = 3;
            token2.style.gridColumnStart = 4;
            postion2 = 77;
            player2position.value = postion2;
        } else if (postion2 == 99) {
            eatMusic.play();
            token2.style.gridRowStart = 6;
            token2.style.gridColumnStart = 1;
            postion2 = 41;
            player2position.value = postion2;
        } else if (postion2 === 100) {
            token2.style.gridColumnStart = 1;
            token2.style.gridRowStart = 1;
            winnerSound.play();
            alert(`${player2} won the game`);
            resetGame();
        } else {
            token2.style.gridColumnStart = obj[postion2][0];
            token2.style.gridRowStart = obj[postion2][1];
        }
    }
}
else{
    postion2 =postion2;
}
}
function resetGame() {
    token2.style.gridColumnStart = 1;
    token2.style.gridRowStart = 10;
    token.style.gridColumnStart = 1;
    token.style.gridRowStart = 10;
    postion = 0;
    postion2 = 0;
    player1position.value = postion;
    player2position.value = postion2;
}