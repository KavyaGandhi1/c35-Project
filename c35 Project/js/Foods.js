class Foods{
    constructor(){
    this.foodStock =0;
    this.lastFeed;
this.image = loadImage("Milk.png");
    }
   
    updateFoodStock(FoodStock){
        this.FoodStock = FoodStock;
    }

getTime(lastFeed){
    this.lastFeed = lastFeed;
}
    deductFood(){
        if(this.FoodStock>0){
            this.FoodStock = this.FoodStock-1;
         }

    }
    getFoodStock(){
      return this.FoodStock;  
    }

    display(){
        background(46,139,87);
        var x = 200;
        var y= 400;
        imageMode(CENTER);
//image(this.image,720,720,70,70);


  if(this.FoodStock!=0){
    for(var i=0;i<this.FoodStock;i++){
      if(i%10==0){
        x=200;
        y=y+50;
      }
      image(this.image,x,y,50,50);
      x=x+30;
    }
}
    }
}