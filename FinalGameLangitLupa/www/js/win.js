winGame = {
	create:function(){
     game.stage.backgroundColor="#1000200";
      gameover = game.add.text(250,270, 'Game Over!',{ font: '60px Serif', fill: 'white' });
       labelhi = game.add.text(300, 170, "Hi-Score: " +getScore(),{font: '30px serif', fill: 'white'}); 
      
        restart = game.add.button(350,370,"restart",this.restart);
	},
	update:function(){

	},
	restart:function(){
		 window.location.href=window.location.href;
	}	
}
