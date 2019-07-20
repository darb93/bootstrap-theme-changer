var body1 = document.getElementById("body");
var navColour=document.getElementById("rm");
var currentJumboClass;
var currentClass;
var currentNavClass;	
function toggleDarkLight() {
	body1 = document.getElementById("body");
	navColour=document.getElementById("rm");
	currentClass = body1.className;
	currentNavClass = navColour.className;
	body1.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
	navColour.className= currentNavClass== "navbar navbar-expand-lg navbar-light bg-light" ? "navbar navbar-expand-lg navbar-dark bg-dark": "navbar navbar-expand-lg navbar-light bg-light";
	//console.log(navColour.className);
	if(navColour.className=="navbar navbar-expand-lg navbar-dark bg-dark"){
		localStorage.setItem("themeColour","dark-mode");          
	}
	if(navColour.className=="navbar navbar-expand-lg navbar-light bg-light"){
		
		localStorage.setItem("themeColour","light-mode");  
	}
}
function initTheme(){
	var initThemeColour=localStorage.getItem("themeColour");
	var slider=document.getElementById("slideThree");
	if(initThemeColour=="light-mode" || initThemeColour==null){
		console.log(initThemeColour +" light worked");
		slider.checked = false;
		body1 = document.getElementById("body");
		navColour=document.getElementById("rm");
		body1.className = "light-mode";
		navColour.className="navbar navbar-expand-lg navbar-light bg-light";
	}
	else{
		console.log(initThemeColour+" dark worked");
		body1 = document.getElementById("body");
		slider.checked = true;
		navColour=document.getElementById("rm");
		body1.className = "dark-mode";
		navColour.className="navbar navbar-expand-lg navbar-dark bg-dark";
		
	}
}