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
	console.log('user')
	/*firebase.auth().onAuthStateChanged((user) => {
		console.log(user)
		/*if (user){
			goTimeLine(user);
		console.log("existe usuario activo");
			 console.log(user);
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
	}
);*/
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
		document.getElementById("timeLine").style.display="block"
	},

/*	authStateChanged : () => {
	firebase.auth().onAuthStateChanged((user) => {
		if (user){
			goTimeLine(user);
		console.log("existe usuario activo");
			 console.log(user);
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
	},
	);
	},
*/
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
		console.log(user)
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
/*const itsEmail = email => /\S+@\S+/.test(email);

const correosParaProbar = ["foo@bar.baz", "HolaMundo@ejemplo.com", "ejemplo@asd.com", "mark@facebook.com", "pedro@gmail.com", "asd", "123"];
correosParaProbar.forEach(email => {
    console.log("¿El correo %s es válido? %s", email, itsEmail(email));
});*/
