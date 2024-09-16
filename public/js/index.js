// Toggle side menu for mobile users
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

// Main page div redirect
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

// Create account form display
let createAccountBtn = document.getElementById("create-account-btn");
let goBackBtn = document.getElementById("back-btn-account");
const messageForm = document.getElementById("message-card-form");
if (createAccountBtn) {
  createAccountBtn.addEventListener("click", () => {
    const accountForm = document.getElementById("account-card-form");
    messageForm.style.display = "none";
    accountForm.style.display = "flex";
    if (goBackBtn) {
      goBackBtn.addEventListener("click", () => {
        accountForm.style.display = "none";
        messageForm.style.display = "flex";
      });
    }
  });
}

// Login account for display
let loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const loginForm = document.getElementById("login-card-form");
    const loginMessage = document.getElementById("login-message");
    const defaultMessage = document.getElementById("message-card-content");
    let goBackBtn2 = document.getElementById("back-btn-login");
    defaultMessage.style.display = "none";
    messageForm.style.display = "none";
    loginForm.style.display = "flex";
    loginMessage.style.display = "flex";
    if (goBackBtn2) {
      goBackBtn2.addEventListener("click", () => {
        loginForm.style.display = "none";
        loginMessage.style.display = "none";
        defaultMessage.style.display = "flex";
        messageForm.style.display = "flex";
      });
    }
  });
}

// Delete post
let deletePostBtns = document.querySelectorAll("#delete-btn");
if (deletePostBtns) {
  deletePostBtns.forEach((deletePostBtn) => {
    deletePostBtn.addEventListener("click", () => {
      console.log("hey");
      const postId = deletePostBtn.getAttribute("data-id");

      fetch(`/community/all/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            deletePostBtn.closest(".user-card").remove();
            window.location.reload();
          } else {
            alert("This post does not belong to you.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred.");
        });
    });
  });
}

// Edit post
let editPostBtns = document.querySelectorAll("#edit-btn");
if (editPostBtns) {
  editPostBtns.forEach((editPostBtn) => {
    editPostBtn.addEventListener("click", (event) => {
      console.log("hey");
      let userCard = event.target.closest(".user-card");
      let editForm = userCard.querySelector("#edit-post");
      let hideOnEdit = userCard.querySelectorAll(".hide-on-edit");
      let cancelEditBtn = userCard.querySelector("#cancel-edit-btn");
      let saveEditBtn = userCard.querySelector("#save-edit-btn");
      let deleteBtn = userCard.querySelector("#delete-btn");

      editPostBtn.style.display = "none";
      deleteBtn.style.display = "none";

      if (editForm) {
        editForm.style.display = "flex";
        cancelEditBtn.style.display = "flex";
        saveEditBtn.style.display = "flex";
        hideOnEdit.forEach((element) => {
          element.style.display = "none";
        });
      }
      saveEditBtn.addEventListener("click", () => {
        const postId = saveEditBtn.getAttribute("data-id");
        const title = userCard.querySelector("#title-post").value;
        const description = userCard.querySelector("#description-post").value;

        fetch(`/community/all/${postId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }), // Pass the updated data
        })
          .then((response) => {
            if (response.ok) {
              window.location.reload();
            } else {
              alert("This post does not belong to you.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred.");
          });
      });
    });
  });
}

let cancelEditBtns = document.querySelectorAll("#cancel-edit-btn");
if (cancelEditBtns) {
  cancelEditBtns.forEach((cancelEditBtn) => {
    cancelEditBtn.addEventListener("click", (event) => {
      console.log("hey1");
      let userCard = event.target.closest(".user-card");
      let editForm = userCard.querySelector("#edit-post");
      let hideOnEdit = userCard.querySelectorAll(".hide-on-edit");
      let editBtn = userCard.querySelector("#edit-btn");
      let deleteBtn = userCard.querySelector("#delete-btn");
      let saveEditBtn = userCard.querySelector("#save-edit-btn");

      cancelEditBtn.style.display = "none";
      saveEditBtn.style.display = "none";
      editBtn.style.display = "flex";
      deleteBtn.style.display = "flex";

      if (editForm) {
        editForm.style.display = "none";
        hideOnEdit.forEach((element) => {
          element.style.display = "block";
        });
      }
    });
  });
}
