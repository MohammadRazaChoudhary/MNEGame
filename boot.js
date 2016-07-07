var bootState = {
  preload: function() {
    this.game.load.atlasJSONHash('sprites', "sprites.png", "sprites.json");
    this.game.load.image('grass', 'background.png');
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
    this.game.CELL_WIDTH = 490 / 12;
    this.game.CELL_HEIGHT = 290 / 7;
    return this.game.state.start('Title');
  }
};

var game = new Phaser.Game(490, 290);

game.state.add('boot', bootState); 

game.state.start('boot'); 
