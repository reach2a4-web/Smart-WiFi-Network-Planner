
// Get HTML elements
const usersInput = document.getElementById("users");
const capacityInput = document.getElementById("capacity");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");

// Calculate required access points
calculateBtn.addEventListener("click", function () {

  const users = Number(usersInput.value);
  const capacity = Number(capacityInput.value);

  // Validate inputs
  if (usersInput.value.trim() === "" ||
      capacityInput.value.trim() === "") {
    error.textContent = "Please fill in both fields.";
    result.innerHTML = "";
    return;
  }

  if (!Number.isFinite(users) ||
      !Number.isFinite(capacity) ||
      users < 0 ||
      capacity <= 0 ||
      !Number.isInteger(users) ||
      !Number.isInteger(capacity)) {
    error.textContent =
      "Enter whole numbers. Users must be 0 or more, and capacity must be greater than 0.";
    result.innerHTML = "";
    return;
  }

  error.textContent = "";

  // Calculate APs using ceiling formula
  const accessPoints = Math.ceil(users / capacity);

  // Display results
  result.innerHTML = `
    <h2>Estimated Access Points: ${accessPoints}</h2>
    <p>Total Wi-Fi users: ${users}</p>
    <p>Planned users per AP: ${capacity}</p>
    <p>Calculation: ${users} / ${capacity} = ${users / capacity}</p>
    <h3>Recommendation: ${accessPoints} APs</h3>
    <p>Based on the selected capacity assumption.</p>
  `;
});

// Reset application
resetBtn.addEventListener("click", function () {

  usersInput.value = "";
  capacityInput.value = "";
  error.textContent = "";
  result.innerHTML = "<h2>Results will appear here</h2>";

});
