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
    if(doc.data().uid === uid ){
						// doc.data() is never undefined for query doc snapshots
						console.log(doc.id, " => ", doc.data());

						let postOfUser = doc.data();
						document.getElementById("sectionWithPost").innerHTML += `
						<section  class = "postInBox">
						<p>Fecha: ${postOfUser.dates}</p>
						<p>Nombre: ${postOfUser.name}</p>
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
					}
					 else {
						 console.log(doc.id, " => ", doc.data());

 						let postOfUser = doc.data();
 						document.getElementById("sectionWithPost").innerHTML += `
 						<section  class = "postInBox">
 						<p>Fecha: ${postOfUser.dates}</p>
						<p>Nombre: ${postOfUser.name}</p>
 						<p>Estado: ${postOfUser.message}</p>
 						</section>
 						<section id="buttonForLike">
 				    <button > &#x1F49B;  </button>
 			    	<p>Me gusta ${postOfUser.likes}</p>
 			      </section>`

             }
					});
		});


				let uid = localStorage.getItem("uid");
				console.log(uid);

				let dbUid = firebase.firestore()
				    dbUid.collection("Users")
					  .onSnapshot((mnsj) =>{
						document.getElementById("sectionWithUidPost").innerHTML = "";

						mnsj.forEach((doc) => {
							if(doc.data().uid === uid ){
												// doc.data() is never undefined for query doc snapshots
												console.log(doc.id, " => ", doc.data());

												let postOfUser = doc.data();
												document.getElementById("sectionWithUidPost").innerHTML += `
												<section  class = "postInBox">
												<p>Fecha: ${postOfUser.dates}</p>
												<p>Nombre: ${postOfUser.name}</p>
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
							}
						})
					});

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

const goToHomePage = () =>{
	homePage.style.display= "block";
	profilePage.style.display= "none";
}

document.getElementById("signOut").addEventListener("click", signOutButton);
document.getElementById("buttonForCreatePost").addEventListener("click", createPostFunction);
document.getElementById("buttonForCreatePostPerfil").addEventListener("click", createPostFunctionProfile);
document.getElementById("goProfilePage").addEventListener("click", goToProfilePage);
document.getElementById("goHomePage").addEventListener("click", goToHomePage);
