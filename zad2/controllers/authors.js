exports.getAuthors = (req, res) => {
    const authors = [{ id: 1, name: "Kamil Banaszewski" }];
    res.render('authors', { authors });
};
