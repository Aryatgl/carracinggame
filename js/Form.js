class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton("reset");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 110, 0);
    this.title.style('color','red')
    this.title.style('font-size','50px')
this.reset.position(displayWidth-100,50)
    this.input.position(displayWidth/2 - 60 , displayHeight/2 - 110);
    this.input.style('width','250px')
this.input.style('height','50px')
this.input.style('border-radius','10px')
    this.button.position(displayWidth/2 - 30, displayHeight/2-30);
this.button.style('width','200px')
this.button.style('height','50px')
this.button.style('border-radius','15px')
this.button.style('background-color','red')
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.greeting.style('color','red')
      this.greeting.style('font-size','50px')
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
      player.updateCarsAtEnd(0)
    })
  }
}
