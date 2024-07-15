import "./style.css";
import toggleVisiblity from "./toggleVisibility";

const menuButton = document.querySelector("button");
const dropDownMenu = document.querySelector("ul");

menuButton.addEventListener("click", () => {
  toggleVisiblity(dropDownMenu);
});
