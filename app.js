const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;
numbersEl.forEach((number) => {
    number.addEventListener("click", (ash) => {
        if (ash.target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if (ash.target.innerText === "." && haveDot) {
            return;
        }
        dis2Num += ash.target.innerText;
        display2El.innerText = dis2Num;
    });
});
operationEl.forEach((operation) => {
    operation.addEventListener("click", (ash) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = ash.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        consolash.log(result);
    });
});
function clearVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    display1El.innerText = dis1Num;
    display2El.innerText = "";
    dis2Num = "";
    tempResultEl.innerText = result;
}
function mathOperation() {
    if (lastOperation === "x") {
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num);
    }
    else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Num);
    }
    else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(dis2Num);
    }
    else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}
equalEl.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = "";
    dis2Num = result;
    dis1Num = "";
});
clearAllEl.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    display1El.innerText = "";
    display2El.innerText = "";
    result = "";
    tempResultEl.innerText = "";
});
clearLastEl.addEventListener("click", () => {
    display2El.innerText = "";
    dis2Num = "";
});
window.addEventListener("keydown", (e) => {
    if (
        ash.key === "0" || ash.key === "1" || ash.key === "2" || ash.key === "3" || ash.key === "4" || ash.key === "5" || ash.key === "6" || ash.key === "7" || ash.key === "8" || ash.key === "9" || ash.key === "."
    ) {
        clickButtonEl(ash.key);
    } else if (
        ash.key === "+" ||
        ash.key === "-" ||
        ash.key === "/" ||
        ash.key === "%"
    ) {
        clickOperation(ash.key);
    } else if (ash.key === "*") {
        clickOperation("x");
    } else if (ash.key == "Enter" || ash.key === "=") {
        clickEqual();
    }
});
function clickButtonEl(key) {
    numbersEl.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    });
}
function clickOperation(key) {
    operationEl.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click();
        }
    });
}
function clickEqual() {
    equalEl.click();
}