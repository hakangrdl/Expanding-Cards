document.addEventListener('DOMContentLoaded', () => {
    // Sayfadaki tüm dahili bağlantılar için yumuşak kaydırma
    // Bu, hem navigasyon menüsündeki linkleri hem de "Hizmetlerimizi Keşfet" gibi butonları kapsayacak.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Varsayılan bağlantı davranışını engelle

            const targetId = this.getAttribute('href'); // Hedef ID'yi al (örn: #hizmetler)
            const targetElement = document.querySelector(targetId); // Hedef elementi bul

            if (targetElement) {
                // Hedef elemente sorunsuz bir şekilde kaydır
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Yumuşak kaydırma animasyonu
                });
            }
        });
    });

    // --- QR Kod Entegrasyonu ---
    // Bu kısım, QR kodunuzu web sitesinde göstermek veya tarayıcı ile okumak için genel bir yer tutucudur.
    const qrCodeDisplayContainer = document.getElementById('qrcode-scanner-container');

    if (qrCodeDisplayContainer) {
        // Eğer QR kodunuz bir resim dosyası ise (en yaygın ve kolay yöntem):
        // 'qr-code.png' dosyasını proje klasörünüze koyduğunuzdan emin olun.
        qrCodeDisplayContainer.innerHTML = '<img src="qr-code.png" alt="İletişim QR Kodu" style="max-width: 100%; height: auto; border-radius: 5px;">';

        // Yukarıdaki satırı kullandıysanız, aşağıdaki yoruma alınmış kısmı KULLANMAYIN.

        /*
        // Eğer kullanıcıların kendi kameralarıyla bir QR kodu taramasını istiyorsanız (daha karmaşık):
        // Bunun için 'html5-qrcode' veya 'QuaggaJS' gibi harici bir JavaScript kütüphanesi gerekir.
        // Bu kütüphanelerin kurulumu ve kullanımı için kendi dokümantasyonlarına bakmanız önemlidir.
        // Örnek bir html5-qrcode başlatma iskeleti (bu kodu kullanmadan önce kütüphaneyi dahil etmelisiniz):

        // const html5QrCode = new Html5Qrcode("qrcode-scanner-container");
        // html5QrCode.start(
        //   { facingMode: "environment" }, // Arka kamerayı tercih et
        //   {
        //     fps: 10,    // Saniyedeki kare sayısı
        //     qrbox: { width: 250, height: 250 } // QR kod okuma alanı boyutu
        //   },
        //   (decodedText, decodedResult) => {
        //     // QR kodu başarıyla okunduğunda yapılacaklar
        //     console.log(`QR kodu okundu: ${decodedText}`);
        //     alert(`QR Kodu Okundu: ${decodedText}`);
        //     // İsteğe bağlı: Tarayıcıyı durdur: html5QrCode.stop();
        //   },
        //   (errorMessage) => {
        //     // Hata durumunda (örn. QR kodu bulunamadı) kullanıcıya gösterilmeyen log
        //     // console.log(`QR kodu kameranın önünde değil: ${errorMessage}`);
        //   })
        // .catch((err) => {
        //   console.error(`Tarayıcı başlatılamadı: ${err}`);
        // });
        */
    }

    // --- İletişim Modalı Fonksiyonelliği ---
    const contactButton = document.getElementById('contactButton');
    const contactModal = document.getElementById('contactModal');
    const closeButton = document.querySelector('.close-button');

    // Butona tıklandığında modalı aç
    if (contactButton) {
        contactButton.addEventListener('click', (e) => {
            e.preventDefault(); // Varsayılan bağlantı davranışını engelle
            contactModal.style.display = 'flex'; // Modalı görünür yap
        });
    }

    // Kapatma butonuna tıklandığında modalı kapat
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            contactModal.style.display = 'none'; // Modalı gizle
        });
    }

    // Modal dışına tıklandığında modalı kapat
    window.addEventListener('click', (event) => {
        if (event.target == contactModal) {
            contactModal.style.display = 'none'; // Modalı gizle
        }
    });
});
