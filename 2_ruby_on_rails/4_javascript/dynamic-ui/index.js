function dropDown() {
  const dropDownMenu = document.getElementById("dropdown-menu");
  dropDownMenu.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-button')) {
    const dropDownMenu = document.getElementById("dropdown-menu");
    if (dropDownMenu.classList.contains("show")) {
      dropDownMenu.classList.remove("show");
    }
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function changeId(move) {
  showSlides(slideIndex += move);
}
/* function moveSlideShow(slideIndex) {

  console.log(slideIndex);
  const images = document.getElementsByClassName("slide-card");

  if (slideIndex > images.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = images.length;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("show-slide");
    images[i].classList.add("hide");
  }
  images[slideIndex - 1].classList.remove("hide");
  images[slideIndex - 1].classList.add("show-slide");
} */

function showSlides(n) {
  let i;
  const images = document.getElementsByClassName("slide-card");

  console.log(slideIndex);
  if (n > images.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  images[slideIndex - 1].style.display = "block";
}