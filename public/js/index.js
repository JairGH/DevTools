let sidebar = document.getElementById("sidebar");
if (sidebar) {
  function showSidebar() {
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
}

const allLinks = {
  monitorLink: "http://localhost:3000/monitors",
  keyboardLink: "http://localhost:3000/keyboards",
  mouseLink: "http://localhost:3000/mouse",
  headphonesLink: "http://localhost:3000/headphones",
  communityLink: "http://localhost:3000/community",
};

let monitorDiv = document.getElementById("monitorClick");
if (monitorDiv) {
  monitorDiv.addEventListener("click", () => {
    window.location.href = allLinks.monitorLink;
  });
}
let keyboardDiv = document.getElementById("keyboardClick");
if (keyboardDiv) {
  keyboardDiv.addEventListener("click", () => {
    window.location.href = allLinks.keyboardLink;
  });
}
let mouseDiv = document.getElementById("mouseClick");
if (mouseDiv) {
  mouseDiv.addEventListener("click", () => {
    window.location.href = allLinks.mouseLink;
  });
}
let headphonesDiv = document.getElementById("headphonesClick");
if (headphonesDiv) {
  headphonesDiv.addEventListener("click", () => {
    window.location.href = allLinks.headphonesLink;
  });
}
let communityDiv = document.getElementById("communityClick");
if (communityDiv) {
  communityDiv.addEventListener("click", () => {
    window.location.href = allLinks.communityLink;
  });
}

let createAccountBtn = document.getElementById("create-account-btn");
let goBackBtn = document.getElementById("back-btn");
const messageForm = document.getElementById("message-card-form");
if (createAccountBtn) {
  createAccountBtn.addEventListener("click", () => {
    console.log("hey");
    const accountForm = document.getElementById("account-card-form");
    messageForm.style.display = "none";
    accountForm.style.display = "flex";
    console.log("hey2");
    goBackBtn.addEventListener("click", () => {
      console.log("hey3");
      accountForm.style.display = "none";
      messageForm.style.display = "flex";
      console.log("hey4");
    });
  });
}
let loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  const goBackBtn = document.getElementById("back-btn");
  loginBtn.addEventListener("click", () => {
    console.log("hey5");
    const loginForm = document.getElementById("login-card-form");
    const loginMessage = document.getElementById("login-message");
    const defaultMessage = document.getElementById("message-card-content");
    defaultMessage.style.display = "none";
    messageForm.style.display = "none";
    loginForm.style.display = "flex";
    loginMessage.style.display = "flex";
    console.log("hey6");
    // ! BUG!!
    goBackBtn.addEventListener("click", () => {
      console.log("hey7");
      loginForm.style.display = "none";
      loginMessage.style.display = "none";
      defaultMessage.style.display = "flex";
      messageForm.style.display = "flex";
      console.log("hey8");
    });
  });
}
