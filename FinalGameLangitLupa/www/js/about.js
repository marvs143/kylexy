aboutGame={
	 create:function(){
	 	game.stage.backgroundColor="#1000200";
	 	     devs = game.add.text(260, 80, 'Langit Lupa', {font: '50px serif', fill: 'WHITE'});
	 	     text =game.add.text(40,180, "Is a traditional game in the Philippines", {font: '45px serif', fill: 'WHITE'});
             namesText = game.add.text(200, 470, 'MARVIN C MANUEL', {font: '40px serif', fill: 'white'})
             dev = game.add.text(250, 290, 'Developed By:', {font: '40px serif', fill: 'white'}); 
            nameText = game.add.text(230, 400, 'RUTH TEOFREN', {font: '40px serif', fill: 'white'}); 

            back2 = game.add.button(30,30,"back2",this.back);
	 },
	 update:function(){
	 	 
	 },
     back:function(){
      game.state.start("menuGame");
     },
}
 