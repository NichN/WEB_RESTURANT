document.addEventListener('DOMContentLoaded', function() {
    const Image = {
        food: [
            '/image/food1.avif',
            '/image/food2.webp',
            '/image/food3.jfif',
            '/image/food12.jpg',
            '/image/food4.jpg',
            '/image/food5.jpg',
            '/image/food11.jpeg',
            '/image/food6.jpg',
            '/image/food7.avif',
            '/image/food10.webp',
            '/image/food8.jpeg',
            '/image/food9.webp'
        ],
        drink: [
            '/image/drink1.jfif',
            '/image/drink2.jfif',
            '/image/drink4.jpg',
            '/image/drink5.jpg',
            '/image/drink6.jpg',
            '/image/drink7.jpg',
            '/image/drink8.jpg',
            '/image/drink9.jpg',
            '/image/drink10.jpg',
            '/image/drink11.jpg',
            '/image/drink12.jpg',
            '/image/drink.jpg'
        ],
        cake: [
            '/image/cake1.jpg',
            '/image/cake2.jpg',
            '/image/cake3.jpg',
            '/image/cake4.jpg',
            '/image/cake5.jpg',
            '/image/cake6.jpg',
            '/image/cake7.jpg',
            '/image/cake8.jpg',
            '/image/cake9.jpg',
            '/image/cake10.jpg',
            '/image/cake12.jpg',
            '/image/cake11.jpg'
        ],
        pastry: [
            '/image/pas1.jpg',
            '/image/pas2.jpg',
            '/image/pas3.jpg',
            '/image/pas4.jpg',
            '/image/pas5.jpg',
            '/image/pas6.jpg'
        ],
        other: [
            '/image/cheff.jpg',
            '/image/Dreambg.webp',
            '/image/service.webp',
            '/image/Impace.jpg',
            '/image/Misson.jpg',
            '/image/Review.jpg',
            '/image/resturant.jpg',
            '/image/Theres.avif'
        ]
    };

    const displayedImagesContainer = document.getElementById('displayedImages');
    
    function displayImages(category) {
        displayedImagesContainer.innerHTML = '';
        const images = Image[category];
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', image);
            imgElement.classList.add('gallery');
            displayedImagesContainer.appendChild(imgElement);
        });
    }

    displayImages('food');

    const galleryLinks = document.querySelectorAll('.gallery a');
    galleryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            if (category) {
                displayImages(category);
            } else {
                displayImages('food');
            }
        });
    });
});
