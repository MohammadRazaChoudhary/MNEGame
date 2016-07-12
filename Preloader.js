BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		// this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(150, this.game.world.height / 2, 'preloaderBar');

		// this.setLoadingText(this.load.progress);
		// this.preloadBar = this.add.sprite(this.world.centerX - loadingBarFrame.width / 2, loadingBarY, "Loading"); 
                   this.preloadBar.anchor.setTo(0, 0);           
                    this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, the lines below won't work as the files themselves will 404, they are just an example of use.

		this.load.bitmapFont('fonts', 'font.png', 'font.xml');
		//	+ lots of other required assets here

	},


	update: function () {
		this.plant = this.add.image(200,200, 'plant');
		var text;
		text = this.game.add.text(150, 100, 'MNE Creations', {
      font: '40px sans-serif',
      fill: '#FFF'
    });
    text.anchor.setTo(0.5, 0.5);
    //return this.input.onTap.add((function(_this) {
      return function() {
        return this.state.start('Play');
      };
    //})(this));
  }
};


