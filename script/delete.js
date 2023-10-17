// get the button element

import { getData } from "./getDatabase.js";

// const deleteButton = document
//   .getElementById("deleteButton")
//   .addEventListener("click", deleteCard);
// const dataId = getData().then((data) => {
//   data.forEach((element) => {
//     element.id;
//   });
// });
// console.log(dataId);

// // add a click event listener to the button
// function deleteCard() {
//   async function deleteEvent() {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/events/${dataId}`,
//         {
//           method: "DELETE",
//         }
//       );
//       if (response.ok) {
//         // Event deleted successfully, remove the card from the UI
//         divHeader.removeChild(divCard);
//       } else {
//         // Handle any error or show a message if the deletion failed
//         console.error("Failed to delete event");
//       }
//     } catch (error) {
//       console.error("Error deleting event:", error);
//     }
//   }
//   return deleteEvent;
// }

// get the delete button element

// add a click event listener to the button

// define the dataId variable
let dataId;

// function to delete the card
async function deleteCard() {
  // get the data from the database
  await getData().then((data) => {
    // loop through the data
    data.forEach((element) => {
      // get the id of the element
      dataId = element.id;
    });
    console.log(dataId);

    // send a DELETE request to the server to delete the selected element
    try {
      const response = fetch(`http://localhost:3000/api/events/${dataId}`, {
        method: "DELETE",
      });

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

// Export the deleteCard function
export { deleteCard };
