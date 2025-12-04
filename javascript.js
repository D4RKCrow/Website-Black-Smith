document.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    const showLoginBtn = document.getElementById('showLogin');
    const showSignupBtn = document.getElementById('showSignup');

    // Toggle forms
    showLoginBtn.addEventListener('click', () => {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });
    showSignupBtn.addEventListener('click', () => {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // LOGIN
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUser').value.trim();
        const password = document.getElementById('loginPass').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            sessionStorage.setItem('loggedInUser', username);
            alert("Login successful!");
            window.location.href = "listofweapons.html";
        } else {
            alert("Invalid username or password.");
        }
    });

    // SIGNUP
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('newUser').value.trim();
        const password = document.getElementById('newPass').value;
        const confirmPassword = document.getElementById('confirmPass').value;

        if (!username || !password) return alert("Enter username and password.");
        if (password !== confirmPassword) return alert("Passwords do not match.");

        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(u => u.username === username)) return alert("Username already taken.");

        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));

        sessionStorage.setItem('loggedInUser', username);
        alert("Sign up successful!");
        window.location.href = "listofweapons.html";
    });

    // Auto redirect if already logged in
    if (sessionStorage.getItem('loggedInUser')) {
        window.location.href = "listofweapons.html";
    }
});
