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

document.body.appendChild(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const dates = formData.getAll("date");
  const data = {
    title: formData.get("title"),
    dates: dates
  };
  fetch("http://localhost:3000/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  form.reset();
});

export { form };