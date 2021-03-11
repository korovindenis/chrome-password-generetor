const newPass = document.getElementById("newPass");
const resPass = document.getElementById("resPass");
const quantity = document.getElementById("quantity");

quantity.onchange = function() {
    if (isNaN(this.value) || this.value < 1 || this.value > 12) {
        this.value = 1;
    }
}
newPass.onclick = function() {
    resPass.value = Math.random().toString(36).slice(-quantity.value);
}