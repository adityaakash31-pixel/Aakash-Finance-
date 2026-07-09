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
