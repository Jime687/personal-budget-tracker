# Personal Budget Tracker

## Project Description

Personal Budget Tracker is a simple web application that helps users record and manage their daily expenses. Users can enter an expense name, amount, and category. The application automatically displays the expenses and updates the total amount and number of expenses.

## Improvements Made This Week

This week, I made my Personal Budget Tracker interactive using JavaScript. I added the ability to:

* Add multiple expenses.
* Store expenses in an array.
* Use loops to process expense records.
* Calculate the total expenses.
* Update the dashboard automatically.
* Display expenses directly on the webpage.
* Respond to user form submissions.
* Provide feedback based on spending levels.

## How Conditionals Are Used

Conditional statements are used to evaluate the total amount spent. The application displays different messages depending on the user's spending.

For example, if the total is below KSh 5,000, the application displays a message saying that spending is currently low. If spending reaches higher amounts, the application provides different feedback.

## How Arrays Are Used

An array is used to store multiple expense records:

```javascript
let expenses = [];
```

Whenever the user adds an expense, the expense is added to the array. This allows the application to manage multiple records instead of storing each expense in a separate variable.

## How Loops Are Used

A `for...of` loop is used to go through all the expenses stored in the array.

```javascript
for (let expense of expenses) {
    // Process each expense
}
```

The loop helps display every expense and calculate the total amount.

## How the DOM Is Updated

DOM manipulation is used to update information directly on the webpage.

The application uses methods such as:

```javascript
document.getElementById()
```

and properties such as:

```javascript
textContent
```

These are used to update the expense list, total expenses, expense count, and budget message.

## How User Interactions Are Handled

The application uses an event listener to respond when the user submits the expense form.

```javascript
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

This allows the application to receive the user's input, store the expense, and update the webpage without refreshing the page.

## Challenges Encountered

One challenge was understanding how arrays, loops, DOM manipulation, and event listeners work together. I resolved this by breaking the application into smaller parts and testing each feature step by step.

Another challenge was making sure that the values entered by the user were treated as numbers when calculating the total. I used `Number()` to convert the expense amount into a number.

## Conclusion

The Personal Budget Tracker now demonstrates JavaScript decision making, arrays, loops, DOM manipulation, and event handling. These features make the application interactive and allow the webpage to respond dynamically to user actions.
