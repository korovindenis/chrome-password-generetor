const newPass = document.getElementById("newPass");
const resPass = document.getElementById("resPass");

newPass.onclick = function() {
    resPass.value = Math.random().toString(36).slice(-8);
};