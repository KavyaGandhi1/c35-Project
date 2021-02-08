//Create variables here
var dogImg,HappyDogImg;
var dog,HappyDog
var database;
var Food;
var FoodS,FoodStock;

var feed,addFood;
var FoodObj;
var FeedTime;
var lastFeed;

function preload()
{
  //load images here
  dogImg = loadImage("dogImg1.png");
  HappyDogImg = loadImage("dogImg.png");

  
}


function setup() {
	createCanvas(700,700);
  FoodObj = new Foods();

  database = firebase.database();
  FoodStock = database.ref('Food');
  FoodStock.on("value",readStock);



  dog = createSprite(480,350,20,20);
dog.addImage(dogImg);
dog.scale = 0.2;


  
  FeedTime = database.ref('FeedTime');
  FeedTime.on("value",function(data){
    lastFeed = data.val();

  
  })
  

}


function draw() {  
background(rgb(46, 139, 87));
 

 feed = createButton("Feed The Dog");
feed.position(600,200);
feed.mousePressed(feedDog);


  addFood = createButton("Add Food");
addFood.position(750,200);
addFood.mousePressed(AddFood);





FoodObj.display();

if(lastFeed>=12){
  text("Last Feed : " + lastFeed%12 + "PM",400,100);
}
else if(lastFeed == 0){
  text("Last Feed :"+ "12AM",400,100);
}
else{
  text("Last Feed :" + lastFeed,400,100);
}

drawSprites();
}


function readStock(data) {
  Food = data.val();
  FoodObj.updateFoodStock(Food);
}

function AddFood(){
  Food++;
database.ref('/').update({
Food: Food
})
}

function feedDog(){
  dog.addImage(HappyDogImg);
  
  FoodObj.updateFoodStock(FoodObj.getFoodStock()-1);

  database.ref('/').update({
    Food: FoodObj.getFoodStock(),
  FeedTime: hour()
  })
    }
  
   





 







