const express = require('express');
const path = require('path');
const bookRoutes = require('./routes/book.routes');

const app = express();
const PORT = 3000;

// Mengeset View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', bookRoutes);

app.listen(PORT, () => {
    console.log(`SERVER berjalan di http://localhost:${PORT}`);
});