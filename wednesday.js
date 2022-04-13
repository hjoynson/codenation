//--------------------------------------------------------------
// Activity 1

let songs = [
    "Michael Jackson - Beat It",
    "George Michael - Freedom",
    "Inner City - Good Life"
];

console.log(songs);

//--------------------------------------------------------------
// Activity 2

let songs1 = [
    "Michael Jackson - Beat It",
    "George Michael - Freedom",
    "Inner City - Good Life",
    "Gang Starr - Full Clip",
    "Jennifer Paige - Crush",

];

songs1.pop();
console.log(songs1);

//--------------------------------------------------------------
// Activity 3

let favSongs = [
    "Michael Jackson - Beat It",
    "George Michael - Freedom",
    "Inner City - Good Life",
    "Gang Starr - Full Clip",
    "Jennifer Paige - Crush",

];

favSongs.push();
console.log(favSongs);

//--------------------------------------------------------------
// Activity 4

let favDrinks = [

    "Pina Colada",
    "Lemonade",
    "Dr Pepper",
];

for(let i = 0; i < favDrinks.length; i++){



console.log(favDrinks)
}

;

//--------------------------------------------------------------
// Activity 5

let favDrinks1= ["Coke","Fanta","Tonic","Red Bull"
];

for(let i =0; i <favDrinks.length; i++){
    console.log(favDrinks[i])
}

//--------------------------------------------------------------
// Activity 6

let multiplesTwo =[];

for (let i = 0; i < 20; i++){
if (i % 2 == 0)
{multiplesTwo.push(i);
    }
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

//--------------------------------------------------------------
// Activity 7

let age = 15;

while (age < 18){

    console.log("You're a child");
    age++;

}
console.log("You're an adult!")


//--------------------------------------------------------------
// Activity 8

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club"

while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)]

}

console.log(currentCard);
