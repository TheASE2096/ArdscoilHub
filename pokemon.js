var isItMyBirthday = false

if(isItMyBirthday == true){
    console.log("Welcome! Happy Birthday!");
}
else{
    console.log("Welcome!");
}

var pokemonCorrectStats = [
    ["Pokemon 1", 10, 20, 30],
    ["Pokemon 2", 20, 30, 10],
    ["Pokemon 3", 30, 10, 20],
]

var testPokemon = ["Pokemon", 20, 10, 30];

function checkPokemon(){
    if(testPokemon == pokemonCorrectStats[0]){
        console.log("Your Pokémon is ready to go!")
    }
    else{
        console.log("Sorry, your Pokémon isn't compatible.")
    }
}