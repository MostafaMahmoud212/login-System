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

var baseUrl = '';
var parts = location.pathname.split('/');
for (var i = 0; i < parts.length; i++) {
  baseUrl += '/' + parts[i];
}

var username = localStorage.getItem('valedUsername')
if (username && document.querySelector('.usernamee')) {
  document.querySelector('.usernamee').innerHTML = "Welcome " + username;
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

  if (authntcation.length == 0) {``
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
      location.replace(baseUrl + '/home.html');
      return;
    }
  }

  document.querySelector('.masege').innerHTML = `
    <h5 class="masege" style="color: brown;">Incorrect email or password</h5>`;
}

loginButtom.addEventListener("click", login);

function isLoginEmpty() {
  return loginEmail.value !== "" && loginPassword.value !== "";
}

function logout() {
  localStorage.removeItem('valedUsername');
  location.replace(baseUrl + '/index.html');
}

if (logOutButtom) {
  logOutButtom.addEventListener("click", logout);
}














// // all inputs
// var signupName = document.getElementById('signupName')
// var signupEmail = document.getElementById('signupEmail')
// var signupPassword = document.getElementById('signupPassword')
// var signinEmail = document.getElementById('signinEmail')
// var signinPassword = document.getElementById('signinPassword')
//     // to get base url (localhost)
// var pathparts = location.pathname.split('/');
// var baseURL = ''
// for (var i = 0; i < pathparts.length - 1; i++) {
//     baseURL += '/' + pathparts[i]
// }
// console.log(baseURL);

// // to say welcome in home page
// var username = localStorage.getItem('sessionUsername')
// if (username) {
//     document.getElementById('username').innerHTML = "Welcome " + username
// }

// var signUpArray = []
// if (localStorage.getItem('users') == null) {
//     signUpArray = []
// } else {
//     signUpArray = JSON.parse(localStorage.getItem('users'))
// }




// //for check inputs is empty or not
// function isEmpty() {

//     if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
//         return false
//     } else {
//         return true
//     }
// }
// // for check email is exist
// function isEmailExist() {
//     for (var i = 0; i < signUpArray.length; i++) {
//         if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
//             return false
//         }
//     }
// }
// function signUp() {
//     if (isEmpty() == false) {
//         document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
//         return false
//     }
//     // to store all value as object
//     var signUp = {
//         name: signupName.value,
//         email: signupEmail.value,
//         password: signupPassword.value,
//     }
//     if (signUpArray.length == 0) {
//         signUpArray.push(signUp)
//         localStorage.setItem('users', JSON.stringify(signUpArray))

//         document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
//         return true
//     }
//     if (isEmailExist() == false) {
//         document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

//     } else {
//         signUpArray.push(signUp)
//         localStorage.setItem('users', JSON.stringify(signUpArray))
//         document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'

//     }


// }




// // ============= for login================
// //for check inputs is empty or not
// function isLoginEmpty() {

//     if (signinPassword.value == "" || signinEmail.value == "") {
//         return false
//     } else {
//         return true
//     }
// }



// function login() {
//     if (isLoginEmpty() == false) {
//         document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
//         return false
//     }
//     var password = signinPassword.value
//     var email = signinEmail.value
//     for (var i = 0; i < signUpArray.length; i++) {
//         if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
//             localStorage.setItem('sessionUsername', signUpArray[i].name)
//             if (baseURL == '/') {
//                 location.replace('https://' + location.hostname + '/home.html')

//             } else {
//                 location.replace(baseURL + '/home.html')

//             }
//         } else {
//             document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
//         }
//     }

// }




// // for logout
// function logout() {
//     localStorage.removeItem('sessionUsername');
// }