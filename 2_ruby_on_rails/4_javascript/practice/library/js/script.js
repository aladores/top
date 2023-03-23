let myLibrary = [];
let bookForm = document.getElementById("book_form");
let libraryRow = document.getElementById("library_row");
/*let bookCards = document.querySelectorAll('.book_card').forEach(item => {
  item.addEventListener('click', event => {
    console.log("hello");
  })
});*/
function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("read");

  if (title.value == "" || author.value == "" || pages.value == "") {
    console.log("Empty form");
  }
  else {

    let currentId = getCurrentElementId();
    let book = new Book(currentId, title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);
    console.log(myLibrary);
    displayLibrary(currentId);

  }
}

function getCurrentElementId() {
  if (myLibrary.length == 0) {
    return 0;
  }
  else {
    var lastId = myLibrary[myLibrary.length - 1]["id"];

    return lastId + 1;
  }
}

function displayLibrary(id) {

  let bookCard = createDomElements(id);
  libraryRow.appendChild(bookCard);

}

function createDomElements(id) {
  let { title, author, pages, read, id: bookId } = myLibrary[myLibrary.length - 1];

  let bookCard = document.createElement('div');
  bookCard.setAttribute('id', `book_${id}`)
  bookCard.classList.add("book_card");
  let readValue = read ? "Yes" : "No";
  bookCard.innerHTML = `
    <h1>ID: ${bookId}</h1>
    <h2>Title: ${title}</h2>
    <p>Author: ${author}</p>
    <p>Pages: ${pages}</p> 
    <p id="read_${bookId}">Read: ${readValue}</p>      
    <button id="change_${bookId}">Change Status</button>
    <button id="delete_${bookId}">Delete Book</button>
    `
  bookCard.querySelector(`#delete_${bookId}`).addEventListener('click', function () {
    bookCard.remove();

    let index = myLibrary.indexOf(myLibrary[id]);
    myLibrary.splice(index, 1);
    console.log(myLibrary);

    //console.log(x);
  });

  bookCard.querySelector(`#change_${bookId}`).addEventListener('click', function () {

    let index = myLibrary.indexOf(myLibrary[id]);
    let readValue = document.getElementById(`read_${bookId}`);
    if (myLibrary[index]["read"] == false) {
      myLibrary[index]["read"] = true
      readValue.innerHTML = "Read: Yes";
    }
    else {
      myLibrary[index]["read"] = false;
      readValue.innerHTML = "Read: No";
    }

    //console.log(x);
  });

  return bookCard;
}

function setStaticListeners() {
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
  });
}

function init() {
  setStaticListeners();
}
init();
