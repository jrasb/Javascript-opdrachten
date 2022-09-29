console.log("main.js loaded");

// With Array Manipulation

let blockArray = []

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