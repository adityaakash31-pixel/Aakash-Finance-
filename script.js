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
