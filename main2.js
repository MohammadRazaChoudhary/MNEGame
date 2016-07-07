// var mainState = {
//     preload: function() { 
//                 game.load.image('grass', 'grass.png');
//                 game.load.image('plant', 'plant.png');
//                 game.load.image('background', 'background.png');
//                 game.load.atlasJSONHash('sprites', 'sprites.png' , 'sprites.json');
//     },

//     create: function() { 
//     // game.stage.backgroundColor = '#71c5cf';
//     game.add.image(0,0, 'grass');
//     sprite = game.add.sprite(10, 10, 'sprites', "zombie1.png");
//     plant = game.add.image(0, 300, 'plant');
//     game.add.image(0, 0, 'background');
//     gameOver = game.add.text(180, 20, "MNE Creations", {font: "10px Arial", fill: "#ffffff"});

//     game.plant = game.add.physicsGroup(Phaser.Physics.ARCADE, game.world, 'plant');
//     Phaser.ScaleManager = this (this, 1000,1450);

//     },

//     update: function() {

//     },

//     restartGame: function() {
//     game.state.start('main');
//     },

// };

// var game = new Phaser.Game(300, 450);

// game.state.add('main', mainState); 

// game.state.start('main'); 

