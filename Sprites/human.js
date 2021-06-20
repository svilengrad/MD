let human = new blockLike.Sprite({
    width: 130,
    height: 130,
    color: 'transparent',
    image: 'human (1).png'
});

// Initialisation

human.addTo(stage);
human.hide();


// Game Start

stage.whenReceiveMessage("game-start", function(){
    human.setX(-500)
    human.show();
});

// Key Controls

human.whenKeyPressed('d', function () {// d
    if(this.x < stage.width/2-100){
        this.changeX(100);
        this.pointInDirection(30);
    }
});

human.whenKeyPressed('a', function () {// a
    if(this.x > (stage.width / 2 * -1) +100){
      this.changeX (-100);
      this.pointInDirection(-150);
    }
});

human.whenKeyPressed('w', function () {// w
    if(this.y < stage.height /2-100){
       this.changeY (100)
       this.pointInDirection(-90);
    }
});

human.whenKeyPressed('s', function () {// s
    if(this.y > (stage.height / 2 * -1) +100){
       this.changeY (-100)
       this.pointInDirection(90);
    }
});