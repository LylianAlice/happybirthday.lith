const myPopup1 = document.getElementById("myPopup1");
const myPopup0 = document.getElementById("myPopup0");


function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "" || password == "") {
		alert("Username or Password cannot be empty!");

	}
	else if (username == "nganbancualith@gmail.com" && password == "3.1415926535897") {
		myPopup1.style.display = "block";
		myPopup1.addEventListener("click", () => {
			myPopup1.style.display = "none";
			window.location.href = "hpbd.html";
		});
		
	}
	else {
		myPopup0.style.display = "block";
		myPopup0.addEventListener("click", () => {
			myPopup0.style.display = "none";
		});
	}


}