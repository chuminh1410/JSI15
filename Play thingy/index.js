const form = document.querySelector("#student-form");
const list = document.querySelector("#student-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;

  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = name;
  row.appendChild(nameCell);

  list.appendChild(row);
});
