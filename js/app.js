document.addEventListener('mousemove', e => {
 Object.assign(document.documentElement, {
  style: `
  --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
  --move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
  `
 })
})

var modal = document.getElementById("myModal");
var btn = document.querySelector(".button-start");
var span = document.getElementsByClassName("close")[0];

function toggleModal(displayStatus) {
  modal.style.display = displayStatus;
}

btn.onclick = function() {
  toggleModal("block");
}

span.onclick = function() {
  toggleModal("none");
}

window.onclick = function(event) {
  if (event.target == modal) {
    toggleModal("none");
  }
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('newUsername').value;
  var password = document.getElementById('newPassword').value;

  // Check if the username already exists
  if (localStorage.getItem(username)) {
    alert('Username already exists!');
    return;
  }

  // Store the user's password under their username
  localStorage.setItem(username, password);
  alert('Registration successful!');
  window.location.href = 'calculator.html'; // Redirect to calculator.html
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if the entered password matches the stored password
  if (password === localStorage.getItem(username)) {
    alert('Login successful!');
    window.location.href = 'calculator.html'; // Redirect to calculator.html
  } else {
    alert('Invalid username or password!');
  }
});