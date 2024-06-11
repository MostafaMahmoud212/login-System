var signinBth = document.querySelector('.signinBth');
var signupBth = document.querySelector('.signupBth');
var formBox = document.querySelector('.formBox');
var body = document.querySelector('body');


signupBth.onclick = function() {
  formBox.classList.add('active');
  body.classList.add('active');
  }
  signinBth.onclick = function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
    }

var path = '/home.html';
console.log(location.hostname+path);
console.log(location.hostname+path);

var loginEmail = document.querySelector(".loginEmail");
var loginPassword = document.querySelector(".loginPassword");
var loginButtom = document.querySelector(".loginButtom");

var signUpName = document.querySelector(".signUpName");
var signUpEmail = document.querySelector(".signUpEmail");
var signUpPassword = document.querySelector(".signUpPassword");
var signUpRegister = document.querySelector(".signUpRegister");

var logOutButtom = document.querySelector('.logOutButtom');

var authntcation = [];
if (localStorage.getItem('allUsers') == null) {
  authntcation = []
} else {
  authntcation = JSON.parse(localStorage.getItem('allUsers'));
}

function signUp() {
  if (!isSugnUpEmpty()) {
    document.querySelector('.masege2').innerHTML = `
      <h5 class="masege2" style="color: brown;">All inputs are required</h5>`;
    return false;
  }

  var signUpuserData = {
    Name: signUpName.value,
    Email: signUpEmail.value,
    Password: signUpPassword.value,
  }

  if (authntcation.length == 0) {
    authntcation.push(signUpuserData);
    localStorage.setItem("allUsers", JSON.stringify(authntcation));
    document.querySelector('.masege2').innerHTML = `
      <h5 class="masege2" style="color: yellowgreen;">Success</h5>`;
    return true;
  }

  if (!isEmailExistAnther()) {
    document.querySelector('.masege2').innerHTML = `
      <h5 class="masege2" style="color: brown;">Email already exists</h5>`;
  } else {
    authntcation.push(signUpuserData);
    localStorage.setItem("allUsers", JSON.stringify(authntcation));
    document.querySelector('.masege2').innerHTML = `
      <h5 class="masege2" style="color: yellowgreen;">Success</h5>`;
  }
}

signUpRegister.addEventListener("click", signUp);

function isSugnUpEmpty() {
  return signUpName.value !== "" && signUpEmail.value !== "" && signUpPassword.value !== "";
}

function isEmailExistAnther() {
  for (var i = 0; i < authntcation.length; i++) {
    if (authntcation[i].Email.toLowerCase() === signUpEmail.value.toLowerCase()) {
      return false;
    }
  }
  return true;
}

function login() {
  if (!isLoginEmpty()) {
    document.querySelector('.masege').innerHTML = `
      <h5 class="masege" style="color: brown;">All inputs are required</h5>`;
    return false;
  }

  var email2 = loginEmail.value;
  var password2 = loginPassword.value;

  for (var i = 0; i < authntcation.length; i++) {
    if (authntcation[i].Email.toLowerCase() === email2.toLowerCase() && authntcation[i].Password === password2) {
      localStorage.setItem('valedUsername', authntcation[i].Name);
      window.open(location.hostname+path, "_self");
    }
  }

  document.querySelector('.masege').innerHTML = `
    <h5 class="masege" style="color: brown;">Incorrect email or password</h5>`;
}


loginButtom.addEventListener("click", login);

function isLoginEmpty() {
  return loginEmail.value !== "" && loginPassword.value !== "";
}
