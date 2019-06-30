class Block{
	
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.dx = 0;
		this.dy = 0;
		this.width = 120;
		this.length = 24;
		this.dirx = 0;
	}

	update(){
		this.dx = this.dirx * 5;
		this.x += this.dx;
		this.y += this.dy;		

		if(this.y >= height + this.r){
			this.dy = -this.dy;
			this.y = height;
		}

		if(this.x + this.r <= 0){
			this.dx = -this.dx;
			this.x = this.r;
			this.toDelete = true;
		}else if(this.x >= width + this.r){
			this.dx = - this.dx;
			this.x = width - this.r;
			this.toDelete = true;
		}
	}

	show(){
		fill(0);
		stroke(0);
		rect(this.x, this.y, this.width, this.length);
	}

	move(direction){
		this.dirx = - direction;
	}
}