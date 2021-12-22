var RandomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var RandomNumber2 = Math.floor(Math.random() * 6 ) + 1;


document.querySelector('#dice1').setAttribute("src","dice"+RandomNumber1+".png");

document.querySelector('#dice2').setAttribute("src","dice"+RandomNumber2+".png");

{

  if ( RandomNumber1 > RandomNumber2 )
  document.getElementById('Result').innerHTML = 'Player 1  wins the Game';

  if ( RandomNumber1 < RandomNumber2 )
  document.getElementById('Result').innerHTML = 'Player 2 wins the Game';

  else
    document.getElementById('unique').innerHTML = 'Its a Draw !!';

}
