const getData = async () => {
  const response = await fetch("http://localhost:3000/api/events", {
    // using get method to get data from database
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

getData();

export { getData };
