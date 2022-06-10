console.log('Tut 50 - Form Validation Project');

let username = document.getElementById('username');
username.classList.remove('is-invalid')
let email = document.getElementById('email');
let select = document.getElementById('select');
let address = document.getElementById('address');
let phone = document.getElementById('phone');
// console.log(username, email, phone);

// We'll use this in submit if condition to check whether all fields are valid
let isValidUsername = false;
let isValidEmail = false;
let isValidPhone = false;

let success = document.getElementById('success');   // Grab the success div
success.classList.remove('show');
hideSuccess();      // Function to initially remove the div from DOM

let failure = document.getElementById('failure');   // Grab the failure div
failure.classList.remove('show');
hideFailure();      // Function to initially remove the div from DOM

username.addEventListener('blur', () => {
    console.log('username is blurred');
    let regex = /^[a-zA-Z]([0-9a-zA-Z]{2,10}$)/
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Matched');
        username.classList.remove('is-invalid');
        isValidUsername = true;
    }
    else {
        console.log('Not Matched');
        username.classList.add('is-invalid');
        isValidUsername = false;
    }
});

email.addEventListener('blur', () => {
    console.log('email is blurred');
    let regex = /^([_\-\.a-zA-Z]+)@([_\-\.a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Email Matched');
        email.classList.remove('is-invalid');
        isValidEmail = true;
    }
    else {
        console.log('Email Not Matched');
        email.classList.add('is-invalid');
        isValidEmail = false;
    }
});

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Phone num Matched');
        phone.classList.remove('is-invalid');
        isValidPhone = true;
    }
    else {
        console.log('Phone num not Matched');
        phone.classList.add('is-invalid');
        isValidPhone = false;
    }
});

let submit = document.getElementById('submit');
submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('submit clicked');

    console.log(isValidUsername, isValidEmail, isValidPhone);
    if (isValidUsername && isValidEmail && isValidPhone) {
        username.value = '';
        email.value = '';
        select.value = '';
        address.value = '';
        phone.value = '';
        success.classList.add('show');
        failure.classList.remove('show');
        showSuccess();
        hideFailure();
    }
    else {
        success.classList.remove('show');
        failure.classList.add('show');
        showFailure();
        hideSuccess();
    }
});

function showSuccess() {
    success.style.display = '';
    console.log('showSuccess');
};
function hideSuccess() {
    success.style.display = 'none';
    console.log('hideSuccess');
};
function showFailure() {
    failure.style.display = '';
    console.log('showFailure');
};
function hideFailure() {
    failure.style.display = 'none';
    console.log('hideFailure');
};