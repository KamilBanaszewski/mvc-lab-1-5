const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const homeRouter = require('./routes/home');
app.use('/', homeRouter);

const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');
app.use('/', booksRouter);
app.use('/', authorsRouter);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
