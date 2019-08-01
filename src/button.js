const homePage = document.getElementById("homePage");
const profilePage = document.getElementById("timeLine")
const post = document.getElementById("timelinePost");
const postProfile = document.getElementById("timelinePostPerfil");
let nameInProfile = document.getElementById("profile");

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
						<p>Fecha: ${postOfUser.dates}</p>
						<p>Estado: ${postOfUser.message}</p>
						<button class="buttonEdit" id="buttonForEditpost">Editar</button>
							<button class="buttonDelete" id="${doc.id}">Eliminar</button>
						</section>
						<section id="buttonForLike">
				    <button > &#x1F49B;  </button>
			    	<p>Me gusta ${postOfUser.likes}</p>
			      </section>`
            	let buttons = document.getElementsByClassName("buttonDelete");
						  for (let i = 0; i < buttons.length; i++) {
							buttons[i].addEventListener("click", deleteButton);
            }
					});
		})

const deleteButton = () => {
	// messageToDelete =
	let idOfPost = event.target.id;
	confirm("¿Estás seguro que deseas eliminar esta publicación?");
	window.data.deleteFunction(idOfPost);
};

const signOutButton= () => {
	console.log("in: button.js signOutButton");
	window.data.signOutFunction();
	location.assign("index.html");
};

const createPostFunction = (docRef) => {
	console.log("in: button.js createPostFunction");
	// let name = nameInProfile.value;
	// console.log(name);
	let status = document.querySelector("[type=radio]:checked").value;
	let message = post.value;
	let day = new Date().toLocaleDateString();
	let hour = new Date().toLocaleTimeString();
	let dates = " ";
		dates = day + " " + hour;
		console.log(dates);
	window.data.createPost(message, status, dates);

};

const createPostFunctionProfile = (docRef) => {
	console.log("in: button.js createPostFunction");
	// let name = nameInProfile.value;
	// console.log(name);
	let status = document.querySelector("[type=radio]:checked").value;
	let message = postProfile.value;
	let day = new Date().toLocaleDateString();
	let hour = new Date().toLocaleTimeString();
	let dates = " ";
		dates = day + " " + hour;
		console.log(dates);
	window.data.createPost(message, status, dates);

};

const goToProfilePage= ()=>{
homePage.style.display= "none";
profilePage.style.display= "block";
};

document.getElementById("signOut").addEventListener("click", signOutButton);
document.querySelector(".btnToPost").addEventListener("click", createPostFunction);
document.getElementById("buttonForCreatePostPerfil").addEventListener("click", createPostFunctionProfile);
document.getElementById("goProfilePage").addEventListener("click", goToProfilePage);
