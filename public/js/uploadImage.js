const cloudName = "di3nk6hyq";
const uploadPreset = "l3a5wnco";
// const cloudinary = require("cloudinary").v2;

// let imgUrl;
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
      // imgUrl = result.info.secure_url;
      // console.log(imgUrl);
      // return imgUrl;
    }
  }
);
// const getImgUrl = () => {
//   return new Promise((resolve, reject) => {
//     if (imgUrl) {
//       resolve(imgUrl);
//     } else {
//       const checkUrl = setInterval(() => {
//         if (imgUrl) {
//           clearInterval(checkUrl);
//           resolve(imgUrl);
//         }
//       }, 100);
//     }
//   });
// };

let createPostBtn = document.getElementById("create-btn");
let imageSkeleton = document.getElementsByClassName("skeleton-placeholder")[0];
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

// module.exports = getImgUrl;
