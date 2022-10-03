// Play out the following scenario
// turn	action
// 1	Make an instance of "Red Belt Ninja"
// 1	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
// 2	Make an instance "Black Belt Ninja"
// 2	Make an instance of "Unhandled Promise Rejection" and play iton "Red Belt Ninja"
// 3	Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
// 3	"Red Belt Ninja" uses the attack method on "Black Belt Ninja"

class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        if (target instanceof Unit) {
            target.resilience -= this.power;
        }
    }

    showStats() {
        console.log(`name: ${this.name}, cost: ${this.cost}, resilience: ${this.resilience}, power: ${this.power}`);
    }
}

class Effect extends Card {
    constructor(name, cost, stat, text, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.text = text;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "resilience") {
                target.resilience += this.magnitude
            }
            if (this.stat === "power") {
                target.power += this.magnitude
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);

const hardAlgorithm = new Effect('Hard Algorithm', 2, 'resilience', "increase target's resilience by 3", 3);
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, 'resilience', "reduce target's resilience by 2", -2);
const pairProgramming = new Effect('Pair Programming', 3, 'power', "increase target's power by 2", 2);

console.log("------------Before----------")
redBeltNinja.showStats();
blackBeltNinja.showStats();
console.log("----------------------------")

hardAlgorithm.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);

console.log("------------After----------")
redBeltNinja.showStats();
blackBeltNinja.showStats();
console.log("---------------------------") 