//OPDRACHT 1

let array = [4, 5, 8, 12, -1];
console.log(array);

array[3] = 21;
console.log(array);

array[0] = 751;

let i = 0;
while(i <= array.length) {
    document.querySelector(".exercise-1").textContent= array[i];
    i++;
}