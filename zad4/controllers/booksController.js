exports.getBookDetails = (req, res) => {
    const bookId = req.params.id;
    const book = {
        title: "Sample Book Title",
        author: "John Doe",
        publishingYear: 2022
    };
    res.render('book', { book: book });
};
