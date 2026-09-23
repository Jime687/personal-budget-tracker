// Store expenses in an array
let expenses = [];

// Get elements from the HTML
const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const expenseList = document.getElementById("expenseList");
const totalExpenses = document.getElementById("totalExpenses");
const expenseCount = document.getElementById("expenseCount");
const budgetMessage = document.getElementById("budgetMessage");

const categoriesContainer = document.querySelector(".categories");

// Listen for form submission
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get information entered by the user
    const name = expenseName.value;
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Add the expense to the array
    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    // Update the dashboard
    displayExpenses();

    // Clear the form
    expenseForm.reset();
});

// Display expenses on the webpage
function displayExpenses() {
    expenseList.innerHTML = "";

    let total = 0;

    // Loop through all expenses
    for (let expense of expenses) {
        total += expense.amount;

        const listItem = document.createElement("li");

        listItem.textContent =
            `${expense.name} - KSh ${expense.amount} (${expense.category})`;

        expenseList.appendChild(listItem);
    }

    // Update dashboard numbers
    totalExpenses.textContent = total;
    expenseCount.textContent = expenses.length;

    // Conditional statement
    if (total === 0) {
        budgetMessage.textContent = "Add an expense to get started.";
    } else if (total < 5000) {
        budgetMessage.textContent = "Your spending is currently low.";
    } else if (total < 10000) {
        budgetMessage.textContent = "Keep an eye on your spending.";
    } else {
        budgetMessage.textContent = "You have spent a lot. Consider reviewing your expenses.";
    }

    // Generate categories
    const categories = [
        { name: "Food", description: "Monthly spending", amount: "$420.00" },
        { name: "Transport", description: "Monthly spending", amount: "$185.00" },
        { name: "Rent", description: "Monthly spending", amount: "$1,200.00" },
        { name: "Entertainment", description: "Monthly spending", amount: "$150.00" },
        { name: "Savings", description: "Monthly contribution", amount: "$800.00" },
        { name: "Utilities", description: "Monthly spending", amount: "$230.00" }
    ];

    categories.forEach(category => {
        const card = document.createElement("article");

        card.className = "card";
        card.tabIndex = 0;

        card.innerHTML = `
            <div>
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </div>
            <strong>${category.amount}</strong>
        `;

        card.addEventListener("click", () => {
            alert(`${category.name}: ${category.amount}`);
        });

        categoriesContainer.appendChild(card);
    });
}