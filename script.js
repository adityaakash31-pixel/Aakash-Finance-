// ===================================
// AAKASH FINANCE V4
// Base Script
// ===================================

// Total Income
let totalIncome = Number(localStorage.getItem("totalIncome")) || 0;

// Income History
let incomeHistory = JSON.parse(localStorage.getItem("incomeHistory")) || [];

// Page Load
window.onload = function () {

    // Dashboard Total Income
    let dashboard = document.getElementById("dashboardIncome");
    if (dashboard) {
        dashboard.innerText = totalIncome;
    }

    // Income Page Total
    let total = document.getElementById("totalIncome");
    if (total) {
        total.innerText = totalIncome;
    }

};

console.log("Aakash Finance V4 Loaded");
