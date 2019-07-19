const firebaseConfig = {
	apiKey: "AIzaSyCUsBU3Hw9_o8myi2rql4FKoFxm7lIoRqc",
	authDomain: "laboratoria-sn.firebaseapp.com",
	databaseURL: "https://laboratoria-sn.firebaseio.com",
	projectId: "laboratoria-sn",
	storageBucket: "",
	messagingSenderId: "67746155841",
	appId: "1:67746155841:web:88baef8d3cf9be32"
};

firebase.initializeApp(firebaseConfig);


/*const esCorreoElectronico = correoElectronico => /\S+@\S+/.test(correoElectronico);
 
const correosParaProbar = ["foo@bar.baz", "HolaMundo@ejemplo.com", "ejemplo@asd.com", "mark@facebook.com", "pedro@gmail.com", "asd", "123"];
correosParaProbar.forEach(correo => {
    console.log("¿El correo %s es válido? %s", correo, esCorreoElectronico(correo));
});
*/

window.data = {

createUser : (email, password) => {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  let errorCode = error.code;
	  let errorMessage = error.message;
	  console.log(errorCode);
	  console.log(errorMessage);
	});
},

signIn : (email, password) => {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  let errorCode = error.code;
	  let errorMessage = error.message;
	  console.log(errorCode);
	  console.log(errorMessage);
	});
},

authStateChanged : () => {
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	    // User is signed in.
	    let displayName = user.displayName;
	    let email = user.email;
	    let emailVerified = user.emailVerified;
	    let photoURL = user.photoURL;
	    let isAnonymous = user.isAnonymous;
	    let uid = user.uid;
	    let providerData = user.providerData;
	    // ...
	} else {
    // User is signed out.
    // ...
	}
});
}
};