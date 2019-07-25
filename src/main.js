const logInPage = document.getElementById("logInPage");
const signInPage =document.getElementById("signInPage");
const timeLine = document.getElementById("timeLine");


let username = document.getElementById("enterUsername");
let name = document.getElementById("enterName");



let signIn = () => {
	let email = document.getElementById("userEmail").value;
	let password = document.getElementById("userPassword").value;
	window.data.signIn(email, password)
};

let createAcountFunction = () => {
	logInPage.style.display= "none";
	signInPage.style.display = "block"
};

let createUser = () => {
	let email = document.getElementById("enterEmail").value;
	let password = document.getElementById("enterPassword").value;
	window.data.createUser(email, password);
  signInPage.style.display= "none";
	logInPage.style.display = "block";
};

const signOutFunction= () => {
	window.data.signOutFunction()
	timeLine.style.display= "none";
	userInformationInTimeline.style.display="none";
	logInPage.style.display= "block";
};

document.getElementById("buttonSignIn").addEventListener("click", signIn);
document.getElementById("createAcount").addEventListener("click", createAcountFunction);
document.getElementById("buttonRegister").addEventListener("click", createUser);
document.getElementById("signOut").addEventListener("click", signOutFunction);
