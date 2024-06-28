function redirectToMonitors() {
  window.location.href = "http://localhost:3000/monitors";
}
document.getElementById("monitorClick").onclick = redirectToMonitors;

function redirectToKeyboards() {
  window.location.href = "http://localhost:3000/keyboards";
}
document.getElementById("keyboardClick").onclick = redirectToKeyboards;

function redirectToMouse() {
  window.location.href = "http://localhost:3000/mouse";
}
document.getElementById("mouseClick").onclick = redirectToMouse;

function redirectToHeadphones() {
  window.location.href = "http://localhost:3000/headphones";
}
document.getElementById("headphonesClick").onclick = redirectToHeadphones;

function redirectToCommunity() {
  window.location.href = "http://localhost:3000/community";
}
document.getElementById("communityClick").onclick = redirectToCommunity;
