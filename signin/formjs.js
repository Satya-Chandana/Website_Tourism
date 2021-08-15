const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const num = document.getElementById('num');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const fullname = document.getElementById('fullname');

/*form.addEventListener('submit', e => {
	e.preventDefault();
	
    if (checkInputs) {
        alert("Form submitted succesfully");
    }

	checkInputs();
    
});*/

function checkInputs() {
	// trim to remove the whitespaces
    const fullnameValue = fullname.value.trim();
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const numValue = num.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    
	
    if(fullnameValue === '') {
		setErrorFor(fullname, 'Name cannot be blank');
		return false;
	} else {
		setSuccessFor(fullname);
	}

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		return false;
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		return false;
	} else {
		setSuccessFor(email);
	}

    if(numValue === '') {
		setErrorFor(num, 'Phone number cannot be blank');
		return false;
	} else if (!isnum(numValue)) {
		setErrorFor(num, 'Not a valid input');
		return false;
	} else {
		setSuccessFor(num);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		return false;
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
		return false;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
		return false;
	} else{
		setSuccessFor(password2);
	}

	alert("Form submitted succesfully");
    return true;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isnum(num) {
	return /^(([0-9]{5}-[0-9]{5}))$/.test(num);
}











