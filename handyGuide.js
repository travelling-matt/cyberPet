let selectedOption = "feed" 
// selectedOption is absolutely fine to be a static value 
// for the purpose of creating the logic and the cyberPet functionality. 
// We will make this dynamic later on this week

const gameLoop = () => {
    // At the start of this loop is where you want to 'deteriorate' the values
    // e.g. hunger + 10 

    if (selectedOption === "play") {
        // change the values accordingly
    } 
    // Continue in this ^ vein for the rest of the game

    // At the end of this 'loop'
    gameLoop()
    // This will run the function again
}


const init = () => {
    // do some stuff like get initial input
    // e.g. if(selectedPet === "cat")

    // now do:
    gameLoop()
}