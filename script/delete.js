const deleteEvent = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/events/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
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
  };

// Export the deleteEvent function
export { deleteEvent };
