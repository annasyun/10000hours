const btnAim = document.querySelector(".btn-aim");
const calc = document.querySelector(".calc");
const txtWannabe = document.querySelector(".txt-wannabe");
const resultWannabe = document.querySelector(".result-wannabe");
const txtTime = document.querySelector(".txt-time");
const resultTime = document.querySelector(".result-time");
const btnTrain = document.querySelector(".btn-train");
const modal = document.querySelector(".modal");
const btnGo = document.querySelector(".btn-go");
const imgLoading = document.querySelector(".img-loading");
const btnShare = document.querySelector(".btn-share");

function calc10000hours() {
    const userTime = parseInt(txtTime.value);
    resultTime.innerText = Math.ceil(10000/userTime);
}

btnAim.addEventListener('click',() => {
    calc.classList.add("hidden");
    imgLoading.classList.remove("hidden");
    resultWannabe.innerText = txtWannabe.value;
    calc10000hours();
    txtWannabe.value = "";
    txtTime.value = "";
    setTimeout(() => {
        imgLoading.classList.add("hidden");    
        calc.classList.remove("hidden");
    },2000)
})

function showModal() {
    modal.classList.remove("hidden");
}

btnTrain.addEventListener('click',showModal);

function exitModal() {
    modal.classList.add("hidden");
}

btnGo.addEventListener('click',exitModal);

function copyUrl() {
    let url = '';
	let textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
    document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.")
}

btnShare.addEventListener('click',copyUrl);
