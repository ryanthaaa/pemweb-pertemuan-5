const Book = require('../models/book.model');

exports.getHome = (req, res) => {
    res.render('pages/index', {
        title: 'Beranda',
        welcomeMessage: 'Selamat Datang di Portal Katalog Perpustakaan Digital!'
    });
};

exports.getAbout = (req, res) => {
    res.render('pages/about', {
        title: 'Tentang Kami'
    });
};

exports.getCatalog = (req, res) => {
    const books = Book.getAll();
    res.render('pages/catalog', {
        title: 'Katalog Buku',
        books
    });
};

exports.getAddForm = (req, res) => {
    res.render('pages/add-book', {
        title: 'Tambah Buku Baru'
    });
};

exports.pageAddBook = (req, res) => {
    console.log('--- Data From Baru Diterima ---');
    console.log(req.body);
    console.log('-------------------------------');

    Book.add(req.body);

    res.redirect('/catalog');
}