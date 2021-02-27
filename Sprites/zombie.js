let zombie = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'https://i.pinimg.com/originals/42/27/a8/4227a8ac87cd63a6b0e1350cc5e222d0.png'
});
zombie.addTo(stage);
zombie.setRotationStyle('left-right');
zombie.pointInDirection(-90);

zombie.whenKeyPressed(39, function () {// right arrow
    this.pointInDirection(-90);
    this.changeX(100);
});

zombie.whenKeyPressed(37, function () {// left arrow
    this.pointInDirection(90);
    this.changeX(-100);
});

zombie.whenKeyPressed(38, function () {// up arrow
    this.changeY(100);
});

zombie.whenKeyPressed(40, function () {// down arrow
    this.changeY(-100);
});
this.Sound('The Maze Runner.mp3')