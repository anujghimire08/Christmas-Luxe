import { cart, DeleteOrderItem } from "/js/cart.js";
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

  if (!itemmatch) return; 

  orderListHtml += `
  <div class="order-details js-cartitem-${itemmatch.id}">
    <div class="order-item-img">
      <img src="${itemmatch.picture}" alt="${itemmatch.name}" />
    </div>

    <div class="order-item-detail box">
      <h3>${itemmatch.name}</h3>
      <b>$${itemmatch.price.toFixed(2)}</b>
      <div class="quantity">
        <span> Quantity:</span>
        <span>${cartItem.quantity}</span>
        <div class="quantity-select">
          <span>Update</span>
          <span class="deleteorderlist" data-product-id="${
            itemmatch.id
          }">Delete</span>
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
            <input type="radio" name="delivery-${itemmatch.id}" />
          </div>
          <div class="shipping-option">
            <h3 class="Shipping-date">Wednesday, December 10</h3>
            <p class="shipping-cost">Free Shipping</p>
          </div>
        </label>

        <label class="option">
          <div class="radio-btn">
            <input type="radio" name="delivery-${itemmatch.id}" />
          </div>
          <div class="shipping-option">
            <h3 class="Shipping-date">Wednesday, December 15</h3>
            <p class="shipping-cost">$4.99 - Shipping</p>
          </div>
        </label>

        <label class="option">
          <div class="radio-btn">
            <input type="radio" name="delivery-${itemmatch.id}" />
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

document.querySelectorAll(".deleteorderlist").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    DeleteOrderItem(productId);
    const container = document.querySelector(`.js-cartitem-${productId}`);
    if (container) container.remove();
  });
});
