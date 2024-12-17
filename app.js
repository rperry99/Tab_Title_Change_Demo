// Elements
const currentTitleContainer = document.getElementById("currentTitle");
const newTitleContainer = document.getElementById("newTitle");
const intervalAmountContainer = document.getElementById("intervalAmount");

// Get the current title and hold it in a variable.
const currentTitle = document.title;

// Additional Variables
let changeTitleInterval; // Initialize the Interval
const intervalTime = 2000; // Time between intervals, in milliseconds
const unfocusedMessage = "Come Back!"; // Message to show when tab is not the focus.

// Update the HTML to show variables.
currentTitleContainer.innerText = currentTitle;
newTitleContainer.innerText = unfocusedMessage;
intervalAmountContainer.innerText = `${
  intervalTime / 1000
} seconds | ${intervalTime} milliseconds`;

// Detect the change tab changes and change the title.
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    // Every X milliseconds (X = intervalTime), the title will swap between unfocusedMessage and currentTitle
    changedTitleInterval = window.setInterval(function () {
      document.title =
        document.title === unfocusedMessage ? currentTitle : unfocusedMessage;
    }, intervalTime);
  } else {
    // Stop the interval and reset the title to what it was prior.
    clearInterval(changedTitleInterval);
    document.title = currentTitle;
  }
});
