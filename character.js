const readLine = require('readline-sync');

let diceRolled = [];
let character1 = {
    //empty to start
}

createChar(diceRolled, diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6)
}

function rollDice(amount, list){
    for(let i=0; i<amount; i++){
        let roll= rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll)
    }
}

function sum(list){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum += list[i];
    }
    return sum;
}

function rollStat(list) {
    list = [];
    rollDice(4, list);
    return sum(list);
}

function createChar(character, list){
    character.name = readLine.question("Enter Character Name: ");
    character.class = readLine.question("Enter Class: ");
    character.job = readLine.question("Enter Job: ");
    character.background = readLine.question("Enter Background: ");
    character.skill = readLine.question("Enter Special Skill: ");
    character.race = readLine.question("Enter Race: ");
    console.log('Rolling STR')
    character.strength= rollStat(list);
    console.log('Rolling DEX')
    character.dexterity= rollStat(list);
    console.log('Rolling CON')
    character.constitution= rollStat(list);
    console.log('Rolling INT')
    character.intelligence= rollStat(list);
    console.log('Rolling WIS')
    character.wisdom= rollStat(list);
    console.log('Rolling CHA')
    character.charisma= rollStat(list);
    console.log(character)
}