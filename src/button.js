let post = document.getElementById("timelinePost");
const db = firebase.firestore()
db.collection("Users").get().then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
			console.log(doc.data());
	});
});

/*const showPostsInTimeLine = () => {	
	var docRef = db.collection("cities").doc("SF");
	docRef.get().then(function(doc) {
		if (doc.exists) {
			console.log("Document data:", doc.data());
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
	
};*/


const signOutButton= () => {
	console.log("in: button.js signOutButton")
	window.data.signOutFunction()
	location.assign("index.html");
};

let createPostFunction = () => {
	console.log("in: main.js createPostFunction");
	let message = post.value;
	window.data.createPost(message);
};

document.getElementById("signOut").addEventListener("click", signOutButton);
document.getElementById("buttonForCreatePost").addEventListener("click", createPostFunction);
//document.getElementById("buttonForCreatePost").addEventListener("click", showPostsInTimeLine);