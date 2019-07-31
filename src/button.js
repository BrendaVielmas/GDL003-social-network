let post = document.getElementById("timelinePost");


const db = firebase.firestore()
db.collection("Users").get().then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
			console.log(doc.data());
			let postOfUser = doc.data();
			document.getElementById("sectionWithPost").innerHTML += `
			<section  class = "postInBox">
			<p>Fecha: ${postOfUser.dates}</p>
			<p>Estado: ${postOfUser.message}</p>
			<section id="buttonForLike">
				<button > &#x1F49B;  </button>
				<p>Me gusta ${postOfUser.likes}</p>
			</section>
				<button class="button" id="buttonForEditpost">Editar</button>
				<button class="button" id="buttonForDeletePost">Eliminar</button>
			</section>`;

	});
});

/*document.getElementById("buttonForLike").addEventListener('click', () => {
		alert('asdasd');
	});*/


const signOutButton= () => {
	console.log("in: button.js signOutButton");
	window.data.signOutFunction();
	location.assign("index.html");
};

let createPostFunction = (docRef) => {
	let status = document.querySelector("[type=radio]:checked").value;
	console.log("in: button.js createPostFunction");
	let message = post.value;

	let day = new Date().toLocaleDateString();
	let hour = new Date().toLocaleTimeString();

	let dates = " ";
		dates = day + " " + hour;
		console.log(dates);

	window.data.createPost(message, status, dates);
};


document.getElementById("signOut").addEventListener("click", signOutButton);
document.getElementById("buttonForCreatePost").addEventListener("click", createPostFunction);
