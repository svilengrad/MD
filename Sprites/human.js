let human = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'human.png'
});
human.addTo(stage);
human.setRotationStyle('left-right');
human.pointInDirection(-90);

human.whenKeyPressed(' ', function() {
    console.log('stretching')
    stretchCostume.addTo(human);
    human.nextCostume();
})

human.whenKeyPressed('d', function () {// d
    this.pointInDirection(-90);
    this.changeX(100);
});

human.whenKeyPressed('a', function () {// a
    this.pointInDirection(90);
    this.changeX(-100);
});

human.whenKeyPressed('w', function () {// w
    this.changeY(100);
});

human.whenKeyPressed('s', function () {// s
    this.changeY(-100);
});