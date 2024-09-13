const signupBtn = document.getElementById('signup-btn');
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');

signupBtn.addEventListener('click', () => {
	loginContainer.style.display = 'none';
	signupContainer.style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	if (username === 'user' && password === 'pass') {
		window.location.href = 'todo-list.html';
	} else {
		alert('Invalid username or password');
	}
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.getElementById('signup-username').value;
	const password = document.getElementById('signup-password').value;

	// Call your signup API or perform signup logic here
	alert(`Signed up successfully! Welcome, ${username}!`);
});

