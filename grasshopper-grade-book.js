// Grasshopper - Grade book

// Description:
// Grade book
// Complete the function so that it finds the average of the three scores passed
//  to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values
//  or values greater than 100.

function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  switch (true) {
    case average >= 0 && average < 60:
      return "F";
    case average >= 60 && average < 70:
      return "D";
    case average >= 70 && average < 80:
      return "C";
    case average >= 80 && average < 90:
      return "B";
    case average >= 90 && average <= 100:
      return "A";
  }
}

console.log(getGrade(70, 70, 100)); //B
