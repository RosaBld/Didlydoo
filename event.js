// Import DataBase

const fetch = (json) => fetch("/backend/server/db/db.json");
console.log(fetch(json));
fetchName(json.id)
  .then((response) => response.json())
  .then((json) => {
    console.log(json.id);
  });
// Creating a request to the #event button on the index page

function createEvent() {
  const event = document.getElementById("eventButton");
  event.addEventListener("click", (event) => {});
}
