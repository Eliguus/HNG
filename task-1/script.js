// Function to get the current day of the week
const getCurrentDayOfWeek = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  return daysOfWeek[today.getDay()];
};

// Function to get the current UTC time in milliseconds
const getCurrentUTCTime = () => {
  return new Date().getTime();
};

// Update the elements with the dynamic data
document.addEventListener("DOMContentLoaded", () => {
  const slackUserNameElement = document.querySelector(
    '[data-testid="slackUserName"]'
  );
  const currentDayOfTheWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  slackUserNameElement.textContent = "naol taye";
  currentDayOfTheWeekElement.textContent = `Current Day of the Week: ${getCurrentDayOfWeek()}`;
  currentUTCTimeElement.textContent = `Current UTC Time: ${getCurrentUTCTime()} ms`;
});

setInterval(() => {
  getCurrentUTCTime();
}, 1);
