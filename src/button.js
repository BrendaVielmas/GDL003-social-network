const signOutButton= () => {
	window.data.signOutFunction()
	location.replace("/src/");
};

document.getElementById("signOut").addEventListener("click", signOutButton);
