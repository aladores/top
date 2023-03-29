
export default function loadHome() {


  const home = document.createElement("section");
  const title = document.createElement("H1");
  const motto = document.createElement("H2");
  title.innerHTML = "Restaurant Home Page";
  motto.innerHTML = "Chef Milo";
  home.appendChild(title);
  home.appendChild(motto);

  return home;
}