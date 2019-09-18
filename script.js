menu.onclick = function myMenu(){
	const menu = document.getElementById("myNav");

	if (menu.className === "topnav") {
		x.className += " responsive";
	} else {
		menu.className = "topnav";
	}
}