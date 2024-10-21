// Fungsi untuk menampilkan form
function tampilkanForm() {
    document.getElementById('form-section').style.display = 'block';
}

// Fungsi untuk menyimpan data dan menampilkan di profile card
function simpanData() {
    // Ambil data dari form menggunakan selector
    const name = document.getElementById('inputName').value;
    const role = document.getElementById('inputRole').value;
    const availability = document.getElementById('inputAvailability').value;
    const usia = document.getElementById('inputUsia').value;
    const lokasi = document.getElementById('inputLokasi').value;
    const experience = document.getElementById('inputExperience').value;
    const email = document.getElementById('inputEmail').value;

    // Tampilkan data di bagian profile card
    document.getElementById('name').textContent = name;
    document.getElementById('role').textContent = role;
    document.getElementById('availability').textContent = availability;
    document.getElementById('usia').textContent = usia;
    document.getElementById('lokasi').textContent = lokasi;
    document.getElementById('experience').textContent = experience + ' tahun';
    document.getElementById('email').textContent = email;

    // Sembunyikan form setelah submit
    document.getElementById('form-section').style.display = 'none';
}
