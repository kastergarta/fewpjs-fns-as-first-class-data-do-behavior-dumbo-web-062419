/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

function greet(timeString) {
  const hour = parseInt(timeString, 10);
  if ( hour < 12)
  return "Good Morning"
  if ( hour > 17)
  return "Good Evening"
  return "Good Afternoon"
}
