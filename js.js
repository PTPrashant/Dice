var RandomNumber1;
var RandomNumber2;
var digit1 = 0;
var digit2 = 0;
var finaldigit;

var Answer;

function RunPlayer1() {
  RandomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector('#dice1').setAttribute("src", "dice" + RandomNumber1 + ".png");
  digit1 = 1;

}

function RunPlayer2() {
  RandomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector('#dice2').setAttribute("src", "dice" + RandomNumber2 + ".png");
  digit2 = 1;

  finaldigit = digit1 + digit2;



  if (finaldigit == 2) {

    if (RandomNumber1 > RandomNumber2) {

      document.getElementById('Result').innerHTML = 'Are  BC Player 1 jeet gya bhaiii!!!!';
    }


    if (RandomNumber1 < RandomNumber2) {
      document.getElementById('Result').innerHTML = 'Bhaukaal hai bhai player 2 ka bhaukaal hai!!';
    }

    if (RandomNumber1 == RandomNumber2)
      document.getElementById('Result').innerHTML = 'Its a Draw !!';

  }

}
