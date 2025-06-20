function addBook(isbn, title, author, year) {

    localStorage.setItem('book_' + isbn, JSON.stringify({
        isbn: isbn,
        title: title,
        author: author,
        year: year
    }));
}

function listBooks() {
    const books = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('book_')) {
            books.push(JSON.parse(localStorage.getItem(key)));
        }
    }
    return books;
}

function removeBook(isbn) {
    localStorage.removeItem('book_' + isbn);
}