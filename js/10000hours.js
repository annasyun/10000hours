const btnAim = document.querySelector(".btn-aim");
const calc = document.querySelector(".calc");
const txtWannabe = document.querySelector(".txt-wannabe");
const resultWannabe = document.querySelector(".result-wannabe");
const txtTime = document.querySelector(".txt-time");
const resultTime = document.querySelector(".result-time");
const btnTrain = document.querySelector(".btn-train");
const modal = document.querySelector(".modal");
const btnGo = document.querySelector(".btn-go");

function calc10000hours() {
    const userTime = parseInt(txtTime.value);
    resultTime.innerText = Math.ceil(10000/userTime);
}
function showResult() {
    // 유효성 검사
    calc.classList.remove("hidden");
    resultWannabe.innerText = txtWannabe.value;
    calc10000hours();
    txtWannabe.value = "";
    txtTime.value = "";
}
btnAim.addEventListener('click',showResult);

function showModal() {
    modal.classList.remove("hidden");
}

btnTrain.addEventListener('click',showModal);

function exitModal() {
    modal.classList.add("hidden");
}

btnGo.addEventListener('click',exitModal);
