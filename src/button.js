let post = document.getElementById("timelinePost");

const db = firebase.firestore()
db.collection("Users").get().then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
			console.log(doc.data());
			let x = doc.data();
			document.getElementById("sectionWithPost").innerHTML += `
			<section class = "timelineWithPosts"> 
			<p>Fecha: ${x.date}</p>
			<p>Estado: ${x.message}</p>
			</section>`;
	});
});

const signOutButton= () => {
	console.log("in: button.js signOutButton")
	window.data.signOutFunction()
	location.assign("index.html");
};

let createPostFunction = (docRef) => {
	let status = document.querySelector("[type=radio]:checked").value;
	console.log("in: button.js createPostFunction");
	let message = post.value;
	window.data.createPost(message, status);
	
};

document.getElementById("signOut").addEventListener("click", signOutButton);
document.getElementById("buttonForCreatePost").addEventListener("click", createPostFunction);
