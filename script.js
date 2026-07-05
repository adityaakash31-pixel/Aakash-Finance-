let totalIncome = 0;

function startApp() {
    window.location.href = "dashboard.html";
}

function saveIncome() {
    let source = document.getElementById("source").value;
    let amount = document.getElementById("amount").value;

    if (source === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("incomeList");

    let item = document.createElement("li");
    item.innerHTML = source + " - ₹" + amount;

    list.appendChild(item);
    localStorage.setItem("totalIncome", totalIncome + Number(amount));

    totalIncome += Number(amount);
    document.getElementById("totalIncome").innerText = totalIncome;

    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";
}
let totalExpense = 0;

function saveExpense() {
    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;

    if (name === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("expenseList");

    let item = document.createElement("li");
    item.innerHTML = name + " - ₹" + amount;

    list.appendChild(item);
    localStorage.setItem("totalExpense", totalExpense + Number(amount));

    totalExpense += Number(amount);
    document.getElementById("totalExpense").innerText = totalExpense;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}
let totalRoomExpense = 0;

function saveRoomExpense() {

    let name = document.getElementById("roomName").value;
    let amount = document.getElementById("roomAmount").value;

    if (name === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("roomExpenseList");

    let item = document.createElement("li");
    item.innerHTML = name + " - ₹" + amount;

    list.appendChild(item);
    localStorage.setItem("totalRoomExpense", totalRoomExpense + Number(amount));

    totalRoomExpense += Number(amount);
    document.getElementById("totalRoomExpense").innerText = totalRoomExpense;

    document.getElementById("roomName").value = "";
    document.getElementById("roomAmount").value = "";
}
window.onload = function () {

    if (document.getElementById("dashboardIncome")) {

        let income = Number(localStorage.getItem("totalIncome")) || 0;
        let expense = Number(localStorage.getItem("totalExpense")) || 0;
        let roomExpense = Number(localStorage.getItem("totalRoomExpense")) || 0;

        document.getElementById("dashboardIncome").innerText = income;
        document.getElementById("dashboardExpense").innerText = expense;
        document.getElementById("dashboardRoomExpense").innerText = roomExpense;
        document.getElementById("dashboardBalance").innerText =
            income - expense - roomExpense;
    }

};
