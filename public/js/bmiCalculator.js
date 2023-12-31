document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  fetch("/bmicalculator", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("bmi").innerHTML = data.bmi;
      document.getElementById("estimate").innerHTML = data.estimate;
    });
});
