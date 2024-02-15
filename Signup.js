document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    validateForm();
});

function validateForm() {
    console.log("Hi")
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

   
    if (username.trim() === '') {
        document.getElementById('username').classList.add('is-invalid');
        return false;
    } else {
        document.getElementById('username').classList.remove('is-invalid');
    }

   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email').classList.add('is-invalid');
        return false;
    } else {
        document.getElementById('email').classList.remove('is-invalid');
    }

   
    if (password.length < 8) {
        document.getElementById('password').classList.add('is-invalid');
        return false;
    } else {
        document.getElementById('password').classList.remove('is-invalid');
    }

   
    if (confirmPassword !== password) {
        document.getElementById('confirmPassword').classList.add('is-invalid');
        return false;
    } else {
        document.getElementById('confirmPassword').classList.remove('is-invalid');
    }

    
    //window.location.replace('LoginPage.html');
    return true;
}
