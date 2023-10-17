import { getData } from "./getDatabase.js";
import { updateEventDetails } from "./pathDatabase.js";
import { addAttendees } from "./addAttendees.js";

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
          const divButton = document.createElement("div");
          const updateButton = document.createElement("button");
          const deleteButton = document.createElement("button");
          deleteButton.addEventListener("click", deleteCard);
          divHeader.appendChild(divCard);
          divCard.appendChild(divButton);
          divButton.appendChild(deleteButton);
          divButton.appendChild(updateButton);
          //update Button
          updateButton.addEventListener("click", () => {
            const eventID = element.id;
            const newName = titleEvent.textContent;
            const newDescription = eventDescription.textContent;
            const newAuthor = eventAuthor.textContent;
          
            // Check if any of the fields are empty or unchanged before making the update.
            if (newName.trim() !== "" && newDescription.trim() !== "" && newAuthor.trim() !== "") {
              updateEventDetails(eventID, newName, newDescription, newAuthor);
            } else {
              alert("Please fill in all fields before updating.");
            }
          });   
          //update Button
          deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="32px" height="32px"><path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"/></svg>';
          updateButton.innerHTML = '<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 420.827 420.827"><g><g><path d="M210.29,0C156,0,104.43,20.693,65.077,58.269C25.859,95.715,2.794,146.022,0.134,199.921c-0.135,2.734,0.857,5.404,2.744,7.388c1.889,1.983,4.507,3.105,7.244,3.105h45.211c5.275,0,9.644-4.098,9.979-9.362c4.871-76.214,68.553-135.914,144.979-135.914c80.105,0,145.275,65.171,145.275,145.276c0,80.105-65.17,145.276-145.275,145.276c-18.109,0-35.772-3.287-52.501-9.771l17.366-15.425c2.686-2.354,3.912-5.964,3.217-9.468c-0.696-3.506-3.209-6.371-6.592-7.521l-113-32.552c-3.387-1.149-7.122-0.407-9.81,1.948c-2.686,2.354-3.913,5.963-3.218,9.467L69.71,403.157c0.696,3.505,3.209,6.372,6.591,7.521c3.383,1.147,7.122,0.408,9.81-1.946l18.599-16.298c31.946,18.574,68.456,28.394,105.581,28.394c116.021,0,210.414-94.392,210.414-210.414C420.705,94.391,326.312,0,210.29,0z"/><path d="M195.112,237.9h118.5c2.757,0,5-2.242,5-5v-30c0-2.757-2.243-5-5-5h-83.5v-91c0-2.757-2.243-5-5-5h-30c-2.757,0-5,2.243-5,5v126C190.112,235.658,192.355,237.9,195.112,237.9z"/></g></g></svg>';
          divCard.classList.add("card");
          divButton.classList.add("divbutton");
          const titleEvent = document.createElement("h3");
          titleEvent.setAttribute("contenteditable", "true");
          const eventDescription = document.createElement("p");
          eventDescription.setAttribute("contenteditable", "true");
          const eventAuthor = document.createElement("p");
          eventAuthor.setAttribute("contenteditable", "true");
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
                        if (a.available === true) {
                          const greenCheckmark = document.createElement("span");
                          greenCheckmark.textContent = 'V';
                          greenCheckmark.style.color = 'green';
                          td.appendChild(greenCheckmark);
                        } else {
                          const redX = document.createElement("span");
                          redX.textContent = 'X';
                          redX.style.color = 'red';
                          td.appendChild(redX);
                        }
                        tr.appendChild(td);
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
          addAttendees(element, element, divCard);
        });
      }
    })
    .catch((error) => {
      // Handle error
      console.log(error);
    });
}

export { createExistingCard };
