var RandomNumber1;
var RandomNumber2;
var finaldigit;

var Answer;

document.querySelectorAll('button')[0].addEventListener('click',RunPlayer1);
document.querySelectorAll('button')[1].addEventListener('click',RunPlayer2);


function RunPlayer1() {
  RandomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector('#dice1').setAttribute("src", "dice" + RandomNumber1 + ".png");

  if (RandomNumber1 > RandomNumber2) {

    document.getElementById('Result').innerHTML = 'Are  BC Player 1 jeet gya bhaiii!!!!';
  }


  if (RandomNumber1 < RandomNumber2) {
    document.getElementById('Result').innerHTML = 'Bhaukaal hai bhai player 2 ka bhaukaal hai!!';
  }

  if (RandomNumber1 == RandomNumber2)
    document.getElementById('Result').innerHTML = 'Its a Draw !!';

}

function RunPlayer2() {
  RandomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector('#dice2').setAttribute("src", "dice" + RandomNumber2 + ".png");


    if (RandomNumber1 > RandomNumber2) {

      document.getElementById('Result').innerHTML = 'Are  BC Player 1 jeet gya bhaiii!!!!';
    }


    if (RandomNumber1 < RandomNumber2) {
      document.getElementById('Result').innerHTML = 'Bhaukaal hai bhai player 2 ka bhaukaal hai!!';
    }

    if (RandomNumber1 == RandomNumber2)
      document.getElementById('Result').innerHTML = 'Its a Draw !!';



}
