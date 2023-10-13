const main = document.querySelector('main');

const add = document.querySelector('.event').addEventListener('click', addEvent);

function addEvent() {
  const form = document.createElement("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  form.appendChild(titleInput);

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.setAttribute("multiple", "");
  form.appendChild(dateInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  main.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const dates = formData.getAll("date");
    console.log(dates);
    form.reset();
  });
}