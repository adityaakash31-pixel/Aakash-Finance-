// ===================================
// AAKASH FINANCE V4
// Base Script
// ===================================

// Total Income
let totalIncome = Number(localStorage.getItem("totalIncome")) || 0;

// Income History
let incomeHistory = JSON.parse(localStorage.getItem("incomeHistory")) || [];

// Page Load
window.onload = function () {

    // Dashboard Total Income
    let dashboard = document.getElementById("dashboardIncome");
    if (dashboard) {
        dashboard.innerText = totalIncome;
    }

    // Income Page Total
    let total = document.getElementById("totalIncome");
    if (total) {
        total.innerText = totalIncome;
    }

};

console.log("Aakash Finance V4 Loaded");
// ===================================
// SAVE INCOME
// ===================================

function saveIncome() {

    let source = document.getElementById("source").value;
    let amount = Number(document.getElementById("amount").value);

    if (source === "") {
        alert("Income Category Select kijiye");
        return;
    }

    if (amount <= 0) {
        alert("Amount Enter kijiye");
        return;
    }

    // Save Data
    let income = {
        source: source,
        amount: amount
    };

    incomeHistory.push(income);

    localStorage.setItem(
        "incomeHistory",
        JSON.stringify(incomeHistory)
    );

    // Update Total
    totalIncome += amount;

    localStorage.setItem(
        "totalIncome",
        totalIncome
    );

    // Update Screen
    let total = document.getElementById("totalIncome");

    if (total) {
        total.innerText = totalIncome;
    }

    let list = document.getElementById("incomeList");

if (list) {

    let li = document.createElement("li");

    li.innerHTML =
item.source + " - ₹" + item.amount +
' <button onclick="editIncome(' + index + ')">✏️ Edit</button> ' +
' <button onclick="deleteIncome(' + index + ')">🗑 Delete</button>';

    list.appendChild(li);

}
    alert("✅ Income Saved Successfully");

    // Clear Form
    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";

}
// Income History
let list = document.getElementById("incomeList");

if (list) {

    list.innerHTML = "";

    incomeHistory.forEach(function(item, index){

        let li = document.createElement("li");

        li.innerHTML =
        item.source + " - ₹" + item.amount;

        list.appendChild(li);

    });

}
// ===================================
// DELETE INCOME
// ===================================

function deleteIncome(index) {

    if (!confirm("Delete this income?")) {
        return;
    }

    totalIncome -= incomeHistory[index].amount;

    incomeHistory.splice(index, 1);

    localStorage.setItem("totalIncome", totalIncome);
    localStorage.setItem(
        "incomeHistory",
        JSON.stringify(incomeHistory)
    );

    location.reload();

}
// ===================================
// EDIT INCOME
// ===================================

function editIncome(index) {

    let newAmount = prompt(
        "Enter New Amount",
        incomeHistory[index].amount
    );

    if (newAmount === null) {
        return;
    }

    newAmount = Number(newAmount);

    if (newAmount <= 0) {
        alert("Valid Amount Enter kijiye");
        return;
    }

    totalIncome =
        totalIncome -
        incomeHistory[index].amount +
        newAmount;

    incomeHistory[index].amount = newAmount;

    localStorage.setItem("totalIncome", totalIncome);
    localStorage.setItem(
        "incomeHistory",
        JSON.stringify(incomeHistory)
    );

    location.reload();

}
