const qwerty = document.getElementById('qwerty'); 
const phrase1 = document.getElementById('phrase');
const startbutton = document.getElementById('overlay');
let missed = 0;

function resetbtn() {
  startbutton.style.display = 'none';
}

const phrases = [
  'hello south carolina',
  'bye south carolina',
  'see you soon',
  'on my way',
  'looking forward to seeing you'
];

function getRandomPhraseAsArray(arr) {
  const randomphrase = phrases[Math.floor(Math.random() * arr.length)];
  const splitrandomphrase = randomphrase.split("");
  return splitrandomphrase;
}

const newsplitphrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(newsplitphrase);

console.log(newsplitphrase);
function addPhraseToDisplay(newsplitphrase) {
  // do stuff any arr that is passed in, and add to `#phrase ul`
  newsplitphrase.forEach(function (character) {
    const ul = document.getElementById("phrase");
    const newli = document.createElement('li');

    newli.appendChild(document.createTextNode(character));
    ul.appendChild(newli);

    if (character !== ' ') {
      newli.setAttribute('class', 'letter');

    } else if (character === ' ') {
      newli.setAttribute('class', 'space');
    }
  });
}

const letter = document.getElementsByClassName('letter');
function checkLetter(selectedbutton) {

  const letterarray = Array.from(letter);

  let match = null;

  //loops through one single time
  for (let i = 0; i < letterarray.length; i++) {
    const maskedphrase = letterarray[i];
    if (maskedphrase.innerHTML === selectedbutton) {
      maskedphrase.classList.add('show');
      match = maskedphrase.innerHTML;
      console.log(match);
    }
  } /*............................The loops end ........................................................*/
  return match;
} //end of checkletter function

//Event Listener
const keyboard = document.getElementsByClassName('keyrow');
for (const keyrow of keyboard) {
  keyrow.addEventListener('click', event => {
    if (event.target.tagName == 'BUTTON') {
      //add chosen class to keyboard
      event.target.setAttribute('class', 'chosen');
      //disable the button
      event.target.setAttribute('disabled', 'true');
      //get the value of the button clicked
      const selectedbutton = event.target.innerHTML;
      console.log(selectedbutton);
      // call the CheckLetter function
      const letterfound = checkLetter(selectedbutton);
      //Check the value of letter found
      if (letterfound === null) {
        //remove a blue heart
        const blueheart = document.querySelectorAll('.tries img');
        blueheart[missed].src = 'images/lostHeart.png';
        missed += 1;
      }
    }
    checkWin();
  });
}

function checkWin() {
  var correctLetter = document.getElementsByClassName('show');
  var overlay = document.getElementById('overlay');
  var overlaychildren = document.getElementById('overlay').children;
  if (correctLetter.length == letter.length){
  console.log('You Won');
  overlay.style.display = 'block';
    overlay.setAttribute('class', 'win');
    overlaychildren[0].innerHTML = 'Congratulations You Won';
    overlaychildren[1].innerHTML = 'Play Again';
  }
  else if (missed >= 5) {
    console.log("You Lost");
    overlay.style.display = 'block';
    overlay.setAttribute('class', 'lose');
    overlaychildren[0].innerHTML = 'Sorry You Lost';
    overlaychildren[1].innerHTML = 'Try Again';
  }

}
