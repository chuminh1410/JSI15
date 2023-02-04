
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");
const signUpLink = document.getElementById("sign-up-link");
const signInLink = document.getElementById("sign-in-link");
const signUpContainer = document.querySelector(".sign-up-container");
const signInContainer = document.querySelector(".sign-in-container");

let users = [];

signUpBtn.addEventListener("click", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password === confirmPassword) {
        const user = new User(name, email, password);
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Sign up successful!");
    } else {
        alert("Passwords do not match.");
    }
});

signInBtn.addEventListener("click", e => {
    e.preventDefault();
    const signInEmail = document.getElementById("sign-in-email").value;
    const signInPassword = document.getElementById("sign-in-password").value;
    const user = users.find(
        user => user.email === signInEmail && user.password === signInPassword
    );
    if (user) {
        alert(`Welcome back, ${user.name}!`);
    } else {
        alert("Incorrect email or password.");
    }
});

signUpLink.addEventListener("click", e => {
    e.preventDefault();
    signUpContainer.style.display = "block";
    signInContainer.style.display = "none";
});

signInLink.addEventListener("click", e => {
    e.preventDefault();
    signInContainer.style.display = "block";
    signUpContainer.style.display = "none";
});

window.addEventListener("load", () => {
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }
});

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const auth = getAuth();

function submit() {
    email = document.getElementById("email").value;
    password = focument.getElementById("password").value
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in sucess
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
document.getElementById("sign-in-btn").addEventListener('click', sumbit)