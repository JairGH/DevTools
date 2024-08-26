document.addEventListener("DOMContentLoaded", function () {
  const cloudName = "di3nk6hyq";
  const uploadPreset = "l3a5wnco";

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
    imageSkeleton.style.display = "none";
    imageTag.style.display = "block";
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
});
