// You can add JavaScript code to validate user input or make other functionalities work.
// Here is an example code to log in the user using the console:

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`Username: ${username.value}, Password: ${password.value}`);
});
