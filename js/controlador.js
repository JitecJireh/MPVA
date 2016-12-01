function Seguridad(){
	var user1 = document.getElementById("nameUser").value;
	var password1 = document.getElementById("password").value;

	if (user1 == "Gloria Gutierrez" && password1 == "Jehova1234") {
		alert("Bienvenida Administradora");
			location.href = "administracion.html";
	} else if (user1 == "Eliseo Garcia" && password1 == "Jehova1234") {
		alert("Bienvenido Programador");
			location.href = "administracion.html";
	} else if (user1 == "Veronica Garcia" && password1 == "Jehova1234") {
		alert("Bienvenida Veronica (Aliada)");
			location.href = "administracion.html";
	} else if (user1 == "" && password1 == "") {
		alert("Porfavor ingrese sus datos");
	} 
	else {
		alert("Error, intentelo de nuevo");
	}

	document.getElementById("nameUser").value = "";
	document.getElementById("password").value = "";

}