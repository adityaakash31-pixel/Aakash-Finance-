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

    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";
}
const saveButton = document.querySelector("button");

if (saveButton) {
  saveButton.addEventListener("click", function () {
    const source = document.querySelector('input[type="text"]').value;
    const amount = document.querySelector('input[type="number"]').value;

    if (source === "" || amount === "") {
      alert("Please fill all fields.");
      return;
    }

    const list = document.getElementById("incomeList");

    if (list) {
      const item = document.createElement("li");
      item.textContent = source + " - ₹" + amount;
      list.appendChild(item);
    }
  });
}
