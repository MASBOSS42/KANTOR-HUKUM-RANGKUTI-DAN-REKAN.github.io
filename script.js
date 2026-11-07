
// Menu navigasi untuk HP
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Menutup menu setelah memilih halaman
document.querySelectorAll("#navigation a").forEach(function(link) {
  link.addEventListener("click", function() {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Tahun otomatis
document.getElementById("year").textContent =
  new Date().getFullYear();

// Nomor WhatsApp resmi kantor
// Ganti dengan nomor kantor setelah tersedia.
const nomorWhatsApp = "";

const whatsappLink = document.getElementById("whatsappLink");

if (nomorWhatsApp) {
  whatsappLink.href =
    "https://wa.me/" + nomorWhatsApp +
    "?text=" + encodeURIComponent(
      "Halo, saya ingin berkonsultasi dengan Kantor Hukum Rangkuti dan Rekan."
    );
} else {
  whatsappLink.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Nomor WhatsApp kantor belum diatur.");
  });
}
