let firstName = null;
let lastName = null;
let age = null;
let gender = null;
let email = null;

function saveInfo() {
    firstName = document.getElementById('user-first-name').innerText;
    lasttName = document.getElementById('user-last-name').innerText;
    age = int(document.getElementById('user-age').innerText);
    gender = document.getElementById('user-gender').innerText;
    email = document.getElementById('user-email').innerText;

    alert(firstName + " " + lastName);
    alert(age);
    alert(gender);
    alert(email);
}