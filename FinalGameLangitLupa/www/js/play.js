playGame={
	 create:function() {
     bg = game.add.sprite(0,0,"bg");

   
    createDias(7000);
    dia = game.add.group();
    dia.enableBody = true;
     
    createWoods(4000);
    wood= game.add.group();
    wood.enableBody = true; 

    createCoins(6000);
    coin = game.add.group();
    coin.enableBody = true;

    createCois(5000);
    coi = game.add.group();
    coi.enableBody = true;

     yaymusic = game.add.audio('yay');
        boomusic = game.add.audio('boo');
        bgmusic = game.add.audio('bgMusic');
        bgmusic.play().loopFull();

   
    plax1 = game.add.sprite(650,520,"plax1");
    game.physics.arcade.enable(plax1);
    plax1.body.immovable = true;

    plax2 = game.add.sprite(470,520,"plax2");
    game.physics.arcade.enable(plax2);
    plax2.body.immovable = true;

    plax3 = game.add.sprite(270,520,"plax3");
    game.physics.arcade.enable(plax3);
    plax3.body.immovable = true;

    plax4 = game.add.sprite(85,520,"plax4");
    game.physics.arcade.enable(plax4);
    plax4.body.immovable = true;

    pla1= game.add.sprite(560,420,"pla1");
    game.physics.arcade.enable(pla1);
    pla1.body.immovable = true;

    pla2= game.add.sprite(370,420,"pla2");
    game.physics.arcade.enable(pla2);
    pla2.body.immovable = true;

    pla3= game.add.sprite(180,420,"pla3");
    game.physics.arcade.enable(pla3);
    pla3.body.immovable = true;

    plax12 = game.add.sprite(650,320,"plax12");
    game.physics.arcade.enable(plax12);
    plax12.body.immovable = true;

    plax22 = game.add.sprite(470,320,"plax22");
    game.physics.arcade.enable(plax22);
    plax22.body.immovable = true;

    plax32 = game.add.sprite(270,320,"plax32");
    game.physics.arcade.enable(plax32);
    plax32.body.immovable = true;

    plax42 = game.add.sprite(85,320,"plax42");
    game.physics.arcade.enable(plax42);
    plax42.body.immovable = true;

    the1= game.add.sprite(560,220,"the1");
    game.physics.arcade.enable(the1);
    the1.body.immovable = true;

    the2= game.add.sprite(370,220,"the2");
    game.physics.arcade.enable(the2);
    the2.body.immovable = true;

    the= game.add.sprite(180,220,"the");
    game.physics.arcade.enable(the);
    the.body.immovable = true;
     player = game.add.sprite(300,400,"hero");


   
    keyboard = game.input.keyboard.createCursorKeys();
    game.physics.arcade.enable(player);  
    player.body.collideWorldBounds = true;
    player.body.gravity.y= 1000;

    kal = game.add.sprite(0,550,"kal");
    game.physics.arcade.enable(kal);
    kal.animations.add('hampas',[0,1,2],7,true);
    kal.animations.play('hampas');

    kala = game.add.sprite(0,5,"kala");
    kala.animations.add('hampas',[0,1,2],2,true);
    kala.animations.play('hampas');

    labelScore = game.add.text(600, 150, 'Score:0', {font: '30px serif', fill: 'black'}); 
 
    labelhi = game.add.text(600, 100, "Hi-Score: " +getScore(),{font: '30px serif', fill: 'black'}); 

    buttonjump = game.add.button(600, 472, 'buttonjump');  
    buttonjump.events.onInputOver.add(function(){jump=true;});
    buttonjump.events.onInputOut.add(function(){jump=false;});
    buttonjump.events.onInputDown.add(function(){jump=true;});
    buttonjump.events.onInputUp.add(function(){jump=false;});


    buttonleft = game.add.button(0, 472, 'buttonhorizontal');
    buttonleft.events.onInputOver.add(function(){left=true;});
    buttonleft.events.onInputOut.add(function(){left=false;});
    buttonleft.events.onInputDown.add(function(){left=true;});
    buttonleft.events.onInputUp.add(function(){left=false;});

    buttonright = game.add.button(160, 472, 'buttonhorizontals');
    buttonright.events.onInputOver.add(function(){right=true;});
    buttonright.events.onInputOut.add(function(){right=false;});
    buttonright.events.onInputDown.add(function(){right=true;});
    buttonright.events.onInputUp.add(function(){right=false;});


    player.animations.add('right',[6,7,8,9],7,true);
    player.animations.add('left',[0,1,2,3],7,true);

    pause_label = game.add.image(50, 70, 'pause');
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        
        game.paused = true;

        
 

    });

      
    game.input.onDown.add(unpause, self);
 
   
     function unpause(event){
       
        if(game.paused){
          game.paused = false;
            }
       
        
    };
     

    


},
update:function() {
	    game.physics.arcade.overlap(player,kal,killHero);
    game.physics.arcade.overlap(player,coi,killCoi);
    game.physics.arcade.overlap(player,coin,killCoin);
    game.physics.arcade.overlap(player,dia,killHero);
    game.physics.arcade.overlap(player,wood,killHero);
    game.physics.arcade.collide(player,pla1);
    game.physics.arcade.collide(player,pla2);
    game.physics.arcade.collide(player,pla3);
    game.physics.arcade.collide(player,plax12);
    game.physics.arcade.collide(player,plax22);
    game.physics.arcade.collide(player,plax32);
    game.physics.arcade.collide(player,plax42);
    game.physics.arcade.collide(player,plax1);
    game.physics.arcade.collide(player,plax2 );
    game.physics.arcade.collide(player,plax3);
    game.physics.arcade.collide(player,plax4);
    game.physics.arcade.collide(player,the1);
    game.physics.arcade.collide(player,the2);
    game.physics.arcade.collide(player,the);

   
   

         if (getScore()<=x){
        saveScore(x);
        labelhi.text = "Hi-Score: "+x;
    }


   
       if (left && !duck) {
       
        player.body.velocity.x = -150;
        player.animations.play('left');

    }
    else if (right && !duck) {
        
      player.body.velocity.x = 150;
        player.animations.play('right');
    }
     else
     {
        player.body.velocity.x = 0;
        player.animations.stop();
    }
    if (jump){ jump_now(); }  
 
    
      
 
      
    },
}
	function jump_now(){  
    if (game.time.now > nextJump ){
       player.body.velocity.y = -440;
       
    }
}


    function saveScore(score){
        localStorage.setItem("gameData",score);
}


    function getScore(){
        return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:
        localStorage.getItem("gameData");
}


        var x = 0;
    function killCoin(player,coin){
        coin.kill();
        x = x+1;
        labelScore.text = "Score: "+x;
         yaymusic.play();
}


        var x = 0;
function killCoi(player,coi){
        coi.kill();
        x = x+1;
        labelScore.text = "Score: "+x;
         yaymusic.play();
}


 function createDias(time){
        setInterval(function(){
        dias = dia.create(0,470,"dia");
        dias.body.gravity.x= 100;
        var scale = Math.random();
        dias.animations.add('spinning',[0,1],10,true);
        dias.animations.play('spinning');
        dias = dia.create(0,273,"dia");
        dias.body.gravity.x= 95;
        var scale = Math.random();
        dias.animations.add('spinning',[0,1],10,true);
        dias.animations.play('spinning');
    },time);
 }


  function createWoods(time){
        setInterval(function(){
        woods = wood.create(800,150,"wood");
        woods.body.gravity.x= -90;
        var scale = Math.random();
        woods.animations.add('spinning',[0,1],10,true);
        woods.animations.play('spinning');
        woods = wood.create(800,370,"wood");
        woods.body.gravity.x= -80;
        var scale = Math.random();
        woods.animations.add('spinning',[0,1],10,true);
        woods.animations.play('spinning');
    },time);
 }


 function createCoins(time){
        setInterval(function(){
        coins = coin.create(800,270,"coin");
        coins.body.gravity.x = -70;
        var scale = Math.random();
        coins.animations.add('spinning',[0,1],10,true);
        coins.animations.play('spinning'); 
        coins = coin.create(800,470,"coin");
        coins.body.gravity.x = -80;
        var scale = Math.random();
        coins.animations.add('spinning',[0,1],10,true);
        coins.animations.play('spinning');   
    },time);
} 


function createCois(time){
        setInterval(function(){
        cois = coi.create(0,150,"coi");
        cois.body.gravity.x = 60;
        var scale = Math.random();
        cois.animations.add('spinning',[0,1],10,true);
        cois.animations.play('spinning'); 
        cois = coi.create(0,370,"coi");
        cois.body.gravity.x = 70;
        var scale = Math.random();
        cois.animations.add('spinning',[0,1],10,true);
        cois.animations.play('spinning');   
    },time);
} 
    function killHero(player,wood,dia,kal){
          boomusic.play();
        player.kill();


        if(player.kill){
             game.state.start("winGame");
            }
}
