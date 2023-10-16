export function validate() {
    const descriptionInput = document.querySelector('input[name="description"]');
    const descriptionValue = descriptionInput.value;
    let isValid = true;
    if (descriptionValue.length === 0) {
      alert("Description must be 256 characters or less.");
      isValid=false;
    } else if (descriptionValue.length >= 256) {
      alert("Description must be 256 characters or less.");
      isValid=false;
    }
  
    const titleInput = document.querySelector('input[name="name"]');
    const titleValue = titleInput.value;
    if (titleValue.length === 0) {
      alert("Title must be 256 characters or less.");
      isValid=false;
    } else if (titleValue.length >= 256) {
      alert("Title must be 256 characters or less.");
      isValid=false;
    }
    
    const authorInput = document.querySelector('input[name="author"]');
    const authorValue = authorInput.value;
    if (authorValue.length === 0) {
      alert("Author must be 256 characters or less.");
      isValid=false;
    } else if (authorValue.length >= 256) {
      alert("Author must be 256 characters or less.");
      isValid=false;
    } 
  
    const dateInput = document.querySelector('input[name="dates"]');
    const dateValue = dateInput.value;
    if (dateValue.length === 0) {
      isValid=false;
    } else if (dateValue.length >= 256) {
      alert("Dates must be 256 characters or less.");
      isValid=false;
    }
    return isValid;
}