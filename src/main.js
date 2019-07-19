
document.getElementById("buttonRegister").style.display = "none";
document.getElementById("enterUserName").style.display = "none";
document.getElementById("enterName").style.display = "none";

let signIn = () => {
	let email = document.getElementById("enterEmail").value;
	let password = document.getElementById("enterPassword").value;
	let userName = document.getElementById("enterUserName").value;
	let name = document.getElementById("enterName").value;
	let saveEmailAndPassword = window.data.signIn(email, password);
	document.getElementById("enterEmail").style.display = "none";
	document.getElementById("enterPassword").style.display = "none";
	document.getElementById("textForCreateAcount").style.display = "none";
	document.getElementById("CreateAcount").style.display = "none";
	document.getElementById("buttonSignIn").style.display = "none";
	[].forEach.call(document.querySelectorAll(".autenticationSec"), function(element){
    element.style.display = "none";
    });
	[].forEach.call(document.querySelectorAll(".principalHome"), function(element){
    element.style.display = "none";
	});
}

let CreateAcountFunction = () => {
	document.getElementById("enterUserName").style.display = "block";
	document.getElementById("enterName").style.display = "block";
	document.getElementById("buttonRegister").style.display = "block";
	document.getElementById("CreateAcount").style.display = "none";
	document.getElementById("buttonSignIn").style.display = "block";
	document.getElementById("buttonSignIn").style.display = "none";
	document.getElementById("textForCreateAcount").style.display = "none";
}

let createUser = () => {
	let email = document.getElementById("enterEmail").value;
	let password = document.getElementById("enterPassword").value;
	let userName = document.getElementById("enterUserName").value;
	let name = document.getElementById("enterName").value;
	let saveEmailAndPassword = window.data.createUser(email, password);
	document.getElementById("enterEmail").style.display = "none";
	document.getElementById("enterPassword").style.display = "none";
	document.getElementById("enterUserName").style.display = "none";
	document.getElementById("enterName").style.display = "none";
	document.getElementById("buttonRegister").style.display = "none";
	document.getElementById("CreateAcount").style.display = "none";
	[].forEach.call(document.querySelectorAll(".autenticationSec"), function(element){
    element.style.display = "none";
    });
	[].forEach.call(document.querySelectorAll(".principalHome"), function(element){
    element.style.display = "none";
	});
}

document.getElementById("buttonSignIn").addEventListener("click", signIn);
document.getElementById("CreateAcount").addEventListener("click", CreateAcountFunction);
document.getElementById("buttonRegister").addEventListener("click", createUser);









/*document.getElementById("buttonSignIn").style.display = "none";
let createUser = () => {
	let email = document.getElementById("enterEmail").value;
	let password = document.getElementById("enterPassword").value;
	let userName = document.getElementById("enterUserName").value;
	let name = document.getElementById("enterName").value;
	let saveEmailAndPassword = window.data.createUser(email, password);
	document.getElementById("enterEmail").style.display = "none";
	document.getElementById("enterPassword").style.display = "none";
	document.getElementById("enterUserName").style.display = "none";
	document.getElementById("enterName").style.display = "none";
	document.getElementById("buttonRegister").style.display = "none";
	document.getElementById("signIn").style.display = "none";
	document.getElementById("textForSignIn").style.display = "none";
	[].forEach.call(document.querySelectorAll(".autenticationSec"), function(element){
    element.style.display = "none";
    });
	[].forEach.call(document.querySelectorAll(".principalHome"), function(element){
    element.style.display = "none";
	});
}

let signInUser = () => {
	document.getElementById("enterUserName").style.display = "none";
	document.getElementById("enterName").style.display = "none";
	document.getElementById("buttonRegister").style.display = "none";
	document.getElementById("signIn").style.display = "none";
	document.getElementById("buttonSignIn").style.display = "block";
	document.getElementById("textForSignIn").style.display = "none";
	
}

document.getElementById("buttonRegister").addEventListener("click", createUser);
document.getElementById("signIn").addEventListener("click", signInUser);
*/