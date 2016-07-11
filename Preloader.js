BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(this.game.world.width / 3, this.game.world.height / 3, 'preloaderBar');


		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, the lines below won't work as the files themselves will 404, they are just an example of use.
		this.load.image('titlepage', 'images/title.jpg');
		this.load.atlas('playButton', 'images/play_button.png', 'images/play_button.json');
		this.load.audio('titleMusic', ['audio/main_menu.mp3']);
		this.load.bitmapFont('fonts', 'font.png', 'font.xml');
		//	+ lots of other required assets here

	},


	update: function () {
		this.plant = this.add.image(200,200, 'plant');
		var text;
		text = this.game.add.text(100, 100, 'MNE Creations', {
      font: '20px sans-serif',
      fill: '#FFF'
    });
    text.anchor.setTo(0.5, 0.5);
    return this.game.input.onTap.add((function(_this) {
      return function() {
        return this.state.start('Play');
      };
    })(this));
  }
};


