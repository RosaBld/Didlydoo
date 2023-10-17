import { createExistingCard } from "./createExistingCard.js";


const updateEventDetails = async (eventId, newName, newDescription, newAuthor) => {
    try {
      const response = await fetch(`http://localhost:3000/api/events/${eventId}`, {
        method: "PATCH", // Use the PATCH method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
          description: newDescription,
          author: newAuthor,
        }),
      });
  
      if (response.ok) {
        // Event details updated successfully, refresh the card list
        createExistingCard(); // Re-fetch and re-render the card list
      } else {
        // Handle any error or show a message if the update failed
        console.error("Failed to update event details");
      }
    } catch (error) {
      console.error("Error updating event details:", error);
    }
  };

export { updateEventDetails };