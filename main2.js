var mainState = {
    preload: function() { 
                game.load.image('pic', 'pics/cube.png');
    },

    create: function() { 
    // Change the background color of the game to blue
    game.stage.backgroundColor = '#71c5cf';

         // game.add.sprite(0,0, 'pic');

    gameOver = game.add.text(180,20, "MNE Creations", {font: "30px Arial", fill: "#ffffff"});
    score = game.add.text(20,20, "Hello World!", {font: "10px Arial", fill: "#ffffff"});
    },

    update: function() {

    },

 
    jump: function() {
    },


    restartGame: function() {


    game.state.start('main');
    },

};

var game = new Phaser.Game(400, 490);

game.state.add('main', mainState); 

game.state.start('main'); 