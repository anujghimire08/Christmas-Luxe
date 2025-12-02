import { cart } from "/js/cart.js";
import { products } from "/js/script.js";

let orderListHtml = "";

cart.forEach((cartItem) => {
  const productId = cartItem.id;

  let itemmatch;

  products.forEach((product) => {
    if (product.id === productId) {
      itemmatch = product;
    }
  });

  orderListHtml += `
  <div class="order-details">
            <div class="order-item-img">
              <img src="${itemmatch.picture}" alt="xmas tree" />
            </div>

            <div class="order-item-detail box">
              <h3>${itemmatch.name}</h3>
              <b>$${itemmatch.price}</b>
              <div class="quantity">
                <span> Quantity:</span>
                <span>${cartItem.quantity}</span>
                <div class="quantity-select">
                  <span>Update</span>
                  <span>Delete</span>
                </div>
              </div>
            </div>

            <div class="order-delivery-option box">
              <div class="product-delivery-option-title">
                <h3>Choose a delivery option:</h3>
              </div>
              <form>
                <label class="option">
                  <div class="radio-btn">
                    <input type="radio" name="delivery2" />
                  </div>
                  <div class="shipping-option">
                    <h3 class="Shipping-date">Wednesday, December 10</h3>
                    <p class="shipping-cost">Free Shipping</p>
                  </div>
                </label>

                <label class="option">
                  <div class="radio-btn">
                    <input type="radio" name="delivery2" />
                  </div>
                  <div class="shipping-option">
                    <h3 class="Shipping-date">Wednesday, December 15</h3>
                    <p class="shipping-cost">$4.99 - Shipping</p>
                  </div>
                </label>

                <label class="option">
                  <div class="radio-btn">
                    <input type="radio" name="delivery2" />
                  </div>
                  <div class="shipping-option">
                    <h3 class="Shipping-date">Wednesday, December 27</h3>
                    <p class="shipping-cost">$9.99 - Shipping</p>
                  </div>
                </label>
              </form>
            </div>
          </div>
  `;
});
document.querySelector(".order-list").innerHTML = orderListHtml;
