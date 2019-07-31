let post = document.getElementById("timelinePost");

let nameInProfile = document.getElementById("profile");
const db = firebase.firestore()

// db.collection("Users").get().then((querySnapshot) => {
// 	querySnapshot.forEach((doc) => {
// 			console.log(doc.id);
// 			let postOfUser = doc.data();
// 			document.getElementById("sectionWithPost").innerHTML += `
// 			<section  class = "postInBox"> 
// 			<p>Fecha: ${postOfUser.date}</p>
// 			<p>Estado: ${postOfUser.message}</p>
// 			<button class="button" id="buttonForEditpost">Editar</button>
// 			<button class="buttonDelete" id="${doc.id}">Eliminar</button>
// 			</section>`
// 			let buttons = document.getElementsByClassName("buttonDelete");
// 			for (let i = 0; i < buttons.length; i++) {
// 				buttons[i].addEventListener("click", deleteButton);
// 			}
// 	});	

// });

	db.collection('Users').onSnapshot( (msj) => {
		document.getElementById("sectionWithPost").innerHTML = ''
		msj.forEach(doc => {
			console.log(doc.id);
						let postOfUser = doc.data();
						document.getElementById("sectionWithPost").innerHTML += `
						<section  class = "postInBox"> 
						<p>Fecha: ${postOfUser.date}</p>
						<p>Estado: ${postOfUser.message}</p>
						<button class="buttonEdit" id="buttonForEditpost">Editar</button>
						<button class="buttonDelete" id="${doc.id}">Eliminar</button>
						</section>`
						let buttons = document.getElementsByClassName("buttonDelete");
						for (let i = 0; i < buttons.length; i++) {
							buttons[i].addEventListener("click", deleteButton);
						}
		});
	} )
	

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


document.getElementById("signOut").addEventListener("click", signOutButton);
document.getElementById("buttonForCreatePost").addEventListener("click", createPostFunction);
