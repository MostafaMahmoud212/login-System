var path2 = '/index.html';
var logOutButtom = document.querySelector(".logOutButtom");
logOutButtom.addEventListener('click', function(){
  window.open(path2)
});

var username = localStorage.getItem('valedUsername')
if (username && document.querySelector('.usernamee')) {
  document.querySelector('.usernamee').innerHTML = "Welcome : " + username;
}