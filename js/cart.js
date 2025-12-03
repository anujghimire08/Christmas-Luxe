export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [
    {
      id: "p1",
      quantity: 1,
      deliveryOptionsId:"1",
    },
    {
      id: "p2",
      quantity: 1,
      deliveryOptionsId:"2",
    },
  ];
}

function saveOrderData() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addtoCart(productId) {
  let itemCheck;

  cart.forEach((item) => {
    if (productId === item.id) {
      itemCheck = item;
    }
  });

  if (itemCheck) {
    itemCheck.quantity += 1;
  } else {
    cart.push({
      id: productId,
      quantity: 1,
      deliveryOptionsId: "1"
    });
  }
  saveOrderData();
}

export function DeleteOrderItem(productId) {
  let caryarr = [];
  cart.forEach((cartItem) => {
    if (cartItem.id !== productId) {
      caryarr.push(cartItem);
    }
  });

  cart = caryarr;
  saveOrderData();
}
