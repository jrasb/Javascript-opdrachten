// OPDRACHT 1

let numbers = [4, 5, 8, 12, -1];
console.log(numbers);

numbers[3] = 21;
console.log(numbers);

numbers[0] = 751;

let i = 0;

/* Ik zou dit zelf met een for loop doen, maar het is wat het is */
while(i < numbers.length) {
    document.querySelector("#ex1").innerHTML += numbers[i] + "<br>";
    console.log(numbers[i]);
    i++;
}

// OPDRACHT 2

let colors = ["rood", "groen", "geel", "paars", "roze"];
console.log(colors);

colors[1] = "paars"
console.log(colors);

for (let j = 0; j < colors.length; j++) {
    document.querySelector("#ex2").innerHTML += colors[j] + "<br>";
    console.log(colors[j]);
} 

// OPDRACHT 3

let math = [4+1, 5*9, 12/4, 4**5, 16%3];
console.log(math);

math.push(1/(Math.sqrt(math[1])))

for (let k = 0; k < math.length; k++) {
    document.querySelector("#ex3").innerHTML += math[k] + "<br>";
    console.log(math[k]);
}