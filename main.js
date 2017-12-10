// JavaScript Document
var currentView = "3QTR";
function Grey() {
	"use strict";
	reset();
	document.getElementById("main").src = "Semi_" + currentView + "_Grey.png";
	document.getElementById("grey").setAttribute("Class", "SwatchItem selected");
}
function Green() {
	"use strict";
	reset();
	document.getElementById("main").src = "Semi_" + currentView + "_Green.png";
	document.getElementById("green").setAttribute("Class", "SwatchItem selected");
}
function Red() {
	"use strict";
	reset();
	if(currentView === "Front") {
		document.getElementById("main").src = "Semi_" + currentView + "_Red.jpg";
	}
	else {
		document.getElementById("main").src = "Semi_" + currentView + "_Red.png";
	}
	document.getElementById("red").setAttribute("Class", "SwatchItem selected");
}
function Electric_Blue() {
	"use strict";
	reset();
	document.getElementById("main").src = "Semi_" + currentView + "_Electric_Blue.png";
	document.getElementById("electricblue").setAttribute("Class", "SwatchItem selected");
}
function Blue() {
	"use strict";
	reset();
	document.getElementById("main").src = "Semi_" + currentView + "_Blue.png";
	document.getElementById("blue").setAttribute("Class", "SwatchItem selected");
}
function Chameleon() {
	"use strict";
	reset();
	document.getElementById("main").src = "Semi_" + currentView + "_Chameleon.png";
}
function reset() {
	"use strict";
	document.getElementById("electricblue").setAttribute("Class", "SwatchItem");
	document.getElementById("blue").setAttribute("Class", "SwatchItem");
	document.getElementById("grey").setAttribute("Class", "SwatchItem");
	document.getElementById("green").setAttribute("Class", "SwatchItem");
	document.getElementById("red").setAttribute("Class", "SwatchItem");
}
function ChangeImage() {
	"use strict";
	var name = document.getElementById("main").src;
	var newname = "";
	if(name.indexOf("Front") !== -1) {
		currentView = "3QTR"; 
		newname = name.replace("Front", "3QTR");
		if(name.indexOf(".jpg") !== -1) {
			newname = newname.replace("jpg", "png");
		}
			document.getElementById("main").style.top = null;
		document.getElementById("semi").style.color = null;
		document.getElementById("config").style.color = null;
		document.getElementById("main").style.width = null;
				document.getElementById("semi").style.margin = "30px auto 30px auto";
	}
	else if(name.indexOf("3QTR") !== -1) {
		currentView = "Driving";
		newname = name.replace("3QTR", "Driving");
		document.getElementById("main").style.width = null;
		document.getElementById("main").style.top = "100px";
		document.getElementById("semi").style.color = "black";
		document.getElementById("config").style.color = "black";
		document.getElementById("semi").style.margin = "50px auto 30px auto";
	}
	else if(name.indexOf("Driving") !== -1) {
		currentView = "Front";
		newname = name.replace("Driving", "Front");
		if(name.indexOf(".png") !== -1 && name.indexOf("Red") !== -1) {
			newname = newname.replace("png", "jpg");
		}
			document.getElementById("main").style.top = null;
		document.getElementById("semi").style.color = null;
		document.getElementById("config").style.color = null;
			document.getElementById("main").style.width = "100%";
				document.getElementById("semi").style.margin = "30px auto 30px auto";
	}
	else {
		document.write("Ugh");
	}
	document.getElementById("main").src = newname;
}
function ChangeImageBk() {
	"use strict";
	var name = document.getElementById("main").src;
	var newname = "";
	if(name.indexOf("Front") !== -1) {
		currentView = "Driving";
		newname = name.replace("Front", "Driving");
		if(name.indexOf(".jpg") !== -1) {
			newname = newname.replace("jpg", "png");
		}
		document.getElementById("main").style.width = null;
		document.getElementById("main").style.top = "100px";
		document.getElementById("semi").style.color = "black";
		document.getElementById("config").style.color = "black";
		document.getElementById("semi").style.margin = "50px auto 30px auto";
	}
	else if(name.indexOf("3QTR") !== -1) {
		currentView = "Front";
		newname = name.replace("3QTR", "Front");
			document.getElementById("main").style.width = "100%";
				document.getElementById("main").style.top = null;
		document.getElementById("semi").style.color = null;
		document.getElementById("config").style.color = null;
				document.getElementById("semi").style.margin = "30px auto 30px auto";
	}
	else if(name.indexOf("Driving") !== -1) {
		currentView = "3QTR";
		newname = name.replace("Driving", "3QTR");
		if(name.indexOf(".png") !== -1 && name.indexOf("Red") !== -1) {
			newname = newname.replace("png", "jpg");
		}				
		document.getElementById("main").style.top = null;
		document.getElementById("semi").style.color = null;
		document.getElementById("config").style.color = null;
			document.getElementById("main").style.width = null;
				document.getElementById("semi").style.margin = "30px auto 30px auto";
	}
	else {
		document.write("Ugh");
	}
	document.getElementById("main").src = newname;
}