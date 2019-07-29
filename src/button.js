const signOutButton= () => {
	console.log("in: button.js signOutButton")
	window.data.signOutFunction()
	location.assign("index.html");
};

document.getElementById("signOut").addEventListener("click", signOutButton);
