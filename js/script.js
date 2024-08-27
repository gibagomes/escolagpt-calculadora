function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("result").value += number;
}

function appendOperator(operator) {
    let current = document.getElementById("result").value;
    if (current !== "" && !isNaN(current.slice(-1))) {
        document.getElementById("result").value += operator;
    }
}

function calculate() {
    let expression = document.getElementById("result").value;
    if (expression) {
        document.getElementById("result").value = eval(expression);
    }
}
