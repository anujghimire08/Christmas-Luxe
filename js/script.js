const togglebarsEL = document.querySelector(".toggle-bars");
const navEL = document.querySelector("nav");

togglebarsEL.addEventListener("click", () => {
  togglebarsEL.classList.toggle("active");
  navEL.classList.toggle("active");
});

const products = [
  {
    picture: "images/mainproducts/p1.jpg",
    name: "Christmas Tree",
    price: 645.56,
  },
  {
    picture: "images/mainproducts/p2.jpg",
    name: "Lighted Snowman Decoration",
    price: 46.0,
  },
  {
    picture: "images/mainproducts/p3.jpg",
    name: "LED House Christmas Lights",
    price: 14.99,
  },
  {
    picture: "images/mainproducts/p4.jpg",
    name: "Door Christmas Wreath",
    price: 110.0,
  },
  {
    picture: "images/mainproducts/p5.jpg",
    name: "Santa Costume for Men 9Pcs",
    price: 185.0,
  },
  {
    picture: "images/mainproducts/p6.jpg",
    name: "Jingle Bells Hanging Decor",
    price: 59.99,
  },
  {
    picture: "images/mainproducts/p7.jpg",
    name: "Santa Vintage Truck",
    price: 30.0,
  },
  {
    picture: "images/mainproducts/p8.jpg",
    name: "Real Artificial Christmas Tree",
    price: 438.99,
  },
];
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
            <button class="cart-icons-btn">
              <i class="ri-shopping-cart-2-line icon"></i>
            </button>
          </div>
        </div>
  `;
});
const productcartEL = document.querySelector(".product-cart");
productcartEL.innerHTML = itemhtml;

// cart btn

document.querySelectorAll(".cart-icons-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("added");
  });
});
