import './styles.css';

const newPass = document.getElementById("newPass");
const resPass = document.getElementById("resPass");
const quantity = document.getElementById("quantity");
const isNumber = document.getElementById("isNumber");
const isUpper = document.getElementById("isUpper");
const isLower = document.getElementById("isLower");

const rndData = {
    upper: rndUpper,
    lower: rndLow,
    number: rndNum,
    symbol: rndSymbol
};

quantity.onchange = function () {
    if (isNaN(this.value) || this.value < 1 || this.value > 17) {
        this.value = 1;
    }
}
newPass.onclick = function () {
    resPass.value = newPassword(isUpper.checked, isLower.checked, isNumber.checked, quantity.value);
}

function rndSymbol() {
    const symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random() * symbol.length)];
}

function rndNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function rndLow() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function rndUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function newPassword(upper, lower, number, length, symbol = true) {
    let tmp = "";
    const type = [{
        upper
    }, {
        lower
    }, {
        number
    }, {
        symbol
    }].filter(item => Object.values(item)[0]);

    for (let i = 0; i < length; i++) {
        type.forEach(j => {
            const funcName = Object.keys(j)[0];
            tmp += rndData[funcName]();
        });
    }
    return tmp.slice(0, length);
}