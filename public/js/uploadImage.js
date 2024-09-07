document.addEventListener("DOMContentLoaded", function () {
  const cloudName = "di3nk6hyq";
  const uploadPreset = "l3a5wnco";

  let imgUrl;
  const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      multiple: false,
    },
    // Getting the user image and replace the skeleton.
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
  let createPostForm = document.getElementById("post-form");

  const showSkeleton = () => {
    imageSkeleton.style.display = "block";
    imageTag.style.display = "none";
  };

  const reverseImageStatus = () => {
    imageSkeleton.style.display = "block";
    imageTag.style.display = "none";
  };

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

  // Prevent default form submission on Post button click
  let postButton = document.getElementById("create-post-btn");
  postButton.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
