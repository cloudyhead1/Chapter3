const readLine = require('readline-sync');


let myMenu = [];
console.log("Kinds of sandwich:  Chicken, Beef, Tofu");
myMenu.push(readLine.question('Pick a sandwich: '));

let drink_choice = (readLine.question('Want a Drink?: ')) ;
if (drink_choice == "Yes"){ console.log(`"Drink size:  Small, Medium, Large"`);
myMenu.push(readLine.question('Pick a size: '));}
if (drink_choice == "yes"){ console.log(`"Drink size:  Small, Medium, Large"`);
    myMenu.push(readLine.question('Pick a size: '));}
else {
    console.log("k");
}

console.log(myMenu);

