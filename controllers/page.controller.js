// Mengekspor fungsi untuk dipanggil oleh Router 
exports.getBeranda = (req, res) => {
res.render('pages/home', {
userName: 'Administrator TI',
fiturList: ['Routing Terisolasi', 'Controller Terpisah', 'SkalabilitasMonolith']
}); 
};
exports.getKatalog = (req, res) => {
res.render('pages/katalog', { pageTitle: 'Katalog Produk' }); 
};
exports.postTambahProduk = (req, res) => {
// req.body berisi pasangan key-value berdasarkan atribut 'name' di form HTML
console.log("\n[BACK-END] Menerima Payload POST:"); 
console.log(req.body.namaProduk);
// Post-Redirect-Get (PRG) Pattern: Cegah resubmit data saat F5
res.redirect('/katalog');
};