// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  let arrayOfChars = [];
  for (let i = 0; i < str.length; i++) {
    arrayOfChars.push(str[i].repeat(2));
  }
  return arrayOfChars.join("");
}

console.log(doubleChar("String"));
