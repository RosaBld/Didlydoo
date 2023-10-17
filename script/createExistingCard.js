import { getData } from "./getDatabase.js";

const cardContainer = document.getElementById("importingCardFromDb");
function createExistingCard() {
  //recupérer le data
  getData()
    .then((data) => {
      console.log(data);
      //sectionner le data pour récupérer chaque item de l'array
      if (data && data.length > 0) {
        const divHeader = document.createElement("div");
        divHeader.classList.add("header");
        cardContainer.appendChild(divHeader);
        //Mise en place du nom, author, description et bouton delete
        data.forEach((element) => {
          const divCard = document.createElement("div");
          const deleteButton = document.createElement("button");
          deleteButton.addEventListener("click", deleteCard);
          divHeader.appendChild(divCard);
          divHeader.appendChild(deleteButton);
          deleteButton.textContent = "Delete";
          divCard.classList.add("card");
          const titleEvent = document.createElement("h3");
          const eventDescription = document.createElement("p");
          const eventAuthor = document.createElement("p");
          divCard.appendChild(titleEvent);
          let dataId = element.id;

          titleEvent.textContent = element.name;
          divCard.appendChild(eventDescription);
          eventDescription.textContent = element.description;
          divCard.appendChild(eventAuthor);
          eventAuthor.textContent = element.author;
          const table = document.createElement("table");
          divCard.appendChild(table);
          const thead = document.createElement("thead");
          const tbody = document.createElement("tbody");
          const trHeader = document.createElement("tr");
          const trDates = document.createElement("tr");
          table.appendChild(thead);
          table.appendChild(tbody);
          thead.appendChild(trHeader);
          thead.appendChild(trDates);

          async function deleteCard() {
            // get the data from the database
            await getData().then((data) => {
              // loop through the data
              data.forEach((element) => {
                // get the id of the element
              });

              // send a DELETE request to the server to delete the selected element
              try {
                const response = fetch(
                  `http://localhost:3000/api/events/${dataId}`,
                  {
                    method: "DELETE",
                  }
                );

                if (response.ok) {
                  // if the deletion was successful, remove the card from the UI
                  selectedElement.remove();
                } else {
                  // if the deletion failed, log an error message
                  console.error("Failed to delete event");
                }
              } catch (error) {
                console.error("Error deleting event:", error);
              }
            });
          }

          // Create attendeesName element
          const attendeesName = document.createElement("td");
          attendeesName.textContent = "Attendees";
          trDates.appendChild(attendeesName);
          //display les dates dans le tableau
          const dates = new Set();
          element.dates.forEach((date) => {
            dates.add(date.date);
          });
          // Selectionner les dates displonibles des users
          const attendees = new Set();
          element.dates.forEach((date) => {
            date.attendees.forEach((attendee) => {
              attendees.add(attendee.name);
            });
          });

          const sortedDates = Array.from(dates).sort();
          const firstDate = sortedDates[0];
          //On vient ajouter les noms dans les colonnes
          attendees.forEach((attendee) => {
            const tr = document.createElement("tr");
            tbody.appendChild(tr);
            const attendeesName = document.createElement("td");
            attendeesName.textContent = attendee;
            tr.appendChild(attendeesName);
            // On verifie les disponibilités par users
            let dateAdded = false;
            element.dates.forEach((d) => {
              if (d.date === firstDate) {
                d.attendees.forEach((a) => {
                  if (a.name === attendee) {
                    const td = document.createElement("td");
                    td.textContent = a.available;
                    tr.appendChild(td);
                    dateAdded = true;
                  }
                });
              }
            });

            sortedDates.forEach((date) => {
              if (date !== firstDate) {
                const td = document.createElement("td");
                tr.appendChild(td);
                element.dates.forEach((d) => {
                  if (d.date === date) {
                    d.attendees.forEach((a) => {
                      if (a.name === attendee) {
                        td.textContent = a.available;
                      }
                    });
                  }
                });
              } else if (!dateAdded) {
                const td = document.createElement("td");
                tr.appendChild(td);
              }
            });
          });

          sortedDates.forEach((date) => {
            const th = document.createElement("th");
            th.textContent = date;
            trDates.appendChild(th);
          });
        });
      }
    })
    .catch((error) => {
      // Handle error
      console.log(error);
    });
}

export { createExistingCard };
