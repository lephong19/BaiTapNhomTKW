// ==========================
// LẤY ELEMENT
// ==========================

const form = document.querySelector("form");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

const email = document.getElementById("email");
const phone = document.getElementById("phone");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const terms = document.getElementById("terms");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");


// ==========================
// SUBMIT FORM
// ==========================

form.addEventListener("submit", function(event) {

    // Ngăn form reload trang
    event.preventDefault();


    // ==========================
    // KIỂM TRA INPUT RỖNG
    // ==========================

    if (firstName.value === "") {
        alert("Vui lòng nhập tên");
        return;
    }

    if (lastName.value === "") {
        alert("Vui lòng nhập họ");
        return;
    }

    if (email.value === "") {
        alert("Vui lòng nhập email");
        return;
    }

    if (phone.value === "") {
        alert("Vui lòng nhập số điện thoại");
        return;
    }

    if (password.value === "") {
        alert("Vui lòng nhập mật khẩu");
        return;
    }

    if (confirmPassword.value === "") {
        alert("Vui lòng xác nhận mật khẩu");
        return;
    }


    // ==========================
    // KIỂM TRA ĐỘ DÀI PASSWORD
    // ==========================

    if (password.value.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự");
        return;
    }


    // ==========================
    // KIỂM TRA PASSWORD
    // ==========================

    if (password.value !== confirmPassword.value) {
        alert("Mật khẩu xác nhận không giống nhau");
        return;
    }


    // ==========================
    // KIỂM TRA TERMS

    if (!terms.checked) {
        alert("Bạn phải đồng ý với điều khoản");
        return;
    }


    // ĐĂNG KÝ THÀNH CÔNG

    console.log("Tên:", firstName.value);
    console.log("Họ:", lastName.value);
    console.log("Email:", email.value);
    console.log("Số điện thoại:", phone.value);

    alert("Đăng ký thành công!");
});


// SHOW / HIDE PASSWORD

togglePassword.addEventListener("click", function() {

    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }

});


// SHOW / HIDE CONFIRM PASSWORD

toggleConfirmPassword.addEventListener("click", function() {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    }
    else {
        confirmPassword.type = "password";
    }

});