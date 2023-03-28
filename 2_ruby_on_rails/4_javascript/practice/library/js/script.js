class Book {
  constructor(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  get readValue() {
    return this.read ? "Yes" : "No";
  }

  toggleRead() {
    this.read = !this.read;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.bookForm = document.getElementById("book_form");
    this.libraryRow = document.getElementById("library_row");
    this.currentId = 0;
    this.setStaticListeners();
  }

  addBookToLibrary() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");

    if (title.value == "" || author.value == "" || pages.value == "") {
      console.log("Empty form");
    }
    else {
      const book = new Book(this.currentId, title.value, author.value, pages.value, read.checked);
      this.books.push(book);
      console.log(this.books);
      this.displayBook(book);
      this.currentId++;
    }
  }
  displayBook(book) {
    const bookCard = this.createDomElements(book);
    this.libraryRow.appendChild(bookCard);
  }

  createDomElements(book) {
    //let { title, author, pages, read, id: bookId } = myLibrary[myLibrary.length - 1];

    let bookCard = document.createElement('div');
    bookCard.setAttribute('id', `book_${book.id}`)
    bookCard.classList.add("book_card");
    bookCard.innerHTML = `
      <h1>ID: ${book.id}</h1>
      <h2>Title: ${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p> 
      <p id="read_${book.id}">Read: ${book.readValue}</p>      
      <button id="change_${book.id}">Change Status</button>
      <button id="delete_${book.id}">Delete Book</button>
      `
    bookCard.querySelector(`#delete_${book.id}`).addEventListener('click', function () {

      this.deleteBook(book);
      bookCard.remove();

      console.log(this.books);
    }.bind(this));

    bookCard.querySelector(`#change_${book.id}`).addEventListener('click', function () {
      book.toggleRead();
      const readValue = document.getElementById(`read_${book.id}`);
      readValue.innerHTML = `Read: ${book.readValue}`;
    });

    return bookCard;
  }
  deleteBook = (book) => {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }

  setStaticListeners() {
    this.bookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addBookToLibrary();
    });
  }

}
const library = new Library();



