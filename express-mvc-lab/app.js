const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes');

// Express otomatis akan mencari berkas UI di dalam folder /views
app.set('view engine', 'ejs'); 

// Middleware: Mengizinkan akses publik ke berkas statis dalam folder 'public' 
app.use(express.static('public'));

// Wajib untuk menangkap from berjenis application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Pasang router ke pipelane Express ( Menghapus app.get('/') lama )
app.use('/', pageRoutes);

// Penanganan 404
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Mengaktifkan server untuk mendengarkan lalu lintas pada port 3000
app.listen(3000, () => console.log('Server MVC Aktif!'));