export default function loadMenu() {


  const menu = document.createElement("section");
  const title = document.createElement("H1");
  const motto = document.createElement("H2");
  title.innerHTML = "Menu";
  motto.innerHTML = "We got dog food";
  menu.appendChild(title);
  menu.appendChild(motto);

  return menu;
}