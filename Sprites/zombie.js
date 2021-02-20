let zombie = new blockLike.zombie({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'https://steamuserimages-a.akamaihd.net/ugc/879751236392813909/A6A6F36547B471398460752BA1DEDCF198B20323/'
});
zombie.addTo(stage);
zombie.setRotationStyle('left-right');
zombie.pointInDirection(-90);

zombie.whenKeyPressed(' ', function() {
    console.log('stretching')
    stretchCostume.addTo(zombie);
    zombie.nextCostume();
})

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