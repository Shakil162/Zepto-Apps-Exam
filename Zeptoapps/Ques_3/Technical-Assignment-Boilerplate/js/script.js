const profilePicture = document.getElementById("user-menu-button");
const profileMenu = document.getElementById("menu");

profilePicture.addEventListener("click", () => {
  if (profileMenu.style.display === "none") {
    profileMenu.style.display = "block";
  } else {
    profileMenu.style.display = "none";
  }
});