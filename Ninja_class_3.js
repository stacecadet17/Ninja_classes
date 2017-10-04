class Ninja{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  sayName(){
    console.log(`Ninja's name is ${this.name}`)
  }

  showStats(){
    console.log(`Name:${this.name}, Health:${this.health}, Speed:${this.speed}, Strength:${this.strength}`);
  }

  drinkSake(){
    this.health += 10;
    console.log(`${this.name} drank sake and health has increased to ${this.health}!`);
    return this;
  }
}

class Sensei extends Ninja{
  contructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
  }

  speakWisdom(){
    super.drinkSake();
    console.log("then said: 'Think twice, before you speak once'");
  }
}

let stacey = new Ninja('stacey');
stacey.sayName()
stacey.showStats()
stacey.drinkSake()
