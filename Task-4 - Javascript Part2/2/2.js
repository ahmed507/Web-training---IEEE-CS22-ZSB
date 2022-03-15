let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLocaleLowerCase().includes(letterZ)); // True
console.log(word.toLocaleLowerCase().startsWith(letterE)); // True
console.log(word.toLocaleLowerCase().endsWith(letterO.toLocaleLowerCase())); // True