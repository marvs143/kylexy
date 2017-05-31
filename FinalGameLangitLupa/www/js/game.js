
var player, keyboard;
var plax,plax1,diamond,dia,dias,wood,woods,wooda,woodas,coin,coins,score = 0, labelhi, scoreInterval,score,retrieveBest,restartButton,startButton,titlepage,startText;
 var a = 0;
 var nextJump = 0;
var left=false;
var right=false;
var duck= false;
var jump=false;
var bgmusic, loopAudio, boomusic, yaymusic;
var nameText,namesText;
var restartB;
var help2Text;
var help3Text;
var devs ;
var  dev;
var text;
var gameover;
var game = new Phaser.Game(800,600, Phaser.CANVAS, '');

game.state.add('bootGame', bootGame);
game.state.add('preloadGame', preloadGame);
game.state.add('menuGame', menuGame);
game.state.add('playGame', playGame);
game.state.add('winGame', winGame);
game.state.add('helpGame', helpGame);
game.state.add('aboutGame', aboutGame);



game.state.start("bootGame");