const readLine = require('readline-sync');


let myMenu = [];
let myCost = [];
console.log("Kinds of sandwich:  Chicken, Beef, Tofu");

myMenu.push(readLine.question('Pick a sandwich: '));
if (myMenu[0]=="Chicken" ){
    myCost.push(5.25)
} if (myMenu[0]=="Beef" ){
    myCost.push(6.25)
} if (myMenu[0]=="Tofu" ) {
    myCost.push(5.75);
}
    let drink_choice = (readLine.question('Want a Drink?: '));
    if (drink_choice == "yes") {
        console.log(`"Drink size:  Small, Medium, Large"`);
        myMenu.push(readLine.question('Pick a size: '));

    if (myMenu[1] == "Small Drink") {
        myCost.push(1.00)
    }
    if (myMenu[1] == "Medium Drink") {
        myCost.push(1.75)
    }
    if (myMenu[1] == "Large Drink") {
        myCost.push(2.25);
    }
}
if (drink_choice == "no") { console.log("k");}

let fry_choice = (readLine.question('Want fries?: ')) ;
if (fry_choice == "yes") {
    console.log(`"fries size:  Small, Medium, Large"`);
    myMenu.push(readLine.question('Pick a size: '));
    if (myMenu[2] == "Small Fries") {
        myCost.push(1.00)
     let fry_choice = (readLine.question('Want fries?: ')) ;
    if
    }
    if (myMenu[2] == "Medium Fries") {
        myCost.push(1.50)
    }
    if (myMenu[2] == "Large Fries") {
        myCost.push(2.00);
    }
}
if (fry_choice == "no") { console.log("k");}
console.log(myMenu);
console.log(myCost);
