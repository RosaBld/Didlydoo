import { getData } from "./getDatabase.js";

const cardContainer = document.getElementById("importCardFromDb");
function createExistingCard() {
  getData().then((data) => {
    console.log(data);
    data.forEach((element) => {
      const divHeader = document.createElement("div");
      const divDate = document.createElement("div");
      const titleEvent = document.createElement("h3");
      const eventDescription = document.createElement("p");
      const eventAuthor = document.createElement("p");

      cardContainer.appendChild(divHeader);
      cardContainer.appendChild(divDate);
      divHeader.appendChild(titleEvent);
      titleEvent.innerText = element.title;
      divHeader.appendChild(eventDescription);
      eventDescription.innerText = element.description;
      divHeader.appendChild(eventAuthor);
      eventAuthor.innerText = element.author;
    });
  });
}
createExistingCard();

export { createExistingCard };
