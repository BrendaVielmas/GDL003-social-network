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

const observer = ()=>{
	console.log('usuario activo')
};

window.data = {

	validation : () =>{
		var user = firebase.auth().currentUser;
	  user.sendEmailVerification().then(function() {
	  console.log("Enviando correo electrónico");
	  // Email sent.
	  }).catch(function(error) {
	  console.log("Error de verificación");
	  // An error happened.
	  });
	},

	createUser : (email, password) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
	  .then((user) => {
			window.data.validation()
	})
		.catch(function(error) {
		  // Handle Errors here.
		  let errorCode = error.code;
		  let errorMessage = error.message;
		  console.log(errorCode);
		  console.log(errorMessage);

		});
	},

	goTimeLine : ()=> {
		document.getElementById("logInPage").style.display="none";
		document.getElementById("timeLine").style.display="block";
		document.getElementById("signOut").style.display="block";
	},


createDataOfUsers : (name, username) => {
	let db = firebase.firestore();
	// Add a second document with a generated ID.
	db.collection("Users").add({
		"name" : name,
		"username" : username
	})
	.then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
		console.error("Error adding document: ", error);
	});
	db.collection("Users").get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
				console.log(`${doc.id} => ${doc.data()}`);
		});
	});
},

signIn : (email, password) => {
	firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
		console.log(user);
		console.log("usuario activo");
		if(user.user.emailVerified){
			window.data.goTimeLine()
		}
	})
	.catch(function(error) {
	  // Handle Errors here.
	  let errorCode = error.code;
	  let errorMessage = error.message;
	  console.log(errorCode);
	  console.log(errorMessage);
	});
},

signOutFunction : () => {
	firebase.auth().signOut().then(function() {
		window.location.reload()
		// Sign-out successful.
	  }).catch(function(error) {
		// An error happened.
	});
},
}
