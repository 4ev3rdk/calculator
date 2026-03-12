let num1 = "";
let num2 = "";
let operator = "";

const screen = document.querySelector("#screen");
const nums = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operator");
const equal = document.querySelector(".equals");

for (let n of nums) {
    n.addEventListener("click", () => {
        getNum(n.textContent);
    });
}

for (let op of operations) {
    op.addEventListener("click", () => getOperator(op.textContent))
}

function getNum(num) {

    if (operator === "") {
        num1 += num;
        screen.value += num;
    }
    else {
        num2 += num;
        screen.value = num2;
    }
}

function getOperator(op) {
    operator = op;
}

function operation(operator, num1, num2) {

    let a = Number(num1);
    let b = Number(num2);
    if (operator === "+") {
        return a + b;
    }
    else if (operator === "-") {
        return a - b;
    }
    else if (operator === "x") {
        return a * b;
    }
    else if (operator === "/") {
        return a / b;
    }
}

equal.addEventListener("click", () => {
    const result = operation(operator, num1, num2);
    screen.value = result;
});