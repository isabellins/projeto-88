
var canvas = new fabric.Canvas('myCanvas');

ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;


block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj= Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj)
	})
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png",  function(Img){
		hole_obj= Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj)
	})
}



window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
	document.getElementById("myCanvas").style.borderColor="red";
	
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_Y>=500){
			ball_Y - block_image_height
			canvas.remove(ball_Obj);
			ball_Update()
		}
	}

	function down()
	{
		if(ball_y <=450){
			ball_y + block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_X >5)
		{
			ball_X - block_image_width;
			canvas.remove(ball_Obj);
			new_image()
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			ball_X + block_image_width;
			canvas.remove(ball_Obj);
			new_image()
		}
	}
	
}
function down(){
    if(playerY<=500){
        playerY = playerY + heightBlocoImg;
        canvas.remove(playerObj);
        playerUpdate()
    }
}
function up(){
    if(playerY>=0){
        playerY = playerY - heightBlocoImg;
        canvas.remove(playerObj);
        playerUpdate()
    }
}
function right(){
    if(playerX<=850){
        playerX = playerX + widthBlocoImg;
        canvas.remove(playerObj);
        playerUpdate()
    }
}
function left(){
    if(playerX>=0){
        playerX = playerX - widthBlocoImg;
        canvas.remove(playerObj);
        playerUpdate()
    }
}


