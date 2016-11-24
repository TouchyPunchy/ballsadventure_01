// -----------------------
// GameManager
// -----------------------
function GameManager(status){
	
	this.status = status;

	// Actual state
	this.state; 

	// All game states
	this.titleState = new TitleState(this);
	this.gameState = new GameState(this);
	this.endState = new EndState(this);
	this.pauseState = new PauseState(this);
	
	// Pad
	this.pad = new PxGamepad();
	this.gamePad = new GamePad();
	
	this.init = function(){
		this.pad.start();	

		if(this.status == 0)
			this.state = this.titleState;
		if(this.status == 1)
			this.state = this.gameState;
	}
		
	this.step = function(){
		this.pad.update();
		this.state.inputCheck();
		this.state.update();
		this.state.display(); 
	}
	
	this.setState = function(state){
		this.state = state;  
	}

	this.keyPressed = function(){
		/*this.gamePad.keyPressed();
		if(key === ' '){
			var ball = new Ball(player.x,player.y,player.dx*2, -36 + player.dy* 0.3);
			balls.push(ball);
		}else if(keyCode === UP_ARROW || pxGamePad.buttons.b === true){
			player.jump();
		}*/
	}

	this.keyReleased = function(){
		/*gamePad.keyReleased();
		if(key !== ' ' || keyCode === UP_ARROW){
			player.move(0);
		}
		return false;*/
	}

	this.init();
}
