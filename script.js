var numSquares = 9;
var pikedcolor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var message = document.getElementById("message");
var header = document.querySelector("header");
var buttonPlay = document.querySelector("button");
var modeButtons = document.querySelectorAll(".mode");

//func to start the game when the page loads
function init() {
  //mode buttons event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      //update numsquares
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 9);
      reset();

      //figure how many squares to show
      //pick new color
      //new pikedcolor
      //update page
    });
  }
  //square listeners
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      var cliked = this.style.background;
      if (cliked === pikedcolor) {
        message.textContent = "Correct!!";
        changecolor(cliked);
        header.style.background = cliked;
        buttonPlay.textContent = "Play again?";
      } else {
        this.style.background = "#232323";
        message.textContent = "Try again";
      }
    });
  }
  reset();
}

init();

function reset() {
  //generate new colors
  colors = generateRandomColors(numSquares);
  //pick a new color from the array
  pikedcolor = randomcolor();
  //chnage color display to match picked color
  colordisplay.textContent = pikedcolor;
  //remove winning message
  message.textContent = "";

  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      //show the squares if hard is pressed
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

  buttonPlay.textContent = "New colors";
  header.style.background = "lightseagreen";
}

function randomcolor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

buttonPlay.addEventListener("click", function() {
  reset();
});

function changecolor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to the array

  for (var i = 0; i < num; i++) {
    arr.push(sortingcolor());
  }
  //return the array
  return arr;
}

function sortingcolor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
