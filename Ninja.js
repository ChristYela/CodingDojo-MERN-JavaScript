class Ninja{
    constructor(name, health=0){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
        return this
    }
    showStats(){
        console.log(`Name is ${this.name}`);
        console.log(`Strength is ${this.strength}`);
        console.log(`Speed is ${this.speed}`);
        console.log(`Health is ${this.health}`);
        return this
    }
    drinkSake(){
        console.log(`${this.name} drank sake`);
        this.health +=10;
        return this
    }
}

const ninja1 = new Ninja("Cristian Yela III");
ninja1.sayName().showStats().drinkSake().showStats();