// GET all the elements IDs
const pageBio = document.getElementById("pageBio");
const pageHome = document.getElementById("pageHome");

const tabBio = document.getElementById("tabBio");
const tabHome = document.getElementById("tabHome");

const fileBio = document.getElementById("fileBio");
const fileHome = document.getElementById("fileHome");

//Initial state
pageBio.style.display = "none";
pageHome.style.display = "block";

const showPage = (pageName) => {
  console.log("HI!", pageName);
  switch (pageName) {
    case "home":
      pageBio.style.display = "none";
      pageHome.style.display = "block";

      tabBio.classList.remove("pageActive");
      tabHome.classList.add("pageActive");

      fileBio.classList.remove("treeLineActive");
      fileHome.classList.add("treeLineActive");

      console.log("Bye!", pageName);
      break;

    case "bio":
      pageBio.style.display = "block";
      pageHome.style.display = "none";

      tabBio.classList.add("pageActive");
      tabHome.classList.remove("pageActive");

      fileBio.classList.add("treeLineActive");
      fileHome.classList.remove("treeLineActive");

      console.log("Bye!", pageName);
      break;
  }
};
