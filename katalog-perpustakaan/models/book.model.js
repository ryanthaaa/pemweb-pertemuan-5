let books = [
    {
        id: 1,
        judul: 'Cara Cepat Jadi Orang Kaya',
        stok: 12,
        kategori: 'Non-Fiksi'
    },
    {
        id: 2,
        judul: 'Pemrograman Web Express',
        stok: 5,
        kategori: 'Teknologi'
    },
    {
        id: 3,
        judul: 'Classroom Of The Elit',
        stok: 7,
        kategori: 'Novel'
    }
];

module.exports = {
    getAll: () => books,
    add: (data) => {
        const newBook = {
            id: books.length + 1,
            judul: data.judul,
            stok: parseInt(data.stok),
            kategori: data.kategori
        };
        books.push(newBook);
    }
};