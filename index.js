const bdtdT = 103.08;
const nokK = 10.23;
const cadT = 1.33;

const bdtValue = document.getElementById("bdt");
const cadValue = document.getElementById("cad");
const nkkValue = document.getElementById("nkk");
const convertBtn = document.getElementById("convert");
const usdmInput = document.getElementById("usdCollect");
const lastAmmountInput = document.getElementById("lastAmmount");
const errorMsg = document.getElementById("error");
let banglaZ = document.getElementById("bdZero");
let norwayZ = document.getElementById("nkZero");
let canadaZ = document.getElementById("caZero");

convertBtn.addEventListener("click", function () {
	bangladesh();
	norway();
	canada();
	lastAInput();
	negeaTiveNum();
	usdmInput.value = "";
});

function bangladesh() {
	let usdCurrent = usdmInput.value;
	usdCurrent = Number(usdCurrent);
	let result = usdCurrent * bdtdT;
	banglaZ.textContent = " bdt";
	bdtValue.textContent = result.toFixed(2);
}

function norway() {
	let usdCurrent = usdmInput.value;
	usdCurrent = Number(usdCurrent);
	let result = usdCurrent * nokK;
	norwayZ.textContent = " kr";
	nkkValue.textContent = result.toFixed(2);
}

function canada() {
	let usdCurrent = usdmInput.value;
	usdCurrent = Number(usdCurrent);
	let result = usdCurrent * cadT;
	canadaZ.textContent = " cad";
	cadValue.textContent = result.toFixed(2);
}

function lastAInput() {
	let usdCurrent = usdmInput.value;
	usdCurrent = Number(usdCurrent);
	lastAmmountInput.textContent = "$" + usdCurrent + " dollar";
}
function negeaTiveNum() {
	let usdCurrent = usdmInput.value;
	usdCurrent = Number(usdCurrent);
	if (usdCurrent <= 0) {
		let errorSms = "less than 1 try again";
		errorMsg.textContent = errorSms;
		lastAmmountInput.textContent = "";
		bdtValue.innerHTML = "";
		nkkValue.innerHTML = "";
		cadValue.innerHTML = "";
		banglaZ.textContent = " 00";
		norwayZ.textContent = " 00";
		canadaZ.textContent = " 00";
	} else if (usdCurrent > 50000) {
		let errorSms = "limit over try again in between 50k";
		errorMsg.textContent = errorSms;
		lastAmmountInput.textContent = "";
		bdtValue.innerHTML = "";
		nkkValue.innerHTML = "";
		cadValue.innerHTML = "";
		banglaZ.textContent = " 00";
		norwayZ.textContent = " 00";
		canadaZ.textContent = " 00";
	} else {
		lastAmmountInput.textContent = "$" + usdCurrent + " dollar";
		errorMsg.textContent = "";
	}
}
