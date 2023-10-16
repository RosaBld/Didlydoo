import { getData } from "./getDatabase.js";

const cardContainer = document.getElementById("importingCardFromDb");

function createExistingCard() {
  getData()
    .then((data) => {
      console.log(data);
      if (data && data.length > 0) {
        const divHeader = document.createElement("div");
        divHeader.classList.add("header");
        cardContainer.appendChild(divHeader);

        data.forEach((element) => {
          const divCard = document.createElement("div");
          divHeader.appendChild(divCard);
          divCard.classList.add("card");
          const titleEvent = document.createElement("h3");
          const eventDescription = document.createElement("p");
          const eventAuthor = document.createElement("p");
          divCard.appendChild(titleEvent);
          titleEvent.textContent = element.name;
          divCard.appendChild(eventDescription);
          eventDescription.textContent = element.description;
          divCard.appendChild(eventAuthor);
          eventAuthor.textContent = element.author;
          const divDate = document.createElement("div");
          divCard.appendChild(divDate);
          divDate.classList.add("date");
          if (element.dates && element.dates.length > 0) {
            element.dates.forEach((date) => {
              const eventDate = document.createElement("p");
              divDate.appendChild(eventDate);
              eventDate.textContent = date.date;
            });
          }
        });
      }
    })
    .catch((error) => {
      // Handle error
      console.log(error);
    });
}

export { createExistingCard };
