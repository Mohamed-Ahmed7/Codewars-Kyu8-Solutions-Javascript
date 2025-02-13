// Tip Calculator

// Complete the function, which calculates how much you need to tip based
//  on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%

function calculateTip(amount, rating) {
  let newRate = rating.toLowerCase();
  if (newRate === "terrible") {
    return Math.ceil(amount * 0);
  } else if (newRate === "poor") {
    return Math.ceil(amount * 0.05);
  } else if (newRate === "good") {
    return Math.ceil(amount * 0.1);
  } else if (newRate === "great") {
    return Math.ceil(amount * 0.15);
  } else if (newRate === "excellent") {
    return Math.ceil(amount * 0.2);
  } else {
    return `Rating not recognised`;
  }
}
console.log(calculateTip(50,"terrible"));









