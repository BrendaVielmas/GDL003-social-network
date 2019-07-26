const signOutButton= () => {
	window.data.signOutFunction()
	location.assign("index.html");
};

document.getElementById("signOut").addEventListener("click", signOutButton);
