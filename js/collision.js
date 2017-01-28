//distance betwen mom and food
function  momFood()
{
	if (!data.gameOver)
	{
		for (var i=0; i < food.num ;i ++ )
		{
			if (food.alive[i])
			{
				var l = calLength2(food.x[i],food.y[i],mom.x,mom.y);
				if (l < 900)
				{
					//food eaten
					food.dead(i);
					data.foodNum++;
					mom.momBodyCount++;
					if (mom.momBodyCount >7)
					{
						mom.momBodyCount = 7;
					}
					if(food.foodType[i] == "blue")//blue
					{
						data.double = 0.5;
					
					}
				}

			}
		}
	}

}

//distance between mom and baby
function momBaby()
{

	if (data.foodNum >0 && !data.gameOver)
	{
		var l = calLength2(mom.x,mom.y,baby.x,baby.y);
		if (l < 900)
		{
			//baby recover
			baby.babyBodyCount = 0;

		
			mom.momBodyCount = 0;
			//score update
			data.addScore();
		}
	}


}


