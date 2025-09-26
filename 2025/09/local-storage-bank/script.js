const settings = document.querySelector(".settings");
const overlaySettings = document.querySelector(".overlay-settings");
const userNameInput = document.getElementById("userName-input");
const userNameDisplay = document.getElementById("userName-display");

let userName = localStorage.getItem("userName") || "caro investidor(a)";

userNameDisplay.textContent = userName;
userNameInput.value = userName;

function showSettings() {
  settings.classList.toggle("hidden");
  overlaySettings.classList.toggle("hidden");
}

function saveSettings() {
  const newUserName = userNameInput.value.trim();
  if (newUserName) {
    userName = newUserName;
    userNameDisplay.textContent = userName;
    localStorage.setItem("userName", userName);
    showSettings();
  }
}
