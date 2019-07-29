let post = document.getElementById("timelinePost");

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