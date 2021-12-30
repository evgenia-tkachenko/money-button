function raiseSalary() {
    console.log("raise!!")
    var salaryDiv = document.getElementById("mySalaryValue");
    var currentSalary = Number.parseInt(salaryDiv.textContent);
    var newSalary = currentSalary + Math.floor(Math.random() * 2000) + 50;
    salaryDiv.textContent = newSalary;
}

function setSalary() {
    var myDiv = document.getElementById("mySalaryValue");
    myDiv.textContent = Math.floor(Math.random() * 5000) + 200;
}
window.onload = setSalary;
