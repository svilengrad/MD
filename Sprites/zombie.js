let zombie = new blockLike.Sprite({
    width: 130,
    height: 130,
    color: 'transparent',
    image: 'zombie.png'
});

// Initialisation

zombie.addTo(stage);
zombie.hide();

// Game Start

stage.whenReceiveMessage("game-start", function(){
    zombie.setX(500)
    zombie.show();
});

// Key Controls

// left arrow
zombie.whenKeyPressed(37, function () {
    if(this.x > (stage.width / 2 * -1) +100){
       this.changeX (-100)
       this.pointInDirection(-150);
       isGameOver();
    }
}); 

// right arrow
zombie.whenKeyPressed(39, function () {
    if(this.x < stage.width/ 2-100){
        this.pointInDirection(360);
        this.changeX(100);
        isGameOver();
    }
});

// up arrow 
zombie.whenKeyPressed(38, function () {
    if(this.y < stage.height /2-100){
       this.changeY (100)
       this.pointInDirection(-90);
       isGameOver();
    }
});

// down arrow
zombie.whenKeyPressed(40, function () {
    if(this.y > (stage.height / 2 * -1) +100){
       this.changeY (-100)
       this.pointInDirection(90);
        isGameOver();
   }
});