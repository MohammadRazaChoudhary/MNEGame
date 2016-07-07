var titleState = {
  update: function() {
    var text;
    text = this.game.add.text(this.game.world.width / 2, this.game.world.height / 2, 'Tap anywhere to Start', {
      font: '20px sans-serif',
      fill: '#FFF'
    });
    text.anchor.setTo(0.5, 0.5);
    return this.game.input.onTap.add((function(_this) {
      return function() {
        return _this.game.state.start('Play');
      };
    })(this));
  }
};
