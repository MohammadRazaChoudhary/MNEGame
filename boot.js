var bootState = {
  preload: function() {
    this.game.load.atlasJSONHash('sprites', "sprites.png", "sprites.json");
    this.game.load.image('background', 'background.png');
    this.game.load.image('plant', 'plant.png');

  },
  init: function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.minWidth = 490;
    this.game.scale.minHeight = 290;
    this.game.scale.maxWidth = 980;
    this.game.scale.maxHeight = 580;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.forceOrientation(true, false);
    this.game.scale.setScreenSize(true);
    return this.game.input.maxPointers = 1;
  },
  create: function() {
    this.game.add.image(0, 0, 'background');
    
    this.game.add.image(0, 0, 'plant');
    gameOver = game.add.text(180, 20, "MNE Creations", {font: "10px Arial", fill: "#ffffff"});
    return this.game.state.start('Title');
    
  },
  update: function() {
    
  }
};

var game = new Phaser.Game(300, 450);

game.state.add('boot', bootState); 

game.state.start('boot'); 
