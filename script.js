// Aakash Finance V4

let totalIncome = Number(localStorage.getItem("totalIncome")) || 0;

window.onload = function () {

    let income = Number(localStorage.getItem("totalIncome")) || 0;

    let totalIncome = document.getElementById("totalIncome");
    if (totalIncome) {
        totalIncome.innerText = income;
    }

    let dashboardIncome = document.getElementById("dashboardIncome");
    if (dashboardIncome) {
        dashboardIncome.innerText = income;
    }

};

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

    totalIncome += amount;

    localStorage.setItem("totalIncome", totalIncome);
    let list = document.getElementById("incomeList");

if (list) {

    let item = document.createElement("li");

    item.innerHTML =
        source + " - ₹" + amount;

    list.appendChild(item);

}

    document.getElementById("totalIncome").innerText = totalIncome;

    alert("✅ Income Saved Successfully");

    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";

}
