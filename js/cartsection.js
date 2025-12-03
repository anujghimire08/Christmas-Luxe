import { cart, DeleteOrderItem } from "./cart.js";
import { products, updateCartQuantity } from "./script.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { deliveryOptions } from "./deliveryOption.js";

const today = dayjs();
const deliveryDate = today.add(7, "days");
console.log(deliveryDate.format("dddd, MMMM D"));

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
            <span class="deleteorderlist" data-product-id="${itemmatch.id}">
              Delete
            </span>
          </div>
        </div>
      </div>

      ${deliveryOptionsHtml(itemmatch, cartItem)}
    </div>
  `;
});

function deliveryOptionsHtml(itemmatch, cartItem) {
  let html = `
    <div class="order-delivery-option box">
      <div class="product-delivery-option-title">
        <h3>Choose a delivery option:</h3>
      </div>
      <form>
  `;

  deliveryOptions.forEach((deliveryOption,cartItem) => {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliverydays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    const priceString =
      deliveryOption.price === 0
        ? "Free"
        : `$${deliveryOption.price.toFixed(2)}`;

    const isticked = deliveryOptions.id === cartItem.deliveryOptionId;

    html += `
      <label class="option">
        <div class="radio-btn">
          <input 
            type="radio" 
            name="delivery-${itemmatch.id}"
            ${isticked ? "checked" : ""}
          />
        </div>
        <div class="shipping-option">
          <h3 class="Shipping-date">${dateString}</h3>
          <p class="shipping-cost">${priceString} Shipping</p>
        </div>
      </label>
    `;
  });

  html += `
      </form>
    </div>
  `;

  return html;
}

document.querySelector(".order-list").innerHTML = orderListHtml;

document.querySelectorAll(".deleteorderlist").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    DeleteOrderItem(productId);
    const container = document.querySelector(`.js-cartitem-${productId}`);
    if (container) container.remove();
  });
});
