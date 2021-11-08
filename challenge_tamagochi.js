// WEEK 4 PROJECT
// Cyber pet time! 
// User selects the kind of animal they’d like (dog, cat, rabbit) and you have to play with it, feed it, give it drinks etc.
// There should be consequences across the board – if you don’t play, it gets bored, if you do, it’s happy, but gets thirsty, that kind of thing.

class Pet {
    constructor(type, name, age) {
        this._type = type,
        this._name = name,
        this._age = age,
        this._hunger = 0,
        this._thirst = 0,
        this._play = 0
    }

    get condition () {
        return `${this._name} the ${this._type}`
        
    }

    feed () {
        this._hunger++
        this._thirst--
        this._play--
    }

    drink () {
        this._hunger--
        this._thirst++
        this._play--
    }

    game () {
        this._hunger--
        this._thirst--
        this._play++
    }

    birthday () {
        this.age++
    }
}
let sherlock = new Pet("Rabbit", "Sherlock", 0)

console.log(sherlock)
sherlock.feed()
console.log(sherlock)