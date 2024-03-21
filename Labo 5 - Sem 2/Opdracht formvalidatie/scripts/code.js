const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerEmail();
	isGetal();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};

const valideerFamilienaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let errFamilienaam = document.getElementById("errFamilienaam");
	let familienaam = txtFamilienaam.value.trim();
	if (familienaam === ""){
		txtFamilienaam.className="";
		errFamilienaam.innerHTML = "Verplicht veld!"
	}
	else if (familienaam.length > 30) {
		txtFamilienaam.className="invalid"; // invalid class instellen
		errFamilienaam.innerHTML = "max. 30 karakters";
	} else {
		txtFamilienaam.className=""; // alle classes verwijderen
		errFamilienaam.innerHTML = "";
	}
};


// Die van de datum weet ik niet.


function valideerEmail(){
	let txtEmail = document.getElementById("txtEmail")
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value.trim();
	let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (email === ""){
		txtEmail.className="";
		errEmail.innerHTML = "Verplicht veld!"
	}
	else {
		if (emailPattern.test(email)) {
			txtEmail.className = "";
			errEmail.innerHTML = "";
		} else {
			txtEmail.className = "";
			errEmail.innerHTML = "geen geldig email adres";
		}
	}
}

const isGetal = () => {
	let txtAtlKinderen = document.getElementById("txtAtlKinderen")
	let errAtlKinderen = document.getElementById("errAtlKinderen");
	let AtlKinderen = txtAtlKinderen.value.trim();
	if (!isNaN(AtlKinderen)){
		if (AtlKinderen < 0){
			txtAtlKinderen.className = "";
			errAtlKinderen.innerHTML = "is geen positief getal";
		}
		else {
			if (AtlKinderen > 99){
				txtAtlKinderen.className = "";
				errAtlKinderen.innerHTML = "is te vruchtbaar";
			}
			else {
				txtAtlKinderen.className = "";
				errAtlKinderen.innerHTML = "";
			}
		}
	}
	else {
		txtAtlKinderen.className = "";
		errAtlKinderen.innerHTML = "is geen positief getal";
	}
}


window.addEventListener("load", setup);