// Inisialisasi Lucide Icons
lucide.createIcons();

/**
 * Fungsi untuk berpindah tab navigation
 * @param {string} tabName - Nama tab yang akan diaktifkan
 */
function switchTab(tabName) {
    // Sembunyikan semua konten tab
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Tampilkan tab yang dipilih
    const selectedTab = document.getElementById('tab-' + tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Reset gaya tombol navigasi
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('text-cyan-400');
        btn.classList.add('hover:text-cyan-400');
    });

    // Beri gaya aktif pada tombol yang sedang diakses
    const activeBtn = document.getElementById('btn-' + tabName);
    if (activeBtn && tabName !== 'kontak') {
        activeBtn.classList.add('text-cyan-400');
    }
}