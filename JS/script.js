const display = document.querySelector(".display");

function showToDisplay(value){
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        const result = eval(display.value);
        if(isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid Operator");
        }
        display.value = result;
    } catch(error) {
        display.value = "Error";
    }
}