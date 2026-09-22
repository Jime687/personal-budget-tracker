# SpendWise Dashboard

## Project Description

SpendWise is a budgeting dashboard that helps users work with basic financial information. This version uses JavaScript to collect budget and expense information, perform calculations, and display the results in the browser console.

## JavaScript Concepts Implemented

### Variables

The project uses JavaScript variables to store important budgeting information:

* `budget` stores the user's monthly budget.
* `expenses` stores the user's total expenses.
* `remainingBalance` stores the calculated amount remaining.

### User Input

The `prompt()` function is used to collect information from the user.

The user enters:

1. Their monthly budget.
2. Their total expenses.

`Number()` converts the entered values from text into numbers so that calculations can be performed.

### Calculations

The application calculates the remaining balance by subtracting expenses from the budget.

For example:

```text
Budget - Expenses = Remaining Balance
```

### Functions

The project uses a reusable function called `calculateBalance()`.

The function receives the budget and expenses as parameters and returns the remaining balance. Using a function keeps the calculation organized and makes the code reusable.

### Console Output

The calculated results are displayed in the browser console using `console.log()`.

The output includes:

* Budget
* Expenses
* Remaining Balance

## Project Files

### `index.html`

Contains the structure of the SpendWise dashboard and links the JavaScript file.

### `style.css`

Contains the styling, layout, responsive design, CSS Grid, and Flexbox used by the dashboard.

### `script.js`

Contains the JavaScript variables, user input, calculations, reusable function, and console output.

### `README.md`

Explains the project and the JavaScript concepts implemented.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox

## Project Status

The SpendWise project now has a JavaScript foundation that can collect budgeting information, calculate the remaining balance, and display clearly labeled results in the browser console.
