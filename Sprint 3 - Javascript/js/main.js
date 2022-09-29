console.log("main.js loaded");

console.log("opdracht 1");

const getalPrompt = prompt("voer getal tussen 1 en 15 in");
const getalInt = parseInt(getalPrompt, 10);

for (let i = 0; i <= getalInt; i++) {
    console.log(i);
}

console.log("opdarcht 2");

for (feet = 0; feet <= 10; feet++) {
    console.log(feet + " foot is " + (feet * 30.49) + " cm.")
}

console.log("opdracht 3");

// With Array Manipulation

let blockArray = [];

for (let i = 1; i < 7; i++) {
    blockArray.push(i);
    console.log(blockArray);
}

for (let i = 6; i > 0; i--) {
    blockArray.splice(i, 1);
    console.log(blockArray);
}

// With String Manipulation

let blockString = "";

for (let i = 1; i < 7; i++) {
    console.log(blockString += i);
}

for (let i = 6; i > 0; i--) {
    console.log(blockString.slice(0, i));
}
