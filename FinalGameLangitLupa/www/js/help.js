helpGame={
	create:function () {
		game.stage.backgroundColor="#1000200";
		 helpText = game.add.text(200, 100, 'How to play Langit Lupa?', {font: '40px serif', fill: 'white'}); 
         help2Text = game.add.text(20, 300, '1. Get all the flying angels to earn points.', {font: '40px serif', fill: 'white'}); 
         help3Text = game.add.text(20, 400, '2. Avoid all the flying demons to enjoy the game.', {font: '35px serif', fill: 'white'}); 

         back = game.add.button(10,10,"back",this.back);
	},
	update:function(){
	},
	back:function(){
   	     game.state.start("menuGame");
   },

}