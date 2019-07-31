const homePage = document.getElementById("homePage");
const profilePage = document.getElementById("timeLine")
const post = document.querySelector(".post");
const postProfile = document.getElementById("timelinePostPerfil");


let db = firebase.firestore()
		db.collection("Users").where("status", "==", "Publico")
		.onSnapshot((mnsj) =>{

		document.getElementById("sectionWithPost").innerHTML = "";

		mnsj.forEach((doc) => {
						// doc.data() is never undefined for query doc snapshots
						console.log(doc.id, " => ", doc.data());

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
document.querySelector(".btnToPost").addEventListener("click", createPostFunction);
document.getElementById("buttonForCreatePostPerfil").addEventListener("click", createPostFunction);
document.getElementById("goProfilePage").addEventListener("click", goToProfilePage);
