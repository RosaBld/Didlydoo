import { validate } from "./validate.js";

const eventButton = document.getElementById("eventButton");

const result=document.querySelector(".result");

const form = document.createElement("form");
result.appendChild(form);

eventButton.addEventListener("click", () => {
  const form = document.createElement("form");
  result.appendChild(form);

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  form.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "name";
  form.appendChild(titleInput);

  const authorLabel=document.createElement("label");
  authorLabel.textContent="Author:";
  form.appendChild(authorLabel);

  const authorInput=document.createElement("input");
  authorInput.type="text";
  authorInput.name="author";
  form.appendChild(authorInput);

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Dates:";
  form.appendChild(dateLabel);

  const dateInput = document.createElement("input");
  dateInput.type = "text";
  dateInput.name = "dates";
  form.appendChild(dateInput);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  form.appendChild(descriptionLabel);

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  form.appendChild(descriptionInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  document.body.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validate()) {
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        dates: formData.get('dates').split(','),
        author: formData.get('author'),
        description: formData.get('description')
      };
      console.log(data);
      fetch("http://localhost:3000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        form.reset();
      })
      .catch(error => console.error(error));
    }
  });
});

export { eventButton };