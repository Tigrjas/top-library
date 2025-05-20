
class Book {
    constructor(title, author, pages, isRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead ? "not read yet" : "already read"}`;
    }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function displayLibrary() {
    const container = document.querySelector(".card-container")
    container.innerHTML = "";

    myLibrary.forEach(
        (book) => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `<h3>${book.title}</h3>`
            container.appendChild(bookCard);
        }
    )
}

addBookToLibrary("Gone with the Wind", "Margaret Mitchell", 1037, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 323, false);
addBookToLibrary("Little Women", "Louisa May Alcott", 449, false);


displayLibrary();

// Modal logic
function toggleModal() {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
}

const newBookButton = document.querySelector(".new-book-button");
newBookButton.addEventListener("click", toggleModal);

// Confirm button logic
const confirmBtn = document.querySelector("#confirmBtn");

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Get input values by ID
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const isRead = document.getElementById("isRead").value === "true";

    // Add book and update display
    addBookToLibrary(title, author, pages, isRead);
    displayLibrary();

    // Close dialog
    document.querySelector("dialog").close();
});