var Game, game;

window.game = game = new Phaser.Game(300, 450, Phaser.AUTO, '');

game.state.add('Boot', bootState);

game.state.add('Title', titleState);

game.state.add('Play', playState);

game.state.add('Over', overState);

// game.state.start('Boot');
require(['Boot']);
