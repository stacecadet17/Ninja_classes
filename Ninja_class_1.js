function Ninja(name){
  this.name = name;
  this.health = 100;
  var speed = 5;
  var strength = 5;

  this.sayName = function(){
    console.log(this.name);
    return this;
  }

  this.showStats = function(){
    console.log(strength + speed + this.health);
    return this;
  }

  this.drinkSake = function(){
    this.health += 10;
    return this;
  }
}

var stacey = new Ninja('stacey');
stacey.sayName().drinkSake().drinkSake().drinkSake().drinkSake().showStats()
