// Training JS #7: if..else and ternary operator

// In JavaScript, if..else is the most basic conditional statement,
//  it consists of three parts:condition, statement1, statement2, like this:

// if (condition) statementa
// else           statementb
// It means that if the condition is true, then execute the statementa,
//  otherwise execute the statementb. If the statementa or statementb are more than one line,
//  you need to add { and } at the head and tail of statements in JS,
//  to keep the same indentation on Python and to put an end in Ruby where it indeed ends.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

console.log(saleHotdogs(1));
console.log(saleHotdogs(5));
console.log(saleHotdogs(11));
