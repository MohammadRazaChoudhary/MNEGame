var Zombie,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = Zombie = (function(superClass) {
  extend(Zombie, superClass);

  function Zombie(state1) {
    var row, sprite, x, y;
    this.state = state1;
    this.game = state.game;
    row = this.game.rnd.integerInRange(0, 6);
    x = this.game.world.width;
    y = this.state.yForRow(row);
    this.row = row;
    sprite = this.game.zombies.create(x, y, 'sprites', 'zombie1.png');
    sprite.animations.add('walking', ["zombie1.png", "zombie2.png", "zombie3.png"], 5, true, false);
    sprite.animations.play('walking');
    sprite.body.velocity.setTo(-20, 0);
    sprite.health = 5;
    sprite.events.onKilled.add((function() {
      return this.destroy();
    }), sprite);
    sprite.checkWorldBounds = true;
    sprite.events.onOutOfBounds.add((function() {
      return this.game.state.start('Over');
    }), sprite);
    sprite.zombie = this;
    this.sprite = sprite;
  }

  return Zombie;

})(Phaser.Sprite);
