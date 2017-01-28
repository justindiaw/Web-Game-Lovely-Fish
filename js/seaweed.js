var seaObj = function()
{
	// start point ,control point ,end point(sin )
	this.rootx = [];
	this.headx = [];
	this.heady = []; 
	this.alpha = 0;
	this.amp = [] ; // distance of swing 
	

}

seaObj.prototype.num = 50;
seaObj.prototype.init = function()
{
	
	for(var i = 0; i<this.num; i++)
	{
		this.rootx[i] = i*17 + Math.random()*20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight- 200 + Math.random() *50;
		this.amp[i]= Math.random() *50 +50;
		
	}

}
seaObj.prototype.draw = function()
{
	this.alpha +=deltaTime * 0.0005;// speed of swing
	var l =Math.sin(this.alpha);
	ctx2.save();
	ctx2.globalAlpha = 0.8;
	ctx2.lineWidth = 15;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "green";
	for (var i = 0;i <this.num ;i++ )
	{
		//
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-80,this.headx[i] + l *this.amp[i]  ,this.heady[i]);
		ctx2.stroke();
		

	}

	ctx2.restore();
}