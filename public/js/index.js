// For mobile
function showSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "" || sidebar.style.display === "none") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sideMenuBtn = document.getElementById("sideMenuBtn");
  if (sideMenuBtn) {
    sideMenuBtn.addEventListener("click", showSidebar);
  }
});
// Create Account Form
document.addEventListener("click", function () {
  const createAccountBtn = document.getElementById;
});

// Main page div
function setDiv(div, page) {
  document.getElementById(div).onclick = () => redirectToPage(page);
}
const allLinks = {
  monitorLink: "http://localhost:3000/monitors",
  monitorDiv: "monitorClick",
  keyboardLink: "http://localhost:3000/keyboards",
  keyboardDiv: "keyboardClick",
  mouseLink: "http://localhost:3000/mouse",
  mouseDiv: "mouseClick",
  headphonesLink: "http://localhost:3000/headphones",
  headphonesDiv: "headphonesClick",
  communityLink: "http://localhost:3000/community",
  communityDiv: "communityClick",
};

function redirectToPage(page) {
  window.location.href = page;
}

setDiv(allLinks.monitorDiv, allLinks.monitorLink);
setDiv(allLinks.keyboardDiv, allLinks.keyboardLink);
setDiv(allLinks.mouseDiv, allLinks.mouseLink);
setDiv(allLinks.headphonesDiv, allLinks.headphonesLink);
setDiv(allLinks.communityDiv, allLinks.communityLink);
