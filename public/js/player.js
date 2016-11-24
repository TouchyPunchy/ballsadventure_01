function Player(x,y){

	this.GRAVITY = 2;

	this.x = x;
	this.y = y;
	this.dx = 0;
	this.dy = 0;
	this.dirx = 0;
	this.width = 12;
	this.length = 36;
	this.friction = 0.8;
	this.isJumping = false;
	this.isFacingLeft = false;

	console.log("new Player("+this.x+","+this.y+","+this.dx+""+this.dy+")");

	this.update = function(){

		this.dx += this.dirx * 3;//* 5;
		this.dy += this.GRAVITY;

		this.x += this.dx;
		this.y += this.dy;

		if(this.y + this.length >= height){
			//this.dy = -this.dy *0.5; // SMALL REBOUND
			this.dy = 0;// NO REBOUND
			this.y = height - this.length;
			this.isJumping = false;
		}

		if(this.x <= 0){
			this.dx = - this.dx;
			this.x = 0;
			this.isJumping = false;
		}else if(this.x + this.width >= width){
			this.dx = - this.dx;
			this.x = width - this.width;
			this.isJumping = false;
		}

		this.dx = this.dx * this.friction;

	}

	this.show = function(){
		fill(255);
		rect(this.x, this.y, this.width, this.length);
	}

	this.move = function(direction){
		this.dirx = direction;
		if(this.dirx < 0)
			this.isFacingLeft = true;
		else if(this.dirx > 0)
			this.isFacingLeft = false;
		/*this.dx = direction * 7;*/
	}

	this.jump = function (){
		if(this.isJumping === false){
			this.dy = -32;
			this.isJumping = true;
		}
	}
}