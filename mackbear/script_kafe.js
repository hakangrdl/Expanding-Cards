const menuToggleButton = document.querySelector('.menu-toggle');
const menuContainer = document.querySelector('.menu-container');
const menuBtns = document.querySelectorAll('.menu-btn');
const productList = document.getElementById('product-list');
const introPage = document.querySelector('.intro'); // Giriş sayfası
const cafeMenuTitle = document.querySelector('.cafe-menu-title'); // Kafe menüsünün başlık elemanı

let imageArray = [];

// Menü butonlarına tıklama olayını dinle
menuBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.dataset.category;

        // Kategorilere göre ürünleri seç
        if (category === 'specialButton') {
            imageArray = [
                {
                    src: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211210_MochaCookieCrumbleFrapp.jpg?impolicy=1by1_wide_topcrop_630',
                    name: 'Cookie Mocha',
                    price: '120/140 ₺',
                },
                {
                    src: 'https://img.freepik.com/premium-photo/caramel-popcorn-latte-cinema-themed-cafe-with-blurred-lights-background_887552-46847.jpg',
                    name: 'Popcorn Latte',
                    price: '120/140 ₺',
                },
                {
                    src: 'https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/full_width_tablet_4_3/public/2022-12/pumpkin_spice_latte_1.jpeg?h=93d8d2a6&itok=mIl5Ehs8',
                    name: 'Pumpkin Spice Latte',
                    price: '120/140 ₺',
                },
                {
                    src: 'https://shottbeverages.com/wp-content/uploads/2019/10/Salted-Caramel-Coffee-1.jpg',
                    name: 'Salted Caramel',
                    price: '120/140 ₺',
                },
                { 
                    src: 'https://www.cariboucoffee.com.tr/upload/prod/cc-berry-white-mocha.png', 
                    name: 'Berry White', 
                    price: '120/140 ₺' 
                },
                { 
                    src: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/58D395A1-590A-4ED3-A810-16439E2EC175/Derivates/45b2c006-2c44-491f-8b68-f88a1d6a223e.jpg', 
                    name: 'Toffee Nut Latte', 
                    price: '120/140 ₺' 
                },
                { 
                    src: 'https://images.ctfassets.net/v601h1fyjgba/7HTOK351rMiQkGqcem5wUl/1d26827e666fee77bc09bdeae3a6d708/Caramel_Cookie_Coffee.jpg', 
                    name: 'Cookie Caramel', 
                    price: '120/140 ₺' 
                },
                { 
                    src: 'https://www.puratos.us/content/dam/usa/images/recipes/patisserie/hispanic/Almond%20Coffee.jpeg/jcr:content/renditions/cq5dam.web.800.800.webp', 
                    name: 'Almond Macchiato', 
                    price: '120/140 ₺' 
                },
            ];
        } else if (category === 'sicaklarButton') {
            imageArray = [
                {
                    src: 'https://www.shutterstock.com/image-photo/espresso-coffee-transparent-cup-600nw-2512810803.jpg',
                    name: 'Expresso',
                    price: '65/85 ₺',
                },
                {
                    src: 'https://assets.beanbox.com/blog_images/AB7ud4YSE6nmOX0iGlgA.jpeg',
                    name: 'Americano',
                    price: '80/90 ₺',
                },
                {
                    src: 'https://bikafein.com/wp-content/uploads/2022/08/CAH_Header_Caramel_macch_2880x1660-2-scaled.jpg',
                    name: 'Caramel Macchiato',
                    price: '65/75 ₺',
                },
                {
                    src: 'https://st.depositphotos.com/2481033/3144/i/450/depositphotos_31444643-stock-photo-cup-of-coffee-and-coffee.jpg',
                    name: 'Filtre Kahve',
                    price: '70/80 ₺',
                },
                { 
                    src: 'https://media.istockphoto.com/id/1152767411/tr/foto%C4%9Fraf/bardak-kahve-latte-k%C4%B1rpma-yolu-ile-beyaz-arka-planda-izole.jpg?s=612x612&w=0&k=20&c=xrDDgfFul8T6U0bShSPzSFJVDNekFJJdaJU7JRnVHdw=', 
                    name: 'Latte', 
                    price: '90/105 ₺' 
                },
                { 
                    src: 'https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw30047d66/images/recipe-Images/cappuccino1-recipe.jpg?sw=1200&sh=1200&sm=fit', 
                    name: 'Cappuccino', 
                    price: '90/105 ₺' 
                },
                { 
                    src: 'https://downshiftology.com/wp-content/uploads/2023/11/Mexican-Hot-Chocolate-main-500x500.jpg', 
                    name: 'Hot Chocolate', 
                    price: '100/115 ₺' 
                },
                { 
                    src: 'https://odulbufe.com/wp-content/uploads/2021/08/Sahlep.jpg', 
                    name: 'Sahlep', 
                    price: '100/115 ₺' 
                },
            ];
        } else if (category === 'icecekButton') {
            imageArray = [
                { 
                    src: 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/06/San-Sebastian-cheescake-hero-09.jpg', 
                    name: 'San Sebastian Homemade', 
                    price: '150 ₺' 
                },
                { 
                    src: 'https://www.flavoursholidays.co.uk/wp-content/uploads/2020/07/Tiramisu.jpg', 
                    name: 'Tiramisu', 
                    price: '110 ₺' 
                },
                { 
                    src: 'https://dosegida.com/Content/Images/Urunler/Framboazli-Mono-Pasta/frambuazli-mono-pasta-dose-gida.jpg', 
                    name: 'Mono Frambuaz', 
                    price: '110 ₺' 
                },
                { 
                    src: 'https://static.ticimax.cloud/9247/uploads/urunresimleri/buyuk/polka--d28f.jpg', 
                    name: 'Polka', 
                    price: '140 ₺' 
                },
                { 
                    src: 'https://images.aws.nestle.recipes/resized/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie_1080_850.jpg', 
                    name: 'Cookie', 
                    price: '80 ₺' 
                },
                { 
                    src: 'https://cafefernando.com/images/mozaik-pasta-dilim.jpg', 
                    name: 'Mozaik', 
                    price: '110 ₺' 
                },
                { 
                    src: 'https://mealsbymolly.com/wp-content/uploads/coffee-cheesecake.jpg', 
                    name: 'CheeseCake', 
                    price: '110 ₺' 
                },
                { 
                    src: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7b469d4538bb9e2667c540f6c0310f33/Derivates/2cab109c744bce1e7184ce92905d1ecf8295ed08.jpg', 
                    name: 'Magnolia', 
                    price: '120 ₺' 
                },
            ];
        }

        displayProducts(imageArray);
    });
});

// Menü gösterme işlemi
menuToggleButton.addEventListener('click', () => {
    introPage.style.transform = 'translateY(-100%)'; // İlk sayfa kaybolur
    setTimeout(() => {
        menuContainer.classList.add('show');
        menuContainer.classList.remove('hide');
        // "Özel" kategorisini otomatik seç
        const specialButton = document.querySelector('[data-category="specialButton"]');
        specialButton.click();
        
        // Sayfa kaybolduktan sonra kafe menüsüne kadar kaydır
        cafeMenuTitle.scrollIntoView({ behavior: 'smooth' });
    }, 500); // Menü görünür olmadan önce animasyon bitene kadar bekler
});

// Ürünleri görüntüleme fonksiyonu
function displayProducts(products) {
    productList.innerHTML = ''; // Önceki ürünleri temizle
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        const image = document.createElement('img');
        image.src = product.src;
        image.alt = product.name;
        productElement.appendChild(image);
        
        const name = document.createElement('h3');
        name.textContent = product.name;
        productElement.appendChild(name);
        
        const price = document.createElement('p');
        price.textContent = product.price;
        productElement.appendChild(price);
        
        productList.appendChild(productElement);
    });
}
