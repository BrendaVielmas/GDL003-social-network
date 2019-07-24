
document.getElementById("signOut").style.display = "none"; 
document.getElementById("signInPage").style.display = "none"; 
document.getElementById("userInformationInTimeline").style.display = "none"; 

let username = document.getElementById("enterUsername");
let name = document.getElementById("enterName");

let signIn = () => {
	document.getElementById("signOut").style.display = "block"; 
	document.getElementById("userInformationInTimeline").style.display = "block";
	document.getElementById("boxForNameInformation").innerHTML = name;
	document.getElementById("boxForUsernameInformation").innerHTML = username;
	let email = document.getElementById("enterEmail").value;
	let password = document.getElementById("enterPassword").value;
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
	document.getElementById("enterUsername").style.display = "block";
	document.getElementById("enterName").style.display = "block";
	document.getElementById("buttonRegister").style.display = "block";
	document.getElementById("CreateAcount").style.display = "none";
	document.getElementById("buttonSignIn").style.display = "block";
	document.getElementById("buttonSignIn").style.display = "none";
	document.getElementById("textForCreateAcount").style.display = "none";
}

let createUser = () => {
	name = name.value
	username = username.value
	let email = document.getElementById("enterEmail").value;
	let password = document.getElementById("enterPassword").value;
	let saveEmailAndPassword = window.data.createUser(email, password);
	document.getElementById("enterEmail").style.display = "none";
	document.getElementById("enterPassword").style.display = "none";
	document.getElementById("enterUsername").style.display = "none";
	document.getElementById("enterName").style.display = "none";
	document.getElementById("buttonRegister").style.display = "none";
	document.getElementById("CreateAcount").style.display = "none";
	[].forEach.call(document.querySelectorAll(".autenticationSec"), function(element){
    element.style.display = "none";
    });
	[].forEach.call(document.querySelectorAll(".principalHome"), function(element){
    element.style.display = "none";
	});
	let saveNameAndUsername = window.data.createDataOfUsers(name, username);
	console.log ("I am going to save " + username + name + " to Firestore");
	document.getElementById("boxForNameInformation").style.display = "block";
	document.getElementById("boxForNameInformation").innerHTML = name;
	document.getElementById("boxForUsernameInformation").style.display = "block";
	document.getElementById("boxForUsernameInformation").innerHTML = username;
}
let signOutFunction = () => {
	firebase.auth().signOut().then(function() {
		/*document.getElementById("logInPage").style.display = "block";
		document.getElementById("signOut").style.display = "none"; 
		document.getElementById("userInformationInTimeline").style.display = "none";*/
		window.location.reload()
		// Sign-out successful.
	  }).catch(function(error) {
		// An error happened.
	  });

	
}


document.getElementById("buttonSignIn").addEventListener("click", signIn);
document.getElementById("CreateAcount").addEventListener("click", CreateAcountFunction);
document.getElementById("buttonRegister").addEventListener("click", createUser);
document.getElementById("signOut").addEventListener("click", signOutFunction);






