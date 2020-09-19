// GET all the elements IDs
const pageBio = document.getElementById("pageBio");
const pageHome = document.getElementById("pageHome");
const pageContact = document.getElementById("pageContact");

const tabBio = document.getElementById("tabBio");
const tabHome = document.getElementById("tabHome");
const tabContact = document.getElementById("tabContact");

const fileBio = document.getElementById("fileBio");
const fileHome = document.getElementById("fileHome");
const fileContact = document.getElementById("fileContact");

//Initial state
pageBio.style.display = "none";
pageHome.style.display = "block";
pageContact.style.display = "none";

const showPage = (pageName) => {
  console.log("HI!", pageName);
  switch (pageName) {
    case "home":
      pageBio.style.display = "none";
      pageHome.style.display = "block";
      pageContact.style.display = "none";

      tabBio.classList.remove("pageActive");
      tabHome.classList.add("pageActive");
      tabContact.classList.remove("pageActive");

      fileBio.classList.remove("treeLineActive");
      fileHome.classList.add("treeLineActive");
      fileContact.classList.remove("treeLineActive");

      console.log("Bye!", pageName);
      break;

    case "bio":
      pageBio.style.display = "block";
      pageHome.style.display = "none";
      pageContact.style.display = "none";

      tabBio.classList.add("pageActive");
      tabHome.classList.remove("pageActive");
      tabContact.classList.remove("pageActive");

      fileBio.classList.add("treeLineActive");
      fileHome.classList.remove("treeLineActive");
      fileContact.classList.remove("treeLineActive");

      console.log("Bye!", pageName);
      break;

    case "contact":
      pageBio.style.display = "none";
      pageHome.style.display = "none";
      pageContact.style.display = "block";

      tabBio.classList.remove("pageActive");
      tabHome.classList.remove("pageActive");
      tabContact.classList.add("pageActive");

      fileBio.classList.remove("treeLineActive");
      fileHome.classList.remove("treeLineActive");
      fileContact.classList.add("treeLineActive");

      console.log("Bye!", pageName);
      break;
  }
};
