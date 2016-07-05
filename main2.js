var mainState = {
    preload: function() { 
                game.load.image('grass', 'assets/grass.png');
                game.load.image('plant', 'plant.png');
                game.load.image('background', 'assets/background.png');
                game.load.atlasJSONHash('zombie', 'assets/sprites.png' , 'assets/sprites.json');
    },

    create: function() { 
    // game.stage.backgroundColor = '#71c5cf';
    game.add.image(0,0, 'grass');
    sprite = game.add.sprite(10, 10, 'zombie', 'zombie1.png');
    plant = game.add.image(0, 300, 'plant');
    game.add.image(0, 0, 'background');
    gameOver = game.add.text(180, 20, "MNE Creations", {font: "30px Arial", fill: "#ffffff"});

    },

    update: function() {

    },

    restartGame: function() {
    game.state.start('main');
    },

};

var game = new Phaser.Game(300, 500);

game.state.add('main', mainState); 

game.state.start('main'); 
