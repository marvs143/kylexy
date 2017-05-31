preloadGame={
  preload:function() {
     game.load.spritesheet("kal","img/hen.png",800,70);
    game.load.spritesheet("kala","img/heaven.png",800,70);
    game.load.image("the","img/platform.png");
    game.load.image("the1","img/platform.png");
    game.load.image("the2","img/platform.png");
    game.load.image("plax1","img/platform.png");
    game.load.image("plax2","img/platform.png");
    game.load.image("plax3","img/platform.png");
    game.load.image("plax4","img/platform.png");
    game.load.image("pla1","img/platform.png");
    game.load.image("pla2","img/platform.png");
    game.load.image("pla3","img/platform.png");
    game.load.image("plax12","img/platform.png");
    game.load.image("plax22","img/platform.png");
    game.load.image("plax32","img/platform.png");
    game.load.image("plax42","img/platform.png");
    game.load.audio('bgMusic', 'audio/music.mp3');
     game.load.audio('yay', 'audio/game.mp3');
     game.load.audio('boo', 'audio/devil.mp3');
    game.load.spritesheet("hero","img/galaw.png",32,48);
    game.load.image("bg","img/bg2.png");
    game.load.spritesheet("dia","img/dua.png",50,50);
    game.load.spritesheet("wood","img/dual.png",50,50);
    game.load.spritesheet("coin","img/angel.png",50,50);
    game.load.spritesheet("coi","img/angel.png",50,50);
    game.load.image("restart","img/restart.png");
    game.load.image('pause','img/pause.png');
    game.load.spritesheet("buttonjump","img/ups.png",150,100);
    game.load.spritesheet("buttonhorizontal","img/lefts.png",150,100);
    game.load.spritesheet("buttonhorizontals","img/right.png",150,100);
    game.load.spritesheet("help","img/help.png");
game.load.spritesheet("back","img/back.png");
 game.load.spritesheet("back2","img/back.png");
 game.load.spritesheet("laro","img/play.png");
 game.load.spritesheet("yap","img/restart.png");
 game.load.spritesheet("about","img/about.png");
 game.load.image('bg_menu','img/ok.png');

  },
  create:function() {
    game.state.start("menuGame");
  },
}