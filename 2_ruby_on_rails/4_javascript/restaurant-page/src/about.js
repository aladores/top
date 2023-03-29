export default function loadAbout() {


  const about = document.createElement("section");
  const title = document.createElement("H1");
  const motto = document.createElement("H2");
  title.innerHTML = "About";
  motto.innerHTML = "We sell dog food";
  about.appendChild(title);
  about.appendChild(motto);

  return about;
}