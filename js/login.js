const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");


// Submit form
form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Email:", email.value);
    console.log("Password:", password.value);

    if (email.value === "") {
        alert("Chưa nhập email");
        return;
    }

    if (password.value === "") {
        alert("Chưa nhập password");
        return;
    }

    alert("Đăng nhập thành công");
});


// Show / Hide password
togglePassword.addEventListener("click", function() {

    if (password.type === "password") {
        password.type = "text";
    } 
    else {
        password.type = "password";
    }

});