const Review_card = [
    {
        image : "/image/cake1.jpg",
        Name : "John Doe",
        Date :  'March 5, 2024', 
        descripetion:"This product exceeded my expectations. The quality is outstanding and the customer service was excellent. I highly recommend it!",
        stars: 5
    },

    {
        image : "/image/handsomeboy.jpg",
        Name : "Jane Smith",
        Date :  'April 2, 2024', 
        descripetion:"This product exceeded my expectations. The quality is outstanding and the customer service was excellent. I highly recommend it!",
        stars: 4
    },
    {
        image : "/image/girl.jpg",
        Name : "Jane Smith",
        Date :  'March 9, 2024', 
        descripetion:"This product exceeded my expectations. The quality is outstanding and the customer service was excellent. I highly recommend it!",
        stars: 5
    },
    {
        image : "/image/cake1.jpg",
        Name : "Je Dame ",
        Date :  'March 8 2024', 
        descripetion:"This product exceeded my expectations. The quality is outstanding and the customer service was excellent. I highly recommend it!",
        stars: 5},

]
let cardhtml = '';
Review_card.forEach((card) =>{
    let starhtml = '';
   for(let i=0;i<card.stars;i++){
        starhtml += '&#9733;';       
}

    cardhtml += `
    <div class="review-card">
                <div class="review-header">
                    <img src="${card.image}" alt="Customer Image" class="customer-image">
                    <div class="customer-info">
                        <h3 class="customer-name">${card.Name}</h3>
                        <p class="review-date">March 5, 2024</p>
                    </div>
                </div>
                <div class="review-content">
                    <p>${card.descripetion}</p>
                </div>
                <div class="review-rating">
                    ${starhtml}
                </div>
            </div>
            `
    });
document.querySelector('.Card-list-js').innerHTML = cardhtml;
