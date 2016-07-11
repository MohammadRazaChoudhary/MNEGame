var Pea,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = Pea = (function(superClass) {
  extend(Pea, superClass);

  function Pea(game, position) {
    var sprite;
    this.game = game;
    sprite = this.game.projectiles.create(position.x, position.y, 'sprites', 'pea.png');
    sprite.body.velocity.setTo(150, 0);
    sprite.checkWorldBounds = true;
    sprite.outOfBoundsKill = true;
    this.sprite = sprite;
    sprite.pea = this;
  }

  return Pea;

})(Phaser.Sprite);
