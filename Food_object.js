var myFood = function myFood() {
    
};

//adds a juice method for food constructor 
Food.prototype.juice = function juice() {
    console.log('Juicing..');
}

var Fruit = function(name) {
    this.name = name ;
    this.sayname = function() {
        console.log('I\'m an ' + this.name);
    }
    Food.apply(this, arguments);
}

Fruit.prototype  = new Food(); 
Fruit.prototype = Object.create(Food.prototype); 

var apple = function apple(variety, hasSkin, name) {
    this.name = name ; 
    this.variety = variety ;
    this.hasSkin = hasSkin ; 
    this.removeSkin = function() {
        if (hasSkin == true) { 
        console.log('Skinning ' + this.variety + " " + this.name) ; 
            hasSkin = false; 
    }
        else {
            console.log('Okay to juice!');
        }
     
    }

    this.juiceIngredient = function(){
        if (hasSkin == false){
        console.log('Juicing ' + this.variety + " " + this.name);
        }
        else {
            console.log(this.name + 'has skin'); 
        }
   }
    Fruit.call(this, name);
}

apple.prototype = new Fruit(); 

 //Vegetable object.

var Vegetable = function Vegetable(name) {
    this.name = name ; 
};

Vegetable.prototype = Object.create(Food.prototype);
Vegetable.prototype.wash = function wash(){
    console.log('Washing vegetable..');
}


var food1 = new apple('McIntosh', true, 'apple');
var food2 = new apple('Jonagold', true, 'apple'); 
var food3 = new Vegetable('Carrot'); 


food1.sayname()
food2.sayname()
food1.removeSkin();
food2.removeSkin(); 
food1.juiceIngredient();
food2.juiceIngredient();
food3.wash(); 
food3.juice();