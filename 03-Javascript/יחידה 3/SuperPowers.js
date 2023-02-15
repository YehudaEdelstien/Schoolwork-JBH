const storm = {
    superPower: "flying",
    printPower: printSuperPower
}

function printSuperPower() {
    console.log("my superpower is " + this.superPower)
}

storm.printPower();