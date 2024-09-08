document.addEventListener("DOMContentLoaded", () => {
  const cloudName = "di3nk6hyq";
  const uploadPreset = "l3a5wnco";

  let imgUrl;
  const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      multiple: false,
    },

    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        document
          .getElementById("user-photo")
          .setAttribute("src", result.info.secure_url);
        document.getElementById("user-photo").style.display = "block";
        document.querySelector(".skeleton-placeholder").style.display = "none";
        imgUrl = result.info.secure_url;
        document.getElementById("input-file").value = imgUrl;
        return imgUrl;
      }
    }
  );

  let createPostBtn = document.getElementById("create-btn");
  let imageSkeleton = document.getElementsByClassName(
    "skeleton-placeholder"
  )[0];
  let imageTag = document.getElementById("user-photo");
  // let title = document.getElementById("title-post");
  // let description = document.getElementById("description-post");
  let createPostForm = document.getElementById("post-form");

  const showSkeleton = () => {
    imageSkeleton.style.display = "block";
    imageTag.style.display = "none";
  };

  const reverseImageStatus = () => {
    imageSkeleton.style.display = "block";
    imageTag.style.display = "none";
  };

  document.getElementById("create-post-btn").addEventListener("click", (e) => {
    console.log("hey");
    if (required()) {
      e.target.setAttribute("type", "submit");
    }
  });

  function required() {
    var title = document.getElementById("title-post").value.length;
    var description = document.getElementById("description-post").value.length;

    if (title === 0 || description === 0) {
      alert("Please input a value");
      return false;
    } else if (title >= 4 && description >= 4) {
      return true;
    }
  }

  if (createPostBtn) {
    createPostBtn.addEventListener("click", () => {
      createPostForm.style.visibility = "visible";
      showSkeleton();
      createPostBtn.style.visibility = "hidden";

      let showFiles = document.getElementById("upload_widget");

      showFiles.addEventListener(
        "click",
        () => {
          myWidget.open();
          reverseImageStatus();
        },
        false
      );
    });
  }

  let cancelButton = document.getElementById("cancel-post-btn");
  cancelButton.addEventListener("click", () => {
    createPostForm.style.visibility = "hidden";
    createPostBtn.style.visibility = "visible";
  });
});
