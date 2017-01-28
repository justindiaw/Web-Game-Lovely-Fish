var momObj = function ()
{
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();

	this.momTailTimer = 0;
	this.momTailCount = 0;

	this.momBodyCount = 0;


}
momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5 ;
	this.angle=0;
	this.bigEye.src = "src/bigEye0.png";

	
}
momObj.prototype.draw = function()
{
	//mom follow mouse x,y
	this.x = lerpDistance(mx,this.x, 0.9);
	this.y = lerpDistance(my, this.y, 0.9);

	// delta angle
	var deltaX =  mx - this.x;
	var deltaY =  -my + this.y;
	var alpha =  Math.atan2(deltaX,deltaY );

	//totate
	this.angle = lerpAngle(alpha , this.angle , 0.8);


	//tail
	this.momTailTimer += deltaTime;
	if (this.momTailTimer > 30)
	{
		this.momTailCount = (this.momTailCount +1) %8;
		this.momTailTimer %=30;
	}

	//translate x,y coordinate
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle + 90);

	var momTailCount = this.momTailCount;
	ctx1.drawImage(momTail[momTailCount], -momTail[momTailCount].width * 0.5 +30,-momTail[momTailCount].height * 0.5);
	var momBodyCount = this.momBodyCount;
	if (data.double ==1)
	{
		ctx1.drawImage(momBodyOra[momBodyCount], -momBodyOra[momBodyCount].width * 0.5,-momBodyOra[momBodyCount].height * 0.5);
	}else
	{
		ctx1.drawImage(momBodyBlue[momBodyCount], -momBodyBlue[momBodyCount].width * 0.5,-momBodyBlue[momBodyCount].height * 0.5);
	}

	ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5,-this.bigEye.height * 0.5);

	
	ctx1.restore();
}