function handleAddBook(e) {
    e.preventDefault();

    addBook(
        document.getElementById("isbnInput").value,
        document.getElementById("titleInput").value,
        document.getElementById("authorInput").value,
        document.getElementById("yearInput").value
    );
    
    alert("Book added successfully!");
    document.getElementById("addBookForm").reset();
    handleListBooks();
}

function handleListBooks() {
    const books = listBooks();
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear previous list

    if (books.length === 0) {
        bookList.innerHTML = "<p>No books found.</p>";
        return;
    }

    books.forEach((book, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${book.isbn}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>
                <button class="btn btn-danger" onclick="handleRemoveBook('${book.isbn}')">Remove</button>
            </td>
        `;
        bookList.appendChild(tr);
    });
}

function handleRemoveBook(isbn) {
    removeBook(isbn);
    alert("Book removed successfully!");
    handleListBooks();
}
handleListBooks()