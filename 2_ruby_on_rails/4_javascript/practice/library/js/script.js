let myLibrary = [];
let bookForm = document.getElementById("book_form");
let libraryRow = document.getElementById("library_row");
/*let bookCards = document.querySelectorAll('.book_card').forEach(item => {
  item.addEventListener('click', event => {
    console.log("hello");
  })
});*/
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {

  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");

  if (title.value == "" || author.value == "" || pages.value == "") {
    console.log("Empty form");
  }
  else {
    let book = new Book(title.value, author.value, pages.value);

    myLibrary.push(book);
    displayLibrary(myLibrary.length);
  }
}

function displayLibrary(libraryLength) {

  let bookCard = document.createElement('div');
  bookCard.setAttribute('id', `book_${libraryLength - 1}`)
  let bookTitle = document.createTextNode(myLibrary[libraryLength - 1]["title"]);
  let bookAuthor = document.createTextNode(myLibrary[libraryLength - 1]["author"]);
  let bookPages = document.createTextNode(myLibrary[libraryLength - 1]["pages"]);

  let h2TagTitle = document.createElement("h2");
  let pTagAuthor = document.createElement("p");
  let pTagPages = document.createElement("p");

  h2TagTitle.appendChild(bookTitle);
  pTagAuthor.appendChild(bookAuthor);
  pTagPages.appendChild(bookPages);

  bookCard.appendChild(h2TagTitle);
  bookCard.appendChild(pTagAuthor);
  bookCard.appendChild(pTagPages);

  bookCard.classList.add("book_card");
  libraryRow.appendChild(bookCard);

  bookCard.addEventListener('click', function () {
    console.log('clicked!');
  });

  //setupBookCardListener(libraryLength)

}

function setupListeners() {
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
  });
}

function init() {
  setupListeners();
}
init();
