var foodObj = function()
{
	this.alive=[];// boolean
	this.x = [];
	this.y = [];
	this.l = [];// picture length
	this.spd = [];//food generate speed
	this.foodtype = []; // whether blue or orange food
	this.orange = new Image();
	this.blue = new Image();
}

foodObj.prototype.num = 30;
foodObj.prototype.init = function()
{
	for(var i = 0; i< this.num; i ++)
	{ 
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.spd[i] = Math.random() *0.02+0.003;//[0.003,0.023)  // the speed of generate food 
		this.foodType=[];
	}
	this.orange.src="src/orange.png";
	this.blue.src="src/blue.png";
}

foodObj.prototype.draw = function()
{
	for(var i = 0; i< this.num;i++)
	{
		if (this.alive[i])
		{
			if (this.foodType[i] == "orange")
			{
				var pic = this.orange;
			}
			else
			{
				var pic = this.blue;
			}
			if(this.l[i] <= 15)    // food become bigger 
			{
				this.l[i] += this.spd[i] * deltaTime;
			}
			else // food raise up 
			{
				this.y[i] -= this.spd[i] * 7 * deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if (this.y[i] < 10)
			{
				this.alive[i] = false;
			}
		}
	}
}
// food x,y point in random seaweed
foodObj.prototype.born = function(i)
{
	var id = Math.floor(Math.random() * seaweed.num);    // random seaweed id ,for generate food 
	this.x[i] = seaweed.headx[id];
	this.y[i] = seaweed.heady[id];
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if (ran < 0.2)    //  probability of blue food 
	{
		this.foodType[i] = "blue";
	}
	else
	{
		this.foodType[i] = "orange";
	}
	
}

foodObj.prototype.dead = function(i)
{
	this.alive[i] = false;
}
function foodMonitor()
{
	var num = 0;
	for (var i = 0;i <food.num ;i ++ ) // record food alive number
	{
		if(food.alive[i]) num++;
	}
	if (num < 15) // generate new food 
	{
		sendFood();
		return;
	}
}
function sendFood()
{
	for (var i = 0 ;i < food.num ;i++ ) // judge food status,if the food is not alive ,generate a new food  
	{
		if (!food.alive[i])
		{
			food.born(i);
			return;
		}

	}

}