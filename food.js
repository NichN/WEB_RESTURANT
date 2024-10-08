
import{foodmenu} from"../js/product.js";
let Foodhtml = '';
foodmenu.forEach((foodmenu)=>{
    Foodhtml +=`
<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${foodmenu.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${foodmenu.name}
          </div>

          <div class="product-price">
            ${(foodmenu.price)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-name="${foodmenu.name}">
            Add to Cart
          </button>
        </div>
    `
})
document.querySelector('.js-products-grid').innerHTML = Foodhtml;
console.log(Foodhtml);


