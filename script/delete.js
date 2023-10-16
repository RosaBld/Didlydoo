// delete.js

import { getData } from "./getDatabase.js";
import { createExistingCard } from "./createExistingCard.js";

function deleteEvent() {
  const deleteButton = document.getElementById("deleteButton");
  // add a click event listener to the button
  deleteButton.addEventListener("click", async () => {
    getData()
    .then((data.JSON => {

      
    }).catch((err) => {
      
    });
  });
export { deleteEvent }
