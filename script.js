// ---------------- INCOME ----------------

let totalIncome = Number(localStorage.getItem("totalIncome")) || 0;

function saveIncome() {

    let source = document.getElementById("source").value;
    let amount = Number(document.getElementById("amount").value);

    if (source === "" || amount <= 0) {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("incomeList");

    if (list) {
        let item = document.createElement("li");
        item.innerHTML = source + " - ₹" + amount;
        list.appendChild(item);
    }

    totalIncome += amount;

    localStorage.setItem("totalIncome", totalIncome);

    document.getElementById("totalIncome").innerText = totalIncome;

    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";
}


// ---------------- EXPENSE ----------------

let totalExpense = Number(localStorage.getItem("totalExpense")) || 0;

function saveExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || amount <= 0) {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("expenseList");

    if (list) {
        let item = document.createElement("li");
        item.innerHTML = name + " - ₹" + amount;
        list.appendChild(item);
    }

    totalExpense += amount;

    localStorage.setItem("totalExpense", totalExpense);

    document.getElementById("totalExpense").innerText = totalExpense;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}


// ---------------- ROOM EXPENSE ----------------

let totalRoomExpense = Number(localStorage.getItem("totalRoomExpense")) || 0;

function saveRoomExpense() {

    let name = document.getElementById("roomName").value;
    let amount = Number(document.getElementById("roomAmount").value);

    if (name === "" || amount <= 0) {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("roomExpenseList");

    if (list) {
        let item = document.createElement("li");
        item.innerHTML = name + " - ₹" + amount;
        list.appendChild(item);
    }

    totalRoomExpense += amount;

    localStorage.setItem("totalRoomExpense", totalRoomExpense);

    document.getElementById("totalRoomExpense").innerText = totalRoomExpense;

    document.getElementById("roomName").value = "";
    document.getElementById("roomAmount").value = "";
}


// ---------------- DASHBOARD ----------------

window.onload = function () {

    if (document.getElementById("dashboardIncome")) {

        let income = Number(localStorage.getItem("totalIncome")) || 0;
        let expense = Number(localStorage.getItem("totalExpense")) || 0;
        let roomExpense = Number(localStorage.getItem("totalRoomExpense")) || 0;
        let loan = Number(localStorage.getItem("totalLoan")) || 0;

        document.getElementById("dashboardIncome").innerText = income;
        document.getElementById("dashboardExpense").innerText = expense;
        document.getElementById("dashboardRoomExpense").innerText = roomExpense;
        if (document.getElementById("dashboardLoan")) {
    document.getElementById("dashboardLoan").innerText = loan;
        }
        document.getElementById("dashboardBalance").innerText =
            income - expense - roomExpense;
    }

    if (document.getElementById("totalIncome")) {
        document.getElementById("totalIncome").innerText = totalIncome;
    }

    if (document.getElementById("totalExpense")) {
        document.getElementById("totalExpense").innerText = totalExpense;
    }

    if (document.getElementById("totalRoomExpense")) {
        document.getElementById("totalRoomExpense").innerText = totalRoomExpense;
    }

};
// ---------------- LOAN ----------------

let totalLoan = Number(localStorage.getItem("totalLoan")) || 0;

function saveLoan() {

    let person = document.getElementById("loanPerson").value;
    let amount = Number(document.getElementById("loanAmount").value);

    if (person === "" || amount <= 0) {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("loanList");

    let item = document.createElement("li");
    item.innerHTML = person + " - ₹" + amount;

    list.appendChild(item);

    totalLoan += amount;

    localStorage.setItem("totalLoan", totalLoan);

    document.getElementById("totalLoan").innerText = totalLoan;

    document.getElementById("loanPerson").value = "";
    document.getElementById("loanAmount").value = "";
}
