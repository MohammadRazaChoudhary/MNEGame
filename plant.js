
var Pea, Plant,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Pea = require('pea.js');

module.exports = Plant = (function() {
  function Plant(state1, position) {
    var cell, idle, shoot, sprite;
    this.state = state1;
    this.update = bind(this.update, this);
    this.game = state.game;
    cell = this.state.getCellOrigin(position.x, position.y);
    this.row = this.state.rowForY(cell.y);
    this.col = this.state.colForX(cell.x);
    sprite = this.game.plants.create(cell.x, cell.y + 10, 'sprites', 'ps-idle01.png');
    shoot = sprite.animations.add('shoot', ["ps-shoot1.png", "ps-shoot2.png"], 5, false, false);
    shoot.onComplete.add((function() {
      return this.animations.play('idle');
    }), sprite);
    idle = sprite.animations.add('idle', ["ps-idle01.png"], 1, false, false);
    sprite.animations.play('idle');
    this.sprite = sprite;
    sprite.plant = this;
    sprite.update = this.update;
  }

  Plant.prototype.update = function() {
    if (this.zombieAhead() && this.canShoot()) {
      return this.shoot();
    }
  };

  Plant.prototype.row = Plant.row;

  Plant.prototype.col = Plant.col;

  Plant.prototype.lastShotAt = 0;

  Plant.prototype.firingRate = 1 * 1000;

  Plant.prototype.zombieAhead = function() {
    var ahead, sprite;
    return ahead = ((function() {
      var i, len, ref, results;
      ref = this.state.game.zombies.children;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        sprite = ref[i];
        if (sprite.zombie.row === this.row && sprite.position.x > this.sprite.position.x) {
          results.push(sprite);
        }
      }
      return results;
    }).call(this)).length > 0;
  };

  Plant.prototype.canShoot = function() {
    return this.timeSinceLastShot() > this.firingRate;
  };

  Plant.prototype.timeSinceLastShot = function() {
    return new Date().getTime() - this.lastShotAt;
  };

  Plant.prototype.shoot = function() {
    this.lastShotAt = new Date().getTime();
    this.sprite.animations.play('shoot');
    this.game.audio.pea_shoot.play();
    return new Pea(this.game, new Phaser.Point(this.sprite.position.x + 10, this.sprite.position.y));
  };

  return Plant;

})();
