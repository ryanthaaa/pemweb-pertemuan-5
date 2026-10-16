// Mengekspor fungsi untuk dipanggil oleh Router
exports.getBeranda = (req, res) => {
    res.render('pages/home', {
        userName: 'Administrator TI',
        fiturList: ['Routing Terisolasi', 'Controller Terpisah', 'Skalabilitas Monolith']
    });
};

exports.getKatalog = (req, res) => {
    res.render('pages/katalog', {
        pageTitle: 'Katalog Produk'
    });
};

exports.postTambahProduk = (req, res) => {
    // req.body berisi pasangan key-value berdasarkan atribute 'name' di form HTML
    console.log("\n[BACK-END] Menerima Payload POST:");
    console.log(req.body);

    // Post-Redirect-Get (RPG) Pattern: Cegah resumbit data saat F5
    res.redirect('/katalog');
};