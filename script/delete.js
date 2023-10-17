// import { getData } from "./getDatabase.js";
// import { dataId } from "./createExistingCard.js";

// // function to delete the card
// async function deleteCard() {
//   // get the data from the database
//   await getData().then((data) => {
//     // loop through the data
//     data.forEach((element) => {
//       // get the id of the element
//     });

//     // send a DELETE request to the server to delete the selected element
//     try {
//       const response = fetch(`http://localhost:3000/api/events/${dataId}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         // if the deletion was successful, remove the card from the UI
//         selectedElement.remove();
//       } else {
//         // if the deletion failed, log an error message
//         console.error("Failed to delete event");
//       }
//     } catch (error) {
//       console.error("Error deleting event:", error);
//     }
//   });
// }

// // Export the deleteCard function
// export { deleteCard };
