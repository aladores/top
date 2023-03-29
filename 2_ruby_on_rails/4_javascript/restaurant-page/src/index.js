import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
console.log("howdy");

function createNavigation() {

  const navigation = document.createElement("nav");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const aboutButton = document.createElement("button");

  homeButton.innerText = "Home";
  menuButton.innerText = "Menu";
  aboutButton.innerText = "About";

  navigation.appendChild(homeButton);
  navigation.appendChild(menuButton);
  navigation.appendChild(aboutButton);

  homeButton.addEventListener('click', () => {
    content.firstChild.nextSibling.remove();
    content.appendChild(loadHome());
  });

  menuButton.addEventListener('click', () => {
    content.firstChild.nextSibling.remove();
    content.appendChild(loadMenu());
  });

  aboutButton.addEventListener('click', () => {
    content.firstChild.nextSibling.remove();
    content.appendChild(loadAbout());
  });
  return navigation;
}
const content = document.getElementById("content");
content.appendChild(createNavigation());
content.appendChild(loadHome());
