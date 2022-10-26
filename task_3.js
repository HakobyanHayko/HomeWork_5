// Խնդիրը խաթն էր մի քիչ ։ Բաներ կար բաց եմ թողել ։
class Jungle {
  constructor(...animals) {
    this.tigers = [] 
    this.monkeys = []
    this.snakes = []
    arguments.forEach(item => {
        if(item.constructor = Tiger ) this.tigers.push(item)
        if(item.constructor = Monkey ) this.monkeys.push(item)
        if(item.constructor = Snake ) this.snakes.push(item)
    })
  }
  soundOff(){
    for(let key in this){
        key.forEach(item => {
            item.makeSound()
            console.log(`I have ${this.energy} energy`)
        })
    }
  }
}
class Animal {
  constructor() {
    this.energy = 10;
  }
  makeSound() {
    if (this.energy >= 3) {
      this.energy -= 3;
    }
  }
  eatFood() {
    this.energy += 5;
  }
  sleep() {
    this.energy += 10;
  }
}
class Food {
  constructor(name) {
    this.name = name ;
  }
}
class Tiger extends Animal {
  sleep() {
    this.energy += 5;
  }
}
class Monkey extends Animal {
  makeSound() {
    if (this.energy >= 4) {
      this.energy -= 4;
    }
  }
  eatFood() {
    this.energy += 2;
  }
  play() {
    if (this.energy >= 8) {
      this.energy -= 8;
      console.log("Oooo Oooo");
    }
    console.log("I am too tired");
  }
}
class Snake extends Animal {

}
class Fish extends Food {
}
class Grain extends Food {
}
class Meat extends Food {
}
 let x = new Food()
 console.log(x.constructor === Food)
