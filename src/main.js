const logInPage = document.getElementById("logInPage");
const signInPage =document.getElementById("signInPage");
const timeLine = document.getElementById("timeLine");


let username = document.getElementById("enterUsername");
let name = document.getElementById("enterName");
let post = document.getElementById("timelinePost");

let createPostFunction = () => {
	post = document.getElementById("timelinePost").value;
}

let signIn = () => {
	let email = document.getElementById("userEmail").value;
	let password = document.getElementById("userPassword").value;
	window.data.signIn(email, password)
};

let createAcountFunction = () => {
	logInPage.style.display= "none";
	signInPage.style.display = "block";
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

/*
//LOGIN CON GMAIL
gmailAuth.addEventListener("click", (window.firebase.googleAuth));
var provider = new firebase.auth.GoogleAuthProvider();
gmailAuth.addEventListener("click", ()=> {
  firebase.auth().signInWithPopup(provider).then((result)=>{

  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  //container.append("<img src='"+result.user.photoURL+"'));
    console.log(result.user);

})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log(errorMessage);
});
});
*/

let uiConfig = {
 callbacks: {
   signInSuccessWithAuthResult: function(authResult, redirectUrl) {
     // User successfully signed in.
     // Return type determines whether we continue the redirect automatically
     // or whether we leave that to developer to handle.
     return true;
   },
   uiShown: function() {
     // The widget is rendered.
     // Hide the loader.
   }
 },
 // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
 signInFlow: 'popup',
 signInSuccessUrl: 'muro.html',
 signInOptions: [
   // Leave the lines as is for the providers you want to offer your users.
   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
   firebase.auth.EmailAuthProvider.PROVIDER_ID,
 ],
 // Terms of service url.
 tosUrl: 'index.html',
 // Privacy policy url.
 privacyPolicyUrl: '<your-privacy-policy-url>'
};
let ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#authContainer', uiConfig);

//document.getElementById("buttonSignIn").addEventListener("click", signIn);
//document.getElementById("createAcount").addEventListener("click", createAcountFunction);
//document.getElementById("buttonRegister").addEventListener("click", createUser);


//QUIERO QUE SE VEAN LOS CAMBIOS
