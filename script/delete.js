// get the button element

// import { getData } from "./getDatabase";

const deleteButton = document
  .getElementById("deleteButton")
  .addEventListener("click", deleteCard);

// add a click event listener to the button
function deleteCard() {
  async function deleteEvent() {
    try {
      const response = await fetch(
        `http://localhost:3000/api/events/${data.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      r;

      if (response.ok) {
        // Event deleted successfully, remove the card from the UI
        divHeader.removeChild(divCard);
      } else {
        // Handle any error or show a message if the deletion failed
        console.error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  }
  return deleteEvent;
}

// Export the deleteEvent function
export { deleteCard };
