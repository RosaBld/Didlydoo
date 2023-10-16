import { getData } from "./getDatabase.js";

const cardContainer = document.getElementById("importingCardFromDb");

function createExistingCard() {
  getData().then((data) => {
    console.log(data);
    if (data && data.length > 0) {
      const divHeader = document.createElement("div");
      divHeader.classList.add("header");
      cardContainer.appendChild(divHeader);

      // Create attendeesName element
      const attendeesName = document.createElement("p");
      divHeader.appendChild(attendeesName);

      data
        .forEach((element) => {
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
          const thead = document.createElement("thead");
          const tbody = document.createElement("tbody");
          const trHeader = document.createElement("tr");
          const tr = document.createElement("tr");
          const divDate = document.createElement("div");
          divCard.appendChild(divDate);
          divDate.appendChild(thead);
          thead.appendChild(trHeader);
          divDate.appendChild(tbody);
          tbody.appendChild(tr);

          divDate.classList.add("date");
          if (element.dates && element.dates.length > 0) {
            element.dates.forEach((date, index) => {
              const dateHeader = document.createElement("th");
              trHeader.appendChild(dateHeader);
              dateHeader.textContent = date.date;

              if (date.attendees && date.attendees.length > 0) {
                date.attendees.forEach((attendee) => {
                  if (index === 0) {
                    // Set attendeesName text content
                    const attendeesName = document.createElement("td");
                    const attendeesValue = document.createElement("td");
                    tr.appendChild(attendeesName);
                    tr.appendChild(attendeesValue);
                    attendeesName.textContent = attendee.name;
                    attendeesValue.textContent = attendee.available;
                  }
                  const attendeesValue = document.createElement("td");
                  tbody.appendChild(attendeesValue);
                  if (attendee.available === null) {
                    attendee.available = "X";
                    attendeesValue.textContent = attendee.available;
                  } else if (attendee.available === true) {
                    attendee.available = "V";
                    attendeesValue.textContent = attendee.available;
                  } else if (attendee.available === false) {
                    attendee.available = "X";
                    attendeesValue.textContent = attendee.available;
                  }
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
  });
}

export { createExistingCard };
