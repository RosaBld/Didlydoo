import { getData } from "./getDatabase.js";

const cardContainer = document.getElementById("importingCardFromDb");

function createExistingCard() {
  getData()
    .then((data) => {
      console.log(data);
      if (Array.isArray(data)) {
        data.forEach((element) => {
          const divHeader = document.createElement("div");
          const divDate = document.createElement("div");
          const titleEvent = document.createElement("h3");
          const eventDescription = document.createElement("p");
          const eventAuthor = document.createElement("p");
          console.log(element);

          cardContainer.appendChild(divHeader);
          cardContainer.appendChild(divDate);
          divHeader.appendChild(titleEvent);
          titleEvent.textContent = element.title;
          divHeader.appendChild(eventDescription);
          eventDescription.textContent = element.description;
          divHeader.appendChild(eventAuthor);
          eventAuthor.textContent = element.author;

          for (let date = 0; date < 5; date++) {
            const elementDate = element.dates[date * 8];
            if (elementDate) {
              divDate.appendChild(document.createElement("p"));
              divDate.childNodes[date].textContent = elementDate;
            }
          }
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

createExistingCard();

export { createExistingCard };
