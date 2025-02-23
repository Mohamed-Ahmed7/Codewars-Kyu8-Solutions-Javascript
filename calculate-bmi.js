// Calculate BMI

// Description:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const BMI = weight / height ** 2;
  switch (true) {
    case BMI <= 18.5:
      return "Underweight";
    case BMI <= 25:
      return "Normal";
    case BMI <= 30:
      return "Overweight";
    case BMI > 30:
      return "Obese";
  }
}

console.log(bmi(50, 1.8)); //"Underweight", "For weight = 50 and height = 1.80"
console.log(bmi(80, 1.8)); //"Normal", "For weight = 80 and height = 1.80";
console.log(bmi(90, 1.8)); //"Overweight", "For weight = 90 and height = 1.80";
