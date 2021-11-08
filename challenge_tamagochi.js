// WEEK 4 PROJECT
// Cyber pet time! 
// User selects the kind of animal they’d like (dog, cat, rabbit) and you have to play with it, feed it, give it drinks etc.
// There should be consequences across the board – if you don’t play, it gets bored, if you do, it’s happy, but gets thirsty, that kind of thing.

class Pet {
    constructor(type, name) {
        this._type = type,
        this._name = name,
        this._age = 0,
        this._hunger = 0,
        this._thirst = 0,
        this._play = 0
    }

    feed () {
        this._hunger++
        this._thirst--
        this._play--
        this._age++
    }

    drink () {
        this._hunger--
        this._thirst++
        this._play--
        this._age++
    }

    game () {
        this._hunger--
        this._thirst--
        this._play++
        this._age++
    }

    birthday () {
        this._age++
    }
}

let sherlock = new Pet("rabbit", "Sherlock")

//console.log(sherlock)
sherlock.feed()
sherlock.drink()
sherlock.game()
//console.log(sherlock)
sherlock.feed()
sherlock.feed()
//console.log(sherlock)
sherlock.feed()
//sherlock.feed()
//console.log(sherlock)


// if (sherlock._hunger === -5 || sherlock._thirst === -5 || sherlock._game === -5 || sherlock._age === 7) {
//     console.log(`${sherlock._name} the ${sherlock._type} died`);
// }

if (sherlock._hunger == -5) {
    console.log(`${sherlock._name} the ${sherlock._type} died of hunger`);
}
else if (sherlock._thirst == -5) {
    console.log(`${sherlock._name} the ${sherlock._type} died of thirst`);
}
else if (sherlock._play == -5) {
    console.log(`${sherlock._name} the ${sherlock._type} died of boredom`);
}
else if (sherlock._age == -10) {
    console.log(`${sherlock._name} the ${sherlock._type} died of old age`);
}
else if (sherlock._hunger == -1 || sherlock._hunger == -2) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm hungry"`);
}
else if (sherlock._hunger == -3 || sherlock._hunger == -4) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm really hungry"`);
}
else if (sherlock._thirst == -1 || sherlock._thirst == -2) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm thirsty"`);
}
else if (sherlock._thirst == -3 || sherlock._thirst == -4) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm really thirsty"`);
}
else if (sherlock._play == -1 || sherlock._play == -2) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm bored"`);
}
else if (sherlock._play == -3 || sherlock._play == -4) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm really bored"`);
}
else if (sherlock._hunger == 1 || sherlock._hunger == 2) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm not hungry"`);
}
else if (sherlock._hunger == 3 || sherlock._hunger == 4) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm really not hungry"`);
}
else if (sherlock._thirst == 1 || sherlock._thirst == 2) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm not thirsty"`);
}
else if (sherlock._thirst == 3 || sherlock._thirst == 4) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm really not thirsty"`);
}
else if (sherlock._play == 1 || sherlock._play == 2) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm tired"`);
}
else if (sherlock._play == 3 || sherlock._play == 4) {
    console.log(`${sherlock._name} the ${sherlock._type} says "I'm really tired"`);
}
else if (sherlock._hunger == 5) {
    console.log(`${sherlock._name} the ${sherlock._type} died from over eating`);
}
else if (sherlock._thirst == 5) {
    console.log(`${sherlock._name} the ${sherlock._type} died from over drinking`);
}
else if (sherlock._play == 5) {
    console.log(`${sherlock._name} the ${sherlock._type} died of exhaustion, you played the por thing to death!`);
}
else {
    console.log(`What would you like to do next?`);
}




// let sherlock = new Pet("Rabbit", "Sherlock", 0)
// let selectedOption = "drink"

// const gameLoop = () => {
//     if (selectedOption === "feed") {
//         this._hunger++
//         this._thirst--
//         this._play--
//         this._age++
//     }
//     else if (selectedOption === "drink") {
//         this._hunger--
//         this._thirst++
//         this._play--
//         this._age++
//     }
//     else if (selectedOption === "game") {
//         this._hunger--
//         this._thirst--
//         this._play++
//         this._age++
//     }
//     else gameLoop () 
//         this._hunger--
//         this._thirst--
//         this._play--
//         this._age++
    
// }
// console.log(sherlock.gameLoop)