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

function setDiv(div, page) {
  document.getElementById(div).onclick = () => redirectToPage(page);
}

setDiv(allLinks.monitorDiv, allLinks.monitorLink);
setDiv(allLinks.keyboardDiv, allLinks.keyboardLink);
setDiv(allLinks.mouseDiv, allLinks.mouseLink);
setDiv(allLinks.headphonesDiv, allLinks.headphonesLink);
setDiv(allLinks.communityDiv, allLinks.communityLink);

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.style.display = "flex";
  }
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.style.display = "none";
  }
}

window.showSidebar = showSidebar;
