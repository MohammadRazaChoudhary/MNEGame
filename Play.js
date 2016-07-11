var Plant, Zombie;

Zombie = require('zombie.js');

Plant = require('plant.js');

module.exports = {
  init: function() {
    return this.game.input.onTap.add((function(_this) {
      return function() {
        return _this.handleTap(_this.game.input.activePointer);
      };
    })(this));
  },
  create: function() {
    this.game.world.setBounds(0, 0, this.game.world.width, this.game.world.height);
    this.game.add.image(0, 0, 'grass');
    this.game.plants = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this.game.world, 'plants');
    this.game.projectiles = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this.game.world, 'projectiles');
    this.game.zombies = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this.game.world, 'zombies');
    this.game.time.events.repeat(3 * 1000, 9999, (function() {
      return new Zombie(this);
    }), this);
    // this.game.audio = {};
    // this.game.audio.pea_shoot = this.game.add.audio('peaShoot');
    // this.game.audio.splat = this.game.add.audio('splat');
    // this.game.audio.zombiesAreComing = this.game.add.audio('zombiesAreComing');
    // return this.game.audio.zombiesAreComing.play();
  },
  update: function() {
    
    text = this.game.add.text(150, 100, 'Play!', { 
       font: '40px sans-serif', 
       fill: '#FFF' 
    }); 


    return this.game.physics.arcade.overlap(this.game.projectiles, this.game.zombies, this.handleZombieHit, null, this);
  },
  handleZombieHit: function(projectile, zombie) {
    this.game.audio.splat.play();
    zombie.damage(1);
    return projectile.kill();
  },
  handleTap: function(pointer) {
    var cell, col, row;
    cell = this.getCellOrigin(pointer.x, pointer.y);
    row = this.rowForY(cell.y);
    col = this.colForX(cell.x);
    if (!this.plantAt(row, col)) {
      return new Plant(this, this.game.input.activePointer.position);
    }
  },
  plantAt: function(row, col) {
    var sprite;
    return ((function() {
      var i, len, ref, results;
      ref = this.game.plants.children;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        sprite = ref[i];
        if (sprite.plant.row === row && sprite.plant.col === col) {
          results.push(sprite);
        }
      }
      return results;
    }).call(this))[0];
  },
  getCellOrigin: function(x, y) {
    return {
      x: Math.floor(x / this.game.CELL_WIDTH) * this.game.CELL_WIDTH + 10,
      y: Math.floor(y / this.game.CELL_HEIGHT) * this.game.CELL_HEIGHT
    };
  },
  colForX: function(x) {
    return x / this.game.CELL_WIDTH;
  },
  rowForY: function(y) {
    return y / this.game.CELL_HEIGHT;
  },
  yForRow: function(row) {
    if (row === 0) {
      return 0;
    }
    return 35 + (row - 1) * 41;
  }
};
