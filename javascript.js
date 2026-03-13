let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let dcml = ".";

const screen = document.querySelector("#screen");
const nums = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operator");
const equal = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");

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

    //reminder to learn this again and again I LIKED THIS
    if (num1 != "" && num2 != "") {
        operation(operator, num1, num2)
        num1 = result;
        num2 = "";
        screen.value = num1;
    }
    else {
        operator = op;
    }
}

function operation(operator, num1, num2) {

    let a = Number(num1);
    let b = Number(num2);
    if (operator === "+") {
        result = a + b;
        return result;


    }
    else if (operator === "-") {
        result = a - b;
        return result;

    }
    else if (operator === "x") {
        result = a * b;
        return result;
    }
    else if (operator === "/") {
        result = a / b;
        return result;
    }
}


//result
equal.addEventListener("click", () => {
    const results = operation(operator, num1, num2);
    screen.value = results;
    num1 = result;
    num2 = "";

});

//clear button
clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    screen.value = result;
});

//decimal button
