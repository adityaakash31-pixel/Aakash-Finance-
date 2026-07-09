// ===============================
// AAKASH FINANCE V4
// PART 1
// ===============================

// Total Income
let totalIncome = Number(localStorage.getItem("totalIncome")) || 0;

// Income History
let incomeHistory =
JSON.parse(localStorage.getItem("incomeHistory")) || [];

// ===============================
// PAGE LOAD
// ===============================

window.onload = function () {

    // Income Page Total
    let totalBox = document.getElementById("totalIncome");

    if (totalBox) {
        totalBox.innerText = totalIncome;
    }

    // Dashboard Total
    let dashboardBox = document.getElementById("dashboardIncome");

    if (dashboardBox) {
        dashboardBox.innerText = totalIncome;
    }

    // Income History
    let list = document.getElementById("incomeList");

    if (list) {

        list.innerHTML = "";

        incomeHistory.forEach(function(item){

            let li = document.createElement("li");

            li.innerHTML =
            item.source + " - ₹" + item.amount;

            list.appendChild(li);

        });

    }

};

console.log("Aakash Finance V4 Part 1 Loaded");
// ===============================
// SAVE INCOME
// ===============================

function saveIncome() {

    let source = document.getElementById("source").value;
    let amount = Number(document.getElementById("amount").value);

    if (source == "") {
        alert("Income Category Select kijiye");
        return;
    }

    if (amount <= 0) {
        alert("Amount Enter kijiye");
        return;
    }

    let data = {
        source: source,
        amount: amount
    };

    incomeHistory.push(data);

    localStorage.setItem(
        "incomeHistory",
        JSON.stringify(incomeHistory)
    );

    totalIncome += amount;

    localStorage.setItem(
        "totalIncome",
        totalIncome
    );

    let totalBox = document.getElementById("totalIncome");
    if (totalBox) {
        totalBox.innerText = totalIncome;
    }

    let list = document.getElementById("incomeList");

    if (list) {

        let li = document.createElement("li");

        li.innerHTML =
            source + " - ₹" + amount;

        list.appendChild(li);
    }

    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";

    alert("✅ Income Saved Successfully");

}
