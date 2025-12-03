import { cart, addtoCart } from "./cart.js";

const togglebarsEL = document.querySelector(".toggle-bars");
const navEL = document.querySelector("nav");

if (togglebarsEL && navEL) {
  togglebarsEL.addEventListener("click", () => {
    togglebarsEL.classList.toggle("active");
    navEL.classList.toggle("active");
  });
}

export const products = [
  {
    id: "p1",
    picture: "images/mainproducts/p1.jpg",
    name: "Christmas Tree",
    price: 645.56,
  },
  {
    id: "p2",
    picture: "images/mainproducts/p2.jpg",
    name: "Lighted Snowman Decoration",
    price: 46.0,
  },
  {
    id: "p3",
    picture: "images/mainproducts/p3.jpg",
    name: "LED House Christmas Lights",
    price: 14.99,
  },
  {
    id: "p4",
    picture: "images/mainproducts/p4.jpg",
    name: "Door Christmas Wreath",
    price: 110.0,
  },
  {
    id: "p5",
    picture: "images/mainproducts/p5.jpg",
    name: "Santa Costume for Men 9Pcs",
    price: 185.0,
  },
  {
    id: "p6",
    picture: "images/mainproducts/p6.jpg",
    name: "Jingle Bells Hanging Decor",
    price: 59.99,
  },
  {
    id: "p7",
    picture: "images/mainproducts/p7.jpg",
    name: "Santa Vintage Truck",
    price: 30.0,
  },
  {
    id: "p8",
    picture: "images/mainproducts/p8.jpg",
    name: "Real Artificial Christmas Tree",
    price: 438.99,
  },
];

const productcartEL = document.querySelector(".product-cart");
if (productcartEL) {
  let itemhtml = "";
  products.forEach((product, index) => {
    itemhtml += `
      <div class="items">
        <img src="images/mainproducts/p${index + 1}.jpg" />
        <div class="cart-footer">
          <div class="details-product">
            <h5 id="product-title">${product.name}</h5>
            <p id="product-price">$${product.price.toFixed(2)}</p>
          </div>
          <button class="cart-icons-btn" data-product-id="${product.id}">
            <i class="ri-shopping-cart-2-line icon"></i>
          </button>
        </div>
      </div>
    `;
  });
  productcartEL.innerHTML = itemhtml;
}

const cartBtn = document.querySelectorAll(".cart-icons-btn");
let cartquantity = 0;

export function updateCartQuantity() {
  cart.forEach((item) => {
    cartquantity += item.quantity;
  });
}

cartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = btn.dataset.productId;
    addtoCart(productId);
    updateCartQuantity();
  });
});

const cartanchor = document.getElementById("cart-anchor");
if (cartanchor && cartBtn.length) {
  function flashCartColor() {
    cartanchor.style.color = "#60181c";
    setTimeout(() => {
      cartanchor.style.color = "black";
    }, 200);
  }

  cartBtn.forEach((btn) => {
    btn.addEventListener("click", flashCartColor);
  });
}
