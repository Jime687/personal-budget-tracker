let budget = Number(prompt("Enter your monthly budget:"));
let expenses = Number(prompt("Enter your total expenses:"));

function calculateBalance(budget, expenses) {
    return budget - expenses;
}

let remainingBalance = calculateBalance(budget, expenses);

console.log("===== SpendWise Budget Report =====");
console.log("Budget: $" + budget);
console.log("Expenses: $" + expenses);
console.log("Remaining Balance: $" + remainingBalance);
console.log("===================================");