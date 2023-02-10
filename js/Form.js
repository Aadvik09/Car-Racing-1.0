//class that has input for the user to enter
class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    //h1 is the largest, and h6 is the lowest heading size
    this.greeting = createElement("h2");
  }

  hide() {
    //hides everything using predefined function 
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setElementPosition() {
    //assigning position 
    this.titleImg.position(120,50);
    this.input.position(width/2 - 100, height/2 - 80);
    this.playButton.position(width/2 - 90, height/2 - 20);
    this.greeting.position(width/2 - 300, height/2 - 100);
  }

  setElementStyle() {
    //styling using predifined found in style.css
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //on the mouse pressed
  handleMousePressed() {
    this.playButton.mousePressed(()=>{
      //hides input and play button
      this.input.hide();
      this.playButton.hide();

      //displays message 
      var message = `Hello ${this.input.value()} </br> Waiting for another player to join`
      this.greeting.html(message);
    });
  } 

  //function is run inside of the game class
  display() {
    //runs above functions in the game class
    this.setElementPosition();
    this.setElementStyle();
    this.handleMousePressed();
  }

  

}
