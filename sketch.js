var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

//loading imgs
function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //calling the database
  database = firebase.database();

  //game class created and program ran
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


