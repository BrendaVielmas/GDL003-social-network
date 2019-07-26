const signOutButton= () => {
	window.data.signOutFunction()
	location.replace("/");
};

document.getElementById("signOut").addEventListener("click", signOutButton);
