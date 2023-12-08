//Validation Code for Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
    //email:
    if (email.value == '') {
        document.getElementById("email_error").innerHTML="Please fill up your Email or Phone";
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (email.value.length < 9) {
        document.getElementById("email_error").innerHTML="Email length is less";
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (email.value!='umesh2004@gmail.com') {
        document.getElementById("email_error").innerHTML="Wrong email...!";
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    //password:
    if (password.value == '') {
        document.getElementById("pass_error").innerHTML="Please fill up your Password";
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
    if (password.value.length < 6) {
        document.getElementById("pass_error").innerHTML="Password length is less";
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
    if (password.value != 'umesh2004') {
        document.getElementById("pass_error").innerHTML="Wrong Password...!";
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}



function email_Verify(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
    if (email.value == 'umesh2004@gmail.com') {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function pass_Verify(){
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
    if (password.value == 'umesh2004') {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}
