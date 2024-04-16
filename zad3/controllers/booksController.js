exports.addBook = (req, res) => {
    res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
    const bookId = req.params.id;
    res.redirect('/book/list');
};
