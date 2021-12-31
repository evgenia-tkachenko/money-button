var millionaire;

function raiseSalary() {
    var salaryDiv = document.getElementById("mySalaryValue");
    var currentSalary = Number.parseInt(salaryDiv.textContent);
    var newSalary = currentSalary + Math.floor(Math.random() * 2000) + 50;
    salaryDiv.textContent = newSalary;

    if (newSalary > 1000000 && !millionaire) {
        becomeMillionaire();
    }
}

function becomeMillionaire() {
    alert("You are a millionaire!");
    millionaire = true;
}

function setSalary() {
    var myDiv = document.getElementById("mySalaryValue");
    myDiv.textContent = Math.floor(Math.random() * 5000) + 200;
    millionaire = false;
}

window.onload = setSalary;
