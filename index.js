let bdtdT = 103.08;
let nokK = 10.23;
let cadT = 1.33;

let bdtValue = document.getElementById("bdt");
let cadValue = document.getElementById("cad");
let nkkValue = document.getElementById("nkk");
let convertBtn = document.getElementById("convert");
let usdmInput = document.getElementById("usdCollect");
let lastAmmountInput = document.getElementById("lastAmmount");

convertBtn.addEventListener("click", function () {
	bangladesh();
	norway();
	canada();
	lastAInput();
	usdmInput.value = "";
});

function bangladesh() {
	let usdCurrent = usdmInput.value;
	usdCurrent = Number(usdCurrent);
	let result = usdCurrent * bdtdT;
	bdtValue.innerHTML = result.toFixed(2);
}
function norway() {
	let usdCurrent = usdmInput.value;
	usdCurrent = Number(usdCurrent);
	let result = usdCurrent * nokK;
	nkkValue.innerHTML = result.toFixed(2);
}
function canada() {
	let usdCurrent = usdmInput.value;
	usdCurrent = Number(usdCurrent);
	let result = usdCurrent * cadT;
	cadValue.innerHTML = result.toFixed(2);
}
function lastAInput() {
	let usdCurrent = usdmInput.value;
	usdCurrent = Number(usdCurrent);
	lastAmmountInput.textContent = "$" + usdCurrent + " dollar";
}
