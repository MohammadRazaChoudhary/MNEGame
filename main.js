var Game, game;


game.state.add('Boot', bootState);

game.state.add('Title', titleState);

game.state.add('Play', playState);

game.state.add('Over', overState);

// game.state.start('Boot');
require(['Boot']);
