const { Carousel } = require("bootstrap");

// For mobile
function showSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "" || sidebar.style.display === "none") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sideMenuBtn = document.getElementById("sideMenuBtn");
  if (sideMenuBtn) {
    sideMenuBtn.addEventListener("click", showSidebar);
  } else {
    console.log("Something went wrong!");
  }
});
// Create Account Form
let createAccountBtn = document.getElementById("create-account-btn");
createAccountBtn.addEventListener("click", () => {
  const accountForm = document.getElementById("create-account-form");
  const messageForm = document.getElementById("firstOptionDiv");
  accountForm.style.display = "flex";
});

const allLinks = {
  monitorLink: "http://localhost:3000/monitors",
  keyboardLink: "http://localhost:3000/keyboards",
  mouseLink: "http://localhost:3000/mouse",
  headphonesLink: "http://localhost:3000/headphones",
  communityLink: "http://localhost:3000/community",
};

let monitorDiv = document.getElementById("monitorClick");
monitorDiv.addEventListener("click", () => {
  window.location.href = allLinks.monitorLink;
});
let keyboardDiv = document.getElementById("keyboardClick");
keyboardDiv.addEventListener("click", () => {
  window.location.href = allLinks.keyboardLink;
});
let mouseDiv = document.getElementById("mouseClick");
mouseDiv.addEventListener("click", () => {
  window.location.href = allLinks.mouseLink;
});
let headphonesDiv = document.getElementById("headphonesClick");
headphonesDiv.addEventListener("click", () => {
  window.location.href = allLinks.headphonesLink;
});
let communityDiv = document.getElementById("communityClick");
communityDiv.addEventListener("click", () => {
  window.location.href = allLinks.communityLink;
});
