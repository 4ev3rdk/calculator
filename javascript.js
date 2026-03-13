let num1 = "0";
let num2 = "";
let operator = "";
let result = "";
let isOn = false;

const screen = document.querySelector("#screen");
const nums = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operator");
const equal = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
let on = document.querySelector("#On");

if (!isOn) {
    screen.value = "";
    screen.style.background = "rgb(179, 209, 190)";
}
on.addEventListener("click", () => {
    if (!isOn) {
        isOn = true;
        screen.style.background = "rgb(110, 213, 158)";
        num1 = "";
        num2 = "";
        operator = "";
        screen.value = num1;
    } else {
        isOn = false;
        screen.style.background = "rgb(179, 209, 190)";

        screen.value = "";
    }
});

for (let n of nums) {
    n.addEventListener("click", () => {
        if (!isOn) return;

        getNum(n.textContent);
    });
}

for (let op of operations) {
    op.addEventListener("click", () => {
        if (!isOn) return;
        getOperator(op.textContent)
    });


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
    if (!isOn) return;

    const results = operation(operator, num1, num2);
    screen.value = results;
    num1 = result;
    num2 = "";

});

//clear button
clear.addEventListener("click", () => {
    if (!isOn) return;

    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    screen.value = result;
});

backspace.addEventListener("click", () => {
    if (!isOn) return;

    if (num2 != "") {
        num2 = num2.slice(-1);
        screen.value = num2;
    }
    else if (operator != "") {
        operator = operator = operator.slice(-1)
        screen.value = num1;
    }
    else if (num1 != "") {
        num1 = num1.slice(0, -1);
        screen.value = num1;
    }
    else if (result != "") {
        result = result.slice(0, -1);
        screen.value = result;
    }
});
