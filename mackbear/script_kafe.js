/* Genel Stil */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    overflow: auto;
    background-color: #f4f4f4;
    height: 100%;
}

/* Giriş Sayfası */
.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #6B4F47;
    color: white;
    text-align: center;
    transition: transform 0.5s ease-in-out;
    border: 10px solid #3B2A20; /* Koyu renkli sınır */
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5); /* Hafif gölge ekledik */
    padding: 20px; /* İç kenar boşluğu ekledik */
}

.logo-img {
    width: 90%; /* Logo genişliğini %90 yaparak büyütüyoruz */
    max-width: 800px; /* Maksimum genişlik daha büyük yapıldı */
    height: auto;
    margin-bottom: 20px;
}

.welcome-text {
    font-size: 3.5rem;  /* Yazı boyutunu biraz daha büyütüyoruz */
    font-weight: bold; /* Kalın yapıyoruz */
    color: #F2D1B3; /* Açık renk seçiyoruz */
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); /* Daha belirgin bir gölge ekliyoruz */
    letter-spacing: 2px; /* Harfler arasına boşluk ekliyoruz */
    margin-top: -50px;
    text-transform: uppercase; /* Yazıyı büyük harf yapıyoruz */
    font-family: 'Arial', sans-serif;
    margin-bottom: -30px;
}

/* Menü Göster Butonu */
.menu-toggle {
    margin-top: 20px;
    padding: 15px 30px;
    background-color: #F2D1B3;
    color: #6B4F47;
    font-size: 1.5rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    top: 50px;
}

.menu-toggle:hover {
    background-color: #6B4F47;
    color: white;
}

/* Menü Konteyneri */
.menu-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #6B4F47, #F2D1B3);
    transform: translateY(100%);
    transition: transform 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
}

.menu-container.show {
    transform: translateY(0);
}

/* Menü Başlığı */
.menu-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #F2D1B3;
    margin-bottom: 20px;
    text-align: center;
}

/* Menü Butonları */
.menu-buttons {
    display: flex;
    flex-wrap: wrap; /* Butonları satırlara yerleştirir */
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
}

.menu-btn {
    padding: 12px 25px;
    background-color: #F2D1B3;
    color: #6B4F47;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.3s;
}

.menu-btn:hover {
    background-color: #6B4F47;
    color: white;
}

/* Ürün Listesi - Kaydırma Eklendi */
.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Grid ile otomatik olarak sütun sayısını ayarlayın */
    gap: 20px;
    padding: 20px;
    max-height: 75vh; /* Ürün listesi ekranın %75'ini aşamaz */
    overflow-y: auto; /* Dikey kaydırma */
    width: 100%;
    justify-items: center; /* Grid elemanlarını yatayda ortalar */
    scrollbar-width: thin;
    scrollbar-color: #6B4F47 #F2D1B3;
}

/* Scrollbar (WebKit) */
.product-list::-webkit-scrollbar {
    width: 8px;
}

.product-list::-webkit-scrollbar-thumb {
    background: #6B4F47;
    border-radius: 10px;
}

.product-list::-webkit-scrollbar-track {
    background: #F2D1B3;
}

/* Ürün Kartı */
.product {
    background-color: rgb(254, 254, 253);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
}

/* Ürün Kartı Hover */
.product:hover {
    transform: translateY(-5px);
}

/* Ürün Görseli */
.product img {
    width: 100%; /* Görsellerin genişliği tamamen sığacak şekilde ayarlandı */
    height: 200px; /* Sabit yükseklik */
    object-fit: cover; /* Taşmayı önler, kırpma yapar */
    border-radius: 10px;
}

/* Ürün İsmi */
.product-name {
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
}

/* Ürün Fiyatı */
.product-price {
    color: #6B4F47;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 5px;
}

/* Sayfa Kaydırma Animasyonu */
body {
    overflow: auto; /* Yatay ve dikey kaydırma aktif */
    height: 100%;
}

/* Kafe Menüsü Başlığı Güzelleme */
.menu-title {
    text-align: center;
    font-size: 3.5rem;
    color: #F2D1B3;
    font-family: 'Georgia', serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

/* Mobil uyumlu düzenlemeler */
@media (max-width: 768px) {
    /* Giriş sayfasındaki yazı boyutunu küçült */
    .welcome-text {
        font-size: 1.5rem;
    }

    /* Menü başlığını küçült */
    .menu-title {
        font-size: 2rem;
    }

    /* Butonları daha küçük yap */
    .menu-btn {
        font-size: 1rem;
        padding: 10px 20px;
    }

    /* Ürün kartlarını daha küçük hale getir */
    .product img {
        height: 180px;
    }

    /* Ürün adı boyutunu küçült */
    .product-name {
        font-size: 1.1rem;
    }

    /* Ürün fiyatını küçült */
    .product-price {
        font-size: 1rem;
    }

    /* Menü butonlarını sığdırmak için düzenle */
    .menu-buttons {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    /* Ürün listesi için daha geniş bir alan */
    .product-list {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Daha dar aralıklar ve sütunlar */
        padding: 10px;
    }
}

@media (max-width: 480px) {
    /* Giriş sayfasındaki yazı boyutunu daha da küçült */
    .welcome-text {
        font-size: 1.2rem;
    }

    /* Menü başlığını daha da küçült */
    .menu-title {
        font-size: 1.8rem;
    }

    /* Ürün kartlarını daha da küçült */
    .product img {
        height: 160px;
    }

    /* Ürün adı boyutunu küçült */
    .product-name {
        font-size: 1rem;
    }

    /* Ürün fiyatını küçült */
    .product-price {
        font-size: 0.9rem;
    }

    /* Menü butonlarını daha küçük hale getir */
    .menu-btn {
        font-size: 0.9rem;
        padding: 8px 16px;
    }
}
