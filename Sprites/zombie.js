let zombie = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'zombie.png'
});
zombie.addTo(stage);
zombie.setX(500)
zombie.whenKeyPressed(39, function () {// right arrow
    if(this.x < stage.width/2-100){
       this.changeX(100);
       this.pointInDirection(30);
       isGameOver();
    }
});

zombie.whenKeyPressed(37, function () {// left arrow
    if(this.x > (stage.width / 2 * -1) +100){
       this.changeX (-100)
       this.pointInDirection(-150);
       isGameOver();
    }
});

zombie.whenKeyPressed(38, function () {// up arrow 
    if(this.y < stage.height /2-100){
       this.changeY (100)
       this.pointInDirection(-90);
       isGameOver();
    }
});

zombie.whenKeyPressed(40, function () {// down arrow
    if(this.y > (stage.height / 2 * -1) +100){
       this.changeY (-100)
       this.pointInDirection(90);
       isGameOver();
    }
});
