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

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
