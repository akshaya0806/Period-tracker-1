function startTracking() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !email || !password || !age) {
    alert("Please fill all the fields.");
    return;
  }

  // Show tracker and hide login
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("trackerSection").style.display = "block";
  document.getElementById("userNameDisplay").textContent = name;
}

function calculatePrediction() {
  const lastDateInput = document.getElementById("lastDate").value;
  const lastDate = new Date(lastDateInput);
  const calendar = document.getElementById("calendar");
  const predictionResult = document.getElementById("predictionResult");

  calendar.innerHTML = "";
  predictionResult.innerHTML = "";

  if (isNaN(lastDate)) {
    alert("Please select a valid date.");
    return;
  }

  const daysInCycle = 28;
  const nextPeriod = new Date(lastDate);
  nextPeriod.setDate(lastDate.getDate() + daysInCycle);

  // Format date: "Thursday, 08 August 2025"
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
  const formattedDate = nextPeriod.toLocaleDateString('en-US', options);
  predictionResult.innerHTML = `🔮 Next Period Prediction: <br>${formattedDate}`;

  // Generate 28-day prediction calendar
  for (let i = 1; i <= 28; i++) {
    const date = new Date(lastDate);
    date.setDate(lastDate.getDate() + i);
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.textContent = date.getDate();

    const daysUntil = Math.floor((nextPeriod - date) / (1000 * 60 * 60 * 24));

    if (daysUntil <= 5) {
      dayDiv.classList.add("red");
    } else if (daysUntil <= 10) {
      dayDiv.classList.add("orange");
    } else if (daysUntil <= 15) {
      dayDiv.classList.add("green");
    }

    calendar.appendChild(dayDiv);
  }
}
