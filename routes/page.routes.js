const express = require('express');
const router = express.Router();

// Import controller
const pageController = require('../controllers/page.controller.js');

// HTTP GET - Menampilkan halaman
router.get('/', pageController.getBeranda);
router.get('/tentang', pageController.getTentang);
router.get('/katalog', pageController.getKatalog);
router.get('/katalog/tambah', pageController.getFormTambah);

// HTTP POST - Memproses formulir tambah buku
router.post('/katalog/tambah', pageController.postTambahBuku);

module.exports = router;