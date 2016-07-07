// var bootState = {
//   preload: function() {
//     this.game.load.atlasJSONHash('sprites', "sprites.png", "sprites.json");
//     this.game.load.image('background', 'background.png');
//     this.game.load.image('plant', 'plant.png');

//   },
//   init: function() {
//     this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//     this.game.scale.minWidth = 490;
//     this.game.scale.minHeight = 290;
//     this.game.scale.maxWidth = 980;
//     this.game.scale.maxHeight = 580;
//     this.game.scale.pageAlignHorizontally = true;
//     this.game.scale.pageAlignVertically = true;
//     this.game.scale.forceOrientation(true, false);
//     this.game.scale.setScreenSize(true);
//     return this.game.input.maxPointers = 1;
//   },
//   create: function() {
//     this.game.CELL_WIDTH = 490 / 12;
//     this.game.CELL_HEIGHT = 290 / 7;
//     this.game.add.image(0, 0, 'background');
    
//     this.game.add.image(0, 0, 'plant');
//     gameOver = game.add.text(180, 20, "MNE Creations", {font: "10px Arial", fill: "#ffffff"});
//     return this.game.state.start('Title');
    
//   },
//   update: function() {
    
//   }
// };

// var game = new Phaser.Game(300, 450);

// game.state.add('boot', bootState); 

// game.state.start('boot'); 

var bootState = {
    preload: function() { 
                        this.game.load.atlasJSONHash('sprites', 'sprites.png' , 'sprites.json');
                this.game.load.image('grass', 'grass.png');
                this.game.load.image('plant', 'plant.png');
                this.game.load.image('background', 'background.png');

    },

    create: function() { 
    // game.stage.backgroundColor = '#71c5cf';
    this.game.add.image(0,0, 'grass');
    this.sprite = game.add.sprite(10, 10, 'sprites', "zombie1.png");
    plant = game.add.image(0, 300, 'plant');
    this.game.add.image(0, 0, 'background');
    this.gameOver = game.add.text(180, 20, "MNE Creations", {font: "10px Arial", fill: "#ffffff"});

    game.plant = game.add.physicsGroup(Phaser.Physics.ARCADE, game.world, 'plant');
    Phaser.ScaleManager = this (this, 1000,1450);

    },

    update: function() {

    },

    restartGame: function() {
    game.state.start('main');
    },

};

var game = new Phaser.Game(300, 450);

game.state.add('boot', bootState); 

game.state.start('boot'); 
