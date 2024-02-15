function validateForm() {
    // Retrieve input values
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    // Check if fields are empty
    if (username === '') {
        // Add is-invalid class to username input
        document.getElementById('username').classList.add('is-invalid');
    } else {
        // Remove is-invalid class from username input
        document.getElementById('username').classList.remove('is-invalid');
    }

    if (password === '') {
        // Add is-invalid class to password input
        document.getElementById('password').classList.add('is-invalid');
    } else {
        // Remove is-invalid class from password input
        document.getElementById('password').classList.remove('is-invalid');
    }

    // Prevent form submission if any field is empty
    if (username === '' || password === '') {
        // Add was-validated class to form to trigger Bootstrap validation styles
        document.getElementById('loginForm').classList.add('was-validated');
        return false; // Prevent form submission
    }

    // If all fields are filled, allow form submission
    return true;
}