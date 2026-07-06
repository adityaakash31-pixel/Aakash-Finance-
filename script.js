// ---------------- INCOME ----------------

let totalIncome = Number(localStorage.getItem("totalIncome")) || 0;

let incomeHistory = JSON.parse(localStorage.getItem("incomeHistory")) || [];

function saveIncome() {

    let source = document.getElementById("source").value;
    let amount = Number(document.getElementById("amount").value);
    let date = document.getElementById("incomeDate").value;

    if (source === "" || amount <= 0) {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("incomeList");

    if (list) {
       let incomeId = "INC" + Date.now();
        let item = document.createElement("li");
    item.innerHTML =
incomeId + " | " +
source + " - ₹" + amount + " - 📅 " + date +
' <button onclick="deleteIncome(this,' + amount + ')">🗑 Delete</button>' +
' <button onclick="editIncome(this)">✏️ Edit</button>';
        list.appendChild(item);
        incomeHistory.push({
    id: incomeId,
    source: source,
    amount: amount,
    date: date
});

localStorage.setItem("incomeHistory", JSON.stringify(incomeHistory));
    }

    totalIncome += amount;

    localStorage.setItem("totalIncome", totalIncome);

    document.getElementById("totalIncome").innerText = totalIncome;

    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";
}


// ---------------- EXPENSE ----------------

let totalExpense = Number(localStorage.getItem("totalExpense")) || 0;

let expenseHistory = JSON.parse(localStorage.getItem("expenseHistory")) || [];

function saveExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("expenseAmount").value);
    let date = document.getElementById("expenseDate").value;

    if (name === "" || amount <= 0) {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("expenseList");

    if (list) {
        let item = document.createElement("li");
        item.innerHTML =
name + " - ₹" + amount + " - 📅 " + date +
' <button onclick="deleteExpense(this,' + amount + ')">🗑 Delete</button>';
        list.appendChild(item);
        expenseHistory.push({
    name: name,
    amount: amount,
    date: date
});

localStorage.setItem("expenseHistory", JSON.stringify(expenseHistory));
    }

    totalExpense += amount;

    localStorage.setItem("totalExpense", totalExpense);

    document.getElementById("totalExpense").innerText = totalExpense;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}


// ---------------- ROOM EXPENSE ----------------

let totalRoomExpense = Number(localStorage.getItem("totalRoomExpense")) || 0;

let roomExpenseHistory = JSON.parse(localStorage.getItem("roomExpenseHistory")) || [];

function saveRoomExpense() {

    let name = document.getElementById("roomName").value;
    let amount = Number(document.getElementById("roomAmount").value);
    let date = document.getElementById("roomDate").value;

    if (name === "" || amount <= 0) {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("roomExpenseList");

    if (list) {
        let item = document.createElement("li");
        item.innerHTML =
name + " - ₹" + amount + " - 📅 " + date +
' <button onclick="deleteRoomExpense(this,' + amount + ')">🗑 Delete</button>';
        list.appendChild(item);
        roomExpenseHistory.push({
    name: name,
    amount: amount,
    date: date
});

localStorage.setItem(
    "roomExpenseHistory",
    JSON.stringify(roomExpenseHistory)
);
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
    income - expense - roomExpense - loan;
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

let loanHistory = JSON.parse(localStorage.getItem("loanHistory")) || [];

function saveLoan() {

    let person = document.getElementById("loanPerson").value;
    let amount = Number(document.getElementById("loanAmount").value);

    if (person === "" || amount <= 0) {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("loanList");

    let item = document.createElement("li");
    item.innerHTML =
person + " - ₹" + amount +
' <button onclick="deleteLoan(this,' + amount + ')">🗑 Delete</button>';

    list.appendChild(item);

    loanHistory.push({
    person: person,
    amount: amount,
    date: new Date().toISOString().split("T")[0]
});

localStorage.setItem(
    "loanHistory",
    JSON.stringify(loanHistory)
);

    totalLoan += amount;

    localStorage.setItem("totalLoan", totalLoan);

    document.getElementById("totalLoan").innerText = totalLoan;

    document.getElementById("loanPerson").value = "";
    document.getElementById("loanAmount").value = "";
}
function searchIncome() {

    let input = document.getElementById("searchIncome").value.toLowerCase();
    let list = document.getElementById("incomeList");
    let items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {

        let text = items[i].innerText.toLowerCase();

        if (text.indexOf(input) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }

    }
}
function exportData() {

    let data = {
        income: localStorage.getItem("totalIncome"),
        expense: localStorage.getItem("totalExpense"),
        roomExpense: localStorage.getItem("totalRoomExpense"),
        loan: localStorage.getItem("totalLoan")
    };

    let text = JSON.stringify(data, null, 2);

    let blob = new Blob([text], { type: "application/json" });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "AakashFinanceBackup.json";

    link.click();
}
// ---------------- REPORT ----------------

if (document.getElementById("reportIncome")) {

    let income = Number(localStorage.getItem("totalIncome")) || 0;
    let expense = Number(localStorage.getItem("totalExpense")) || 0;
    let roomExpense = Number(localStorage.getItem("totalRoomExpense")) || 0;
    let loan = Number(localStorage.getItem("totalLoan")) || 0;

    document.getElementById("reportIncome").innerText = income;
    document.getElementById("reportExpense").innerText = expense;
    document.getElementById("reportRoomExpense").innerText = roomExpense;
    document.getElementById("reportLoan").innerText = loan;
    document.getElementById("reportBalance").innerText =
        income - expense - roomExpense - loan;

    new Chart(document.getElementById("financeChart"), {
        type: "pie",
        data: {
            labels: ["Income", "Expense", "Room Expense", "Loan"],
            datasets: [{
                data: [income, expense, roomExpense, loan]
            }]
        }
    });
}
function filterReport() {

    let month = document.getElementById("reportMonth").value;

    if (month === "") {
        alert("Please select a month");
        return;
    }

    alert("Selected Month: " + month);

}
function editIncome(button) {

    let li = button.parentElement;

    let newAmount = prompt("Enter new Amount:");

    if (newAmount === null || newAmount === "" || isNaN(newAmount)) {
        return;
    }

    let text = li.innerText;

    let parts = text.split(" - ₹");

    let firstPart = parts[0];

    let datePart = "";

    if (parts[1].includes(" - 📅 ")) {
        datePart = parts[1].split(" - 📅 ")[1];
    }

    li.innerHTML =
        firstPart + " - ₹" + newAmount + " - 📅 " + datePart +
        ' <button onclick="this.parentElement.remove()">🗑 Delete</button>' +
        ' <button onclick="editIncome(this)">✏️ Edit</button>';

}
function searchHistory() {
    alert("History Search feature is under development.");
}

function searchHistory() {
    alert("History Search feature is under development.");
}

// ---------------- HISTORY PAGE ----------------

if (document.getElementById("historyIncome")) {

    let incomeList = JSON.parse(localStorage.getItem("incomeHistory")) || [];
    let ul = document.getElementById("historyIncome");

    incomeList.forEach(function(item) {

        let li = document.createElement("li");

        li.innerHTML =
            item.id + " | " +
            item.source + " - ₹" +
            item.amount + " - 📅 " +
            item.date;

        ul.appendChild(li);

    });

}

if (document.getElementById("historyExpense")) {

    let expenseList = JSON.parse(localStorage.getItem("expenseHistory")) || [];
    let ul = document.getElementById("historyExpense");

    expenseList.forEach(function(item) {

        let li = document.createElement("li");

        li.innerHTML =
            item.name + " - ₹" +
            item.amount + " - 📅 " +
            item.date;

        ul.appendChild(li);

    });

}
if (document.getElementById("historyRoom")) {

    let roomList = JSON.parse(localStorage.getItem("roomExpenseHistory")) || [];
    let ul = document.getElementById("historyRoom");

    roomList.forEach(function(item) {

        let li = document.createElement("li");

        li.innerHTML =
            item.name + " - ₹" +
            item.amount + " - 📅 " +
            item.date;

        ul.appendChild(li);

    });

}
if (document.getElementById("historyLoan")) {

    let loanList = JSON.parse(localStorage.getItem("loanHistory")) || [];
    let ul = document.getElementById("historyLoan");

    loanList.forEach(function(item) {

        let li = document.createElement("li");

        li.innerHTML =
            item.person + " - ₹" +
            item.amount + " - 📅 " +
            item.date;

        ul.appendChild(li);

    });

}
function deleteIncome(button, amount) {

    if (!confirm("Delete this income?")) {
        return;
    }

    button.parentElement.remove();
    let liText = button.parentElement.innerText;
let incomeId = liText.split(" | ")[0];

incomeHistory = incomeHistory.filter(item => item.id !== incomeId);

localStorage.setItem("incomeHistory", JSON.stringify(incomeHistory));

    totalIncome = totalIncome - Number(amount);

    localStorage.setItem("totalIncome", totalIncome);

    if (document.getElementById("totalIncome")) {
        document.getElementById("totalIncome").innerText = totalIncome;
    }

    if (document.getElementById("dashboardIncome")) {

        document.getElementById("dashboardIncome").innerText = totalIncome;

        let expense = Number(localStorage.getItem("totalExpense")) || 0;
        let roomExpense = Number(localStorage.getItem("totalRoomExpense")) || 0;
        let loan = Number(localStorage.getItem("totalLoan")) || 0;

        document.getElementById("dashboardBalance").innerText =
            totalIncome - expense - roomExpense - loan;
    }

}
function deleteExpense(button, amount) {

    if (!confirm("Delete this expense?")) {
        return;
    }

    button.parentElement.remove();

    totalExpense = totalExpense - Number(amount);

    localStorage.setItem("totalExpense", totalExpense);

    if (document.getElementById("totalExpense")) {
        document.getElementById("totalExpense").innerText = totalExpense;
    }

    if (document.getElementById("dashboardExpense")) {

        document.getElementById("dashboardExpense").innerText = totalExpense;

        let income = Number(localStorage.getItem("totalIncome")) || 0;
        let roomExpense = Number(localStorage.getItem("totalRoomExpense")) || 0;
        let loan = Number(localStorage.getItem("totalLoan")) || 0;

        document.getElementById("dashboardBalance").innerText =
            income - totalExpense - roomExpense - loan;
    }

}
function deleteRoomExpense(button, amount) {

    if (!confirm("Delete this room expense?")) {
        return;
    }

    button.parentElement.remove();

    totalRoomExpense -= Number(amount);

    localStorage.setItem("totalRoomExpense", totalRoomExpense);

    if (document.getElementById("totalRoomExpense")) {
        document.getElementById("totalRoomExpense").innerText = totalRoomExpense;
    }

}
function deleteLoan(button, amount) {

    if (!confirm("Delete this loan?")) {
        return;
    }

    button.parentElement.remove();

    totalLoan -= Number(amount);

    localStorage.setItem("totalLoan", totalLoan);

    if (document.getElementById("totalLoan")) {
        document.getElementById("totalLoan").innerText = totalLoan;
    }

    if (document.getElementById("dashboardLoan")) {

        document.getElementById("dashboardLoan").innerText = totalLoan;

        let income = Number(localStorage.getItem("totalIncome")) || 0;
        let expense = Number(localStorage.getItem("totalExpense")) || 0;
        let roomExpense = Number(localStorage.getItem("totalRoomExpense")) || 0;

        document.getElementById("dashboardBalance").innerText =
            income - expense - roomExpense - totalLoan;
    }

}
