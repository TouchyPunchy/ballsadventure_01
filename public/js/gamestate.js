// -----------------------
// GameState
// -----------------------
function GameState(gameManager){

	var BLOCKS_COUNT = 1;
	var BALLS_COUNT = 1;
	var GAMEPAD_STICK_THRESHOLD = 0.25;

	// Game manager
	this.gm = gameManager;

	// Game objects
	this.player = null;
	this.blocks = [];
	this.balls = [];

	// this.lastPadState = null; // ?

	this.init = function(){
		this.player = new Player(width / 2,height / 2);
		for(var i = 0; i < BLOCKS_COUNT; i++)
			this.blocks[i] = new Block(width * 2 / 3,height / 2);
	}

	this.inputCheck = function(){

		// WIP add keyboard/gamepad
		if(this.gm.pad.buttons.y === true)
			this.gm.setState(this.gm.endState);

		if(this.gm.pad.leftStick.x < -GAMEPAD_STICK_THRESHOLD)
			direction = -1;
		
		if(this.gm.pad.leftStick.x > GAMEPAD_STICK_THRESHOLD)
			direction = 1;
	
		if(this.gm.pad.leftStick.x >= -GAMEPAD_STICK_THRESHOLD && this.gm.pad.leftStick.x <= GAMEPAD_STICK_THRESHOLD)
			direction = 0;	
		
		this.player.move(direction);

		for(var i = 0; i < this.blocks.length; i++)
			this.blocks[i].move(direction);

		if(this.gm.pad.buttons.a === true)
			this.player.jump();

		if(this.gm.pad.buttons.x === true){
			// ugly shit, sends ball(s)
			var direction_y = this.gm.pad.leftStick.y > 0 ? 0 : 1;
			var dx = this.player.isFacingLeft === true ? -1 : 1;
			var ball = new Ball(
				this.player.x,
				this.player.y, 
				dx * 24 + dx * this.player.dx * 2,
				-24 + this.player.dy * 0.3 + -24 * direction_y
			);
			this.balls.push(ball);
			//console.log(dx);
		}
	}

	this.update = function(){
		var blocks_length = this.blocks.length,
			balls_length = this.balls.length;
		
		this.player.update();

		for(var i = 0; i < blocks_length; i++)
			this.blocks[i].update();
		
		for(var i = 0; i < balls_length; i++)
			this.balls[i].update();
	}

	this.display = function(){

		// ---- SHOW

		var blocks_length = this.blocks.length,
			balls_length = this.balls.length;

		background(51);

		fill(255);
		noStroke();

		text("Game! press b!", 10, 20);

		this.player.show();

		for(var i = 0; i < blocks_length; i++)
			this.blocks[i].show();

		for(var i = 0; i < balls_length; i++)
			this.balls[i].show();

		// ---- CLEAN UP (THE BALLS)

		for(var i = balls_length-1; i >= 0; i--){
			if(this.balls[i].toDelete === true)
				this.balls.splice(i,1);
		}
	}

	this.init();
}
