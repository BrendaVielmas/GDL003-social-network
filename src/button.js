const homePage = document.getElementById("homePage");
const profilePage = document.getElementById("timeLine");
let post = document.getElementById("timelinePost");

const db = firebase.firestore()
db.collection("Users").get().then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
			console.log(doc.data());
			let postOfUser = doc.data();
			document.getElementById("sectionWithPost").innerHTML += `
			<section  class = "postInBox">
			<p>Fecha: ${postOfUser.date}</p>
			<p>Estado: ${postOfUser.message}</p>
			<button class="button" id="buttonForEditpost">Editar</button>
			<button class="button" id="buttonForDeletePost">Eliminar</button>
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

const goToProfilePage= ()=>{
homePage.style.display= "none";
profilePage.style.display= "block";
};

document.getElementById("signOut").addEventListener("click", signOutButton);
document.getElementById("buttonForCreatePost").addEventListener("click", createPostFunction);
document.getElementById("goProfilePage").addEventListener("click", goToProfilePage);
