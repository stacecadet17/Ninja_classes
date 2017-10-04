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

  this.punch = function(ninja){
    if(ninja instanceof Ninja){
      ninja.health -= 5;
      console.log(ninja.name+ "was punched by" +this.name+ "and lost 5 hp! remaining hp is" +ninja.health);
      return ninja;
    }
    else{
      console.log(ninja+ "not an instance of Ninja");
    }
  }

  this.kick = function(ninja){
    if(ninja instanceof Ninja){
      ninja.health -= (strength * 15);
      console.log(ninja.name+ "was kicked by" +this.name+ "and lost" +(strength * 15)+ "hp! remaining hp is" +ninja.health);
      return ninja;
    }
    else{
      console.log(ninja+ "not an instance of Ninja");
    }
  }

}

var stacey = new Ninja('Stacey');
var billy = new Ninja('Billy');

stacey.kick(billy).showStats();
billy.punch(stacey).showStats();
