// Aakash Finance V4

let totalIncome = Number(localStorage.getItem("totalIncome")) || 0;

window.onload = function () {

    let incomeBox = document.getElementById("totalIncome");

    if (incomeBox) {
        incomeBox.innerText = totalIncome;
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

    document.getElementById("totalIncome").innerText = totalIncome;

    alert("✅ Income Saved Successfully");

    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";

}
