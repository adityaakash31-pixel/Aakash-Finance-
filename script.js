// ---------------- INCOME ----------------

let totalIncome = Number(localStorage.getItem("totalIncome")) || 0;

let incomeHistory = JSON.parse(localStorage.getItem("incomeHistory")) || [];

function saveIncome() {

    let source = document.getElementById("source").value;
    let amount = Number(document.getElementById("amount").value);
    let note = document.getElementById("incomeNote").value;
    let date = document.getElementById("incomeDate").value;

    if (source == "") {
        alert("Income Category Select kijiye");
        return;
    }

    if (amount <= 0) {
        alert("Amount Enter kijiye");
        return;
    }

    if (date == "") {
        alert("Date Select kijiye");
        return;
    }

    let incomeId = "INC" + Date.now();

    incomeHistory.push({
        id: incomeId,
        source: source,
        amount: amount,
        note: note,
        date: date
    });

    localStorage.setItem("incomeHistory", JSON.stringify(incomeHistory));

    let list = document.getElementById("incomeList");

    if (list) {
        let item = document.createElement("li");
        item.innerHTML =
            incomeId + " | " +
            source + " - ₹" + amount +
            "<br>📝 " + note +
            "<br>📅 " + date +
            ' <button onclick="deleteIncome(this,' + amount + ')">🗑 Delete</button>' +
            ' <button onclick="editIncome(this)">✏️ Edit</button>';

        list.appendChild(item);
    }

    totalIncome += amount;

    localStorage.setItem("totalIncome", totalIncome);

    if (document.getElementById("totalIncome")) {
        document.getElementById("totalIncome").innerText = totalIncome;
    }

    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("incomeNote").value = "";
    document.getElementById("incomeDate").value = "";
}

// ---------------- EXPENSE ----------------

let totalExpense = Number(localStorage.getItem("totalExpense")) || 0;
    
let expenseHistory = JSON.parse(localStorage.getItem("expenseHistory")) || [];

function saveExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("expenseAmount").value);
    let date = document.getElementById("expenseDate").value;

    if (name == "") {
        alert("Expense Name Enter kijiye");
        return;
    }

    if (amount <= 0) {
        alert("Amount Enter kijiye");
        return;
    }

    if (date == "") {
        alert("Date Select kijiye");
        return;
    }

    expenseHistory.push({
        name: name,
        amount: amount,
        date: date
    });

    localStorage.setItem("expenseHistory", JSON.stringify(expenseHistory));

    let list = document.getElementById("expenseList");

    if (list) {
        let item = document.createElement("li");

        item.innerHTML =
            name + " - ₹" + amount + " - 📅 " + date +
            ' <button onclick="deleteExpense(this,' + amount + ')">🗑 Delete</button>';

        list.appendChild(item);
    }

    totalExpense += amount;

    localStorage.setItem("totalExpense", totalExpense);

    if (document.getElementById("totalExpense")) {
        document.getElementById("totalExpense").innerText = totalExpense;
    }

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseDate").value = "";
}

// ---------------- ROOM EXPENSE ----------------

let totalRoomExpense = Number(localStorage.getItem("totalRoomExpense")) || 0;

let roomExpenseHistory = JSON.parse(localStorage.getItem("roomExpenseHistory")) || [];

function saveRoomExpense() {

    let name = document.getElementById("roomName").value;
    let amount = Number(document.getElementById("roomAmount").value);
    let date = document.getElementById("roomDate").value;

    if (name == "") {
        alert("Room Expense Name Enter kijiye");
        return;
    }

    if (amount <= 0) {
        alert("Amount Enter kijiye");
        return;
    }

    if (date == "") {
        alert("Date Select kijiye");
        return;
    }

    roomExpenseHistory.push({
        name: name,
        amount: amount,
        date: date
    });

    localStorage.setItem(
        "roomExpenseHistory",
        JSON.stringify(roomExpenseHistory)
    );

    let list = document.getElementById("roomExpenseList");

    if (list) {
        let item = document.createElement("li");

        item.innerHTML =
            name + " - ₹" + amount + " - 📅 " + date +
            ' <button onclick="deleteRoomExpense(this,' + amount + ')">🗑 Delete</button>';

        list.appendChild(item);
    }

    totalRoomExpense += amount;

    localStorage.setItem("totalRoomExpense", totalRoomExpense);

    if (document.getElementById("totalRoomExpense")) {
        document.getElementById("totalRoomExpense").innerText = totalRoomExpense;
    }

    document.getElementById("roomName").value = "";
    document.getElementById("roomAmount").value = "";
    document.getElementById("roomDate").value = "";
}


// ---------------- DASHBOARD ----------------

window.onload = function () {

    // Dark Mode
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    // LocalStorage से Data पढ़ें
    let income = Number(localStorage.getItem("totalIncome")) || 0;
    let expense = Number(localStorage.getItem("totalExpense")) || 0;
    let roomExpense = Number(localStorage.getItem("totalRoomExpense")) || 0;
    let loan = Number(localStorage.getItem("totalLoan")) || 0;

    // Dashboard
    if (document.getElementById("dashboardIncome")) {
        document.getElementById("dashboardIncome").innerText = income;
    }

    if (document.getElementById("dashboardExpense")) {
        document.getElementById("dashboardExpense").innerText = expense;
    }

    if (document.getElementById("dashboardRoomExpense")) {
        document.getElementById("dashboardRoomExpense").innerText = roomExpense;
    }

    if (document.getElementById("dashboardLoan")) {
        document.getElementById("dashboardLoan").innerText = loan;
    }

    if (document.getElementById("dashboardBalance")) {
        document.getElementById("dashboardBalance").innerText =
            income - expense - roomExpense - loan;
    }

    // Income Page
    if (document.getElementById("totalIncome")) {
        document.getElementById("totalIncome").innerText = income;
    }

    // Expense Page
    if (document.getElementById("totalExpense")) {
        document.getElementById("totalExpense").innerText = expense;
    }

    // Room Expense Page
    if (document.getElementById("totalRoomExpense")) {
        document.getElementById("totalRoomExpense").innerText = roomExpense;
    }

    // Loan Page
    if (document.getElementById("totalLoan")) {
        document.getElementById("totalLoan").innerText = loan;
    }

};

// ---------------- LOAN ----------------

let totalLoan = Number(localStorage.getItem("totalLoan")) || 0;

let loanHistory = JSON.parse(localStorage.getItem("loanHistory")) || [];

function saveLoan() {

    let person = document.getElementById("loanPerson").value;
    let amount = Number(document.getElementById("loanAmount").value);

    if (person == "") {
        alert("Person Name Enter kijiye");
        return;
    }

    if (amount <= 0) {
        alert("Amount Enter kijiye");
        return;
    }

    loanHistory.push({
        person: person,
        amount: amount,
        date: new Date().toISOString().split("T")[0]
    });

    localStorage.setItem("loanHistory", JSON.stringify(loanHistory));

    let list = document.getElementById("loanList");

    if (list) {
        let item = document.createElement("li");

        item.innerHTML =
            person + " - ₹" + amount +
            ' <button onclick="deleteLoan(this,' + amount + ')">🗑 Delete</button>';

        list.appendChild(item);
    }

    totalLoan += amount;

    localStorage.setItem("totalLoan", totalLoan);

    if (document.getElementById("totalLoan")) {
        document.getElementById("totalLoan").innerText = totalLoan;
    }

    document.getElementById("loanPerson").value = "";
    document.getElementById("loanAmount").value = "";
}

// ---------------- REPORT ----------------

if (document.getElementById("reportIncome") &&
    document.getElementById("financeChart")) {

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

    if (typeof Chart !== "undefined") {
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
function resetData() {

    let ok = confirm("क्या आप सच में पूरा Finance Data Delete करना चाहते हैं?");

    if (!ok) {
        return;
    }

    localStorage.clear();

    alert("✅ सभी डेटा Delete हो गया।");

    window.location.href = "dashboard.html";

}
function resetData() {

    if (!confirm("Are you sure you want to delete all data?")) {
        return;
    }

    localStorage.clear();

    alert("All Finance Data Deleted Successfully!");

    window.location.href = "dashboard.html";
}
function importData() {

    let file = document.getElementById("importFile").files[0];

    if (!file) {
        alert("Please select a backup file.");
        return;
    }

    let reader = new FileReader();

    reader.onload = function(e) {

        try {

            let data = JSON.parse(e.target.result);

            if (data.income !== null)
                localStorage.setItem("totalIncome", data.income);

            if (data.expense !== null)
                localStorage.setItem("totalExpense", data.expense);

            if (data.roomExpense !== null)
                localStorage.setItem("totalRoomExpense", data.roomExpense);

            if (data.loan !== null)
                localStorage.setItem("totalLoan", data.loan);

            alert("✅ Backup Imported Successfully!");

            window.location.href = "dashboard.html";

        } catch (err) {
            alert("❌ Invalid Backup File!");
        }

    };

    reader.readAsText(file);

}
function toggleDarkMode() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}
function downloadPDF() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    let income = localStorage.getItem("totalIncome") || 0;
    let expense = localStorage.getItem("totalExpense") || 0;
    let room = localStorage.getItem("totalRoomExpense") || 0;
    let loan = localStorage.getItem("totalLoan") || 0;

    let balance =
        Number(income) -
        Number(expense) -
        Number(room) -
        Number(loan);

    doc.setFontSize(20);
    doc.text("Aakash Finance Report", 20, 20);

    doc.setFontSize(14);
    doc.text("Total Income : Rs " + income, 20, 40);
    doc.text("Total Expense : Rs " + expense, 20, 55);
    doc.text("Room Expense : Rs " + room, 20, 70);
    doc.text("Loan : Rs " + loan, 20, 85);
    doc.text("Balance : Rs " + balance, 20, 100);

    doc.save("AakashFinanceReport.pdf");

}
