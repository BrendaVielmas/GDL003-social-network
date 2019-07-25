document.getElementById("signOut").style.display = "none";
document.getElementById("signInPage").style.display = "none";
document.getElementById("userInformationInTimeline").style.display = "none";
let timeLine = document.getElementById("timeLine");
let autSec = document.getElementById("autSec");

let username = document.getElementById("enterUsername");
let name = document.getElementById("enterName");



let signIn = () => {
	let email = document.getElementById("enterEmail").value;
	let password = document.getElementById("enterPassword").value;
	window.data.signIn(email, password)
};
/*	document.getElementById("signOut").style.display = "block";
	document.getElementById("userInformationInTimeline").style.display = "block";
	document.getElementById("boxForNameInformation").innerHTML = name;
	document.getElementById("boxForUsernameInformation").innerHTML = username;
	let email = document.getElementById("enterEmail").value;
	let password = document.getElementById("enterPassword").value;
	let saveEmailAndPassword = window.data.signIn(email, password);
	document.getElementById("enterEmail").style.display = "none";
	document.getElementById("enterPassword").style.display = "none";
	document.getElementById("textForCreateAcount").style.display = "none";
	document.getElementById("createAcount").style.display = "none";
	document.getElementById("buttonSignIn").style.display = "none";
	[].forEach.call(document.querySelectorAll(".autenticationSec"), function(element){
    element.style.display = "none";
    });
	[].forEach.call(document.querySelectorAll(".principalHome"), function(element){
    element.style.display = "none";
	});
}
*/
let createAcountFunction = () => {
	logInPage.style.display= "none";
	signInPage.style.display = "block"
/*	document.getElementById("logInPage").style.display = "block";
	document.getElementById("createAcount").style.display = "none";
	document.getElementById("buttonSignIn").style.display = "none";
	document.getElementById("textForCreateAcount").style.display = "none";
	document.getElementById("signInPage").style.display = "block";
*/}

let createUser = () => {
//	let name = name.value
//	let username = username.value
	let email = document.getElementById("enterEmail").value;
	let password = document.getElementById("enterPassword").value;
	window.data.createUser(email, password);
  signInPage.style.display= "none";
	logInPage.style.display = "block";
/*	name = name.value
	username = username.value
	let email = document.getElementById("enterEmail").value;
	let password = document.getElementById("enterPassword").value;
	let saveEmailAndPassword = window.data.createUser(email, password);
	document.getElementById("enterEmail").style.display = "none";
	document.getElementById("enterPassword").style.display = "none";
	document.getElementById("enterUsername").style.display = "none";
	document.getElementById("enterName").style.display = "none";
	document.getElementById("buttonRegister").style.display = "none";
	document.getElementById("createAcount").style.display = "none";
	[].forEach.call(document.querySelectorAll(".autenticationSec"), function(element){
    element.style.display = "block";
    });
	[].forEach.call(document.querySelectorAll(".principalHome"), function(element){
    element.style.display = "block";
	});
	let saveNameAndUsername = window.data.createDataOfUsers(name, username);
	console.log ("I am going to save " + username + name + " to Firestore");
	document.getElementById("boxForNameInformation").style.display = "block";
	document.getElementById("boxForNameInformation").innerHTML = name;
	document.getElementById("boxForUsernameInformation").style.display = "block";
  document.getElementById("boxForUsernameInformation").innerHTML = username;
}
}
*/


};

const signOutFunction= () => {
	window.data.signOutFunction()
	timeLine.style.display= "none";
	userInformationInTimeline.style.display="none";
	logInPage.style.display= "block";
};

/*
const goTimeLine = (user) => {
	if(user.emailVerified){
	console.log("mensajito");
		logInPage.style.display="none"
		timeLine.style.display = "block";
		signOut.style.display = "block";
;
console.log("usuario verificado hola!!!");

};
};
*/



document.getElementById("buttonSignIn").addEventListener("click", signIn);
document.getElementById("createAcount").addEventListener("click", createAcountFunction);
document.getElementById("buttonRegister").addEventListener("click", createUser);
document.getElementById("signOut").addEventListener("click", signOutFunction);
