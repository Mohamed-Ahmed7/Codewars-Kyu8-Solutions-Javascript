// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  return `${name} ${
    name.toLowerCase().startsWith("r") ? " plays banjo" : " does not play banjo"
  } banjo`;
}

console.log(areYouPlayingBanjo("Rngo"));
