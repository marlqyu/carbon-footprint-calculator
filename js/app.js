document.addEventListener('mousemove', e => {
 Object.assign(document.documentElement, {
  style: `
  --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
  --move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
  `
 })
})

// Get modal elements
var registerModal = document.getElementById('register-modal');
var loginModal = document.getElementById('login-modal');
var registerButton = document.getElementById('register-button');
var loginButton = document.getElementById('login-button');
var closeElements = document.getElementsByClassName('close');

function toggleModal(modal, displayStatus) {
  modal.style.display = displayStatus;
}

registerButton.onclick = function() {
  toggleModal(registerModal, "block");
}

loginButton.onclick = function() {
  toggleModal(loginModal, "block");
}

for (var i = 0; i < closeElements.length; i++) {
  closeElements[i].onclick = function() {
    toggleModal(registerModal, "none");
    toggleModal(loginModal, "none");
  }
}

window.onclick = function(event) {
  if (event.target == registerModal) {
    toggleModal(registerModal, "none");
  }
  if (event.target == loginModal) {
    toggleModal(loginModal, "none");
  }
}

document.getElementById('submit-register').addEventListener('click', function(event) {
  event.preventDefault();
  var username = document.getElementById('register-username').value;
  var password = document.getElementById('register-password').value;

  if (!username || !password) {
    alert('All fields are required!');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long!');
    return;
  }

  if (localStorage.getItem(username)) {
    alert('Username already exists!');
    return;
  }

  localStorage.setItem(username, password);
  alert('Registration successful!');
  window.location.href = 'calculator.html';
});

document.getElementById('submit-login').addEventListener('click', function(event) {
  event.preventDefault();
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;

  if (!username || !password) {
    alert('All fields are required!');
    return;
  }

  if (password === localStorage.getItem(username)) {
    alert('Login successful!');
    window.location.href = 'calculator.html';
  } else {
    alert('Invalid username or password!');
  }
});