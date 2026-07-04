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

    totalIncome += Number(amount);
    document.getElementById("totalIncome").innerText = totalIncome;

    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";
}
