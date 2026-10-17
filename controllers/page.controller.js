const daftarBuku = [
  {
    id: 1,
    judul: 'Dasar Pemrograman Web',
    halaman: 220,
    kategori: 'Teknologi'
  },
  {
    id: 2,
    judul: 'Filosofi Teras',
    halaman: 346,
    kategori: 'Pengembangan Diri'
  },
  {
    id: 3,
    judul: 'Laskar Pelangi',
    halaman: 529,
    kategori: 'Novel'
  }
];

// Controller halaman Beranda
exports.getBeranda = (req, res) => {
  res.render('pages/home', {
    pageTitle: 'Beranda',
    userName: 'Pengunjung PustakaKita',
    fiturList: [
      'Katalog Buku Digital',
      'Informasi Perpustakaan',
      'Form Tambah Buku'
    ],
    jumlahBuku: daftarBuku.length
  });
};

// Controller halaman Tentang Kami
exports.getTentang = (req, res) => {
  res.render('pages/about', {
    pageTitle: 'Tentang Kami'
  });
};

// Controller halaman Katalog
exports.getKatalog = (req, res) => {
  res.render('pages/katalog', {
    pageTitle: 'Katalog Buku',
    daftarBuku: daftarBuku
  });
};

// Controller halaman Form Tambah Buku
exports.getFormTambah = (req, res) => {
  res.render('pages/tambah', {
    pageTitle: 'Tambah Buku'
  });
};

// Controller HTTP POST
exports.postTambahBuku = (req, res) => {
  console.log('\n[BACK-END] Menerima Payload POST:');
  console.log(req.body);

  const { judul, halaman, kategori } = req.body;

  if (!judul || !halaman || !kategori ||
      !Number.isInteger(Number(halaman)) ||
      Number(halaman) <= 0) {
    return res.status(400).send('Data buku tidak valid.');
  }

  const bukuBaru = {
    id: daftarBuku.length + 1,
    judul: judul.trim(),
    halaman: Number(halaman),
    kategori: kategori
  };

  daftarBuku.push(bukuBaru);

  // Post-Redirect-Get (PRG)
  res.redirect('/katalog');
};