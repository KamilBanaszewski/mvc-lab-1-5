const books = [
    { id: 1, title: "Book 1", publishingYear: 2024, authorId: 1 },
    { id: 2, title: "Book 2", publishingYear: 2023, authorId: 2 },
    { id: 3, title: "Book 3", publishingYear: 2022, authorId: 3 }
];

exports.getBooks = (req, res) => {
    if (books.length > 0) {
        res.render('books', { books });
    } else {
        res.render('books', { message: "No books has been found" });
    }
};
