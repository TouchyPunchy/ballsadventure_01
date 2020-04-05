// -----------------------
// GameState
// -----------------------
class GameState{

	constructor(gameManager){
		// Constants
		this.BLOCKS_COUNT = 1;
		this.BALLS_COUNT = 1;
		this.GAMEPAD_STICK_THRESHOLD = 0.25;

		// Game manager
		this.gm = gameManager;

		// Game objects
		this.player = null;
		this.blocks = [];
		this.balls = [];

		this.init();
	}

	init(){
		this.player = new Player(width / 2,height / 2);
		for(var i = 0; i < this.BLOCKS_COUNT; i++)
			this.blocks[i] = new Block(width * 2 / 3,height / 2);
	}

	inputCheck(){
		let direction = 0;
		if(this.gm.pad.buttons.y === true)
			this.gm.setState(this.gm.endState);

		if(this.gm.pad.leftStick.x < - this.GAMEPAD_STICK_THRESHOLD || this.gm.gamePad.state & this.gm.gamePad.DIR_LEFT) 
			direction = -1;
		
		if(this.gm.pad.leftStick.x > this.GAMEPAD_STICK_THRESHOLD || this.gm.gamePad.state & this.gm.gamePad.DIR_RIGHT)
			direction = 1;
		
		this.player.move(direction);

		for(var i = 0; i < this.blocks.length; i++)
			this.blocks[i].move(direction);

		if(this.gm.pad.buttons.a === true || this.gm.gamePad.state & this.gm.gamePad.DIR_UP)
			this.player.jump();

		if(this.gm.pad.buttons.x === true || this.gm.gamePad.state & this.gm.gamePad.KEY_A){
			// ugly shit, sends ball(s)
			var direction_y = this.gm.pad.leftStick.y > 0 ? 0 : 1;
			var ball = new Ball(
				this.player.x + this.player.width / 2,
				this.player.y, 
				this.player.dx * 4,
				-24 + this.player.dy * 0.3 + -24 * direction_y
			);
			this.balls.push(ball);
		}
	}

	update(){
		this.player.update();
		for(let block of this.blocks)
			block.update();
		for(let ball of this.balls)
			ball.update();
	}

	display(){
		
		background(255,221,0);
		fill(0);
		noStroke();
		
		text("Game! press b!", 10, 20);
		
		this.player.show();
		
		for(let block of this.blocks)
			block.show();

		for(let ball of this.balls)
			ball.show();
			
		// ---- CLEAN UP (THE BALLS)
		let balls_length = this.balls.length;
		for(var i = balls_length-1; i >= 0; i--){
			if(this.balls[i].toDelete === true)
				this.balls.splice(i,1);
		}
	}
}
