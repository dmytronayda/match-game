var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  // Create a sequentially-ordered — in ascending order — array with two copies of every number from 1 through 8
  var numbers = [];
  // Randomly transfer those values to a new array
  for (var num = 1; num < 9; num++)
  {
    numbers.push(num);
    numbers.push(num);
  }
  var randNumbers = [];
  var numbersLength = numbers.length;
  while (numbersLength < 16) {
    var randIndex = Math.floor(Math.random() * 16);
    randNumbers.push([randIndex])
  }



  // Return the randomly-ordered array
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
