document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Pesan Anda telah terkirim!");
    this.reset();
});
