const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes');

// Mengaktifkan EJS sebagai view engine
app.set('view engine', 'ejs');

// Mengizinkan akses file statis dari folder public
app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));

// Memasang router utama
app.use('/', pageRoutes);

// Fallback 404
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Menjalankan server
app.listen(3000, () => {
  console.log('Server MVC Aktif!');
});