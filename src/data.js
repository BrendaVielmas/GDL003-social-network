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
firebase.auth().onAuthStateChanged(function(user) {
	console.log("in: data.js onAuthStateChanged");
	if (user && user.emailVerified) {
		 console.log(user.emailVerified);
		 console.log("usuario conectado");
		 console.log(user);
			// User is signed in.
			let displayName = user.displayName;
			let email = user.email;
			let emailVerified = user.emailVerified;
			let photoURL = user.photoURL;
			let isAnonymous = user.isAnonymous;
			let uid = user.uid;
			let providerData = user.providerData;
		const obj ={
			name : user.displayName,
			email : user.email,
			photo : user.photoURL
		}
		document.getElementById("profile").innerHTML= obj.name+ '<br>' + obj.email + '<br>'+`<img src=${obj.photo }>`;
			// ...
	} else {
		// User is signed out.
		console.log("usuario desconectado");
	};
})


window.data = {

	acountValidation : (user) =>{
		console.log("in: data.js acountValidation")
		user.sendEmailVerification().then(() => {
			console.log("Enviando correo electrónico");
			// Email sent.
		}).catch((error) => {
			console.log("Error de verificación");
			// An error happened.
	  	});
	},

	createUser : (email, password, name) => {
		console.log("in: data.js createUser")
		firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
			user = firebase.auth().currentUser;
			window.data.acountValidation(user)
		}).then(() => {
		    user.updateProfile({
		      displayName: name,
		      photoURL: "images/profilePhoto.jpg"
		    }).then(() => {
		    	// User updated
		    })
		    .catch((error) => {
				console.log(error.message);
			});
		}).catch((error) => {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
		});
	},

	goTimeLine : ()=> {
		console.log("in: data.js goTimeLine")
		location.assign("muro.html");
	},

	createPost : (message) => {
		uid = firebase.auth().currentUser.uid;
		console.log("in data.js createPost");
		let db = firebase.firestore();
		// Add a second document with a generated ID.
		db.collection("Users").add({
			"message" : message,
			"uid" : uid
		})
		.then((docRef) => {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
	},

	signIn : (email, password) => {
		console.log("in: data.js signIn")
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then((user) => {
			console.log(user);
			console.log("usuario activo");
			if(user.user.emailVerified){
				window.data.goTimeLine()
			}
		})
		.catch((error) => {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
		});
	},

	signOutFunction : () => {
		console.log("in: data.js signOutFunction")
		firebase.auth().signOut().then(() => {
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
		});
	},
}
