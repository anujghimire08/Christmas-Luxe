export const cart = [
  {
    id: "p1",
    quantity: 1,
  },
   {
    id: "p2",
    quantity: 1,
  },
];

export function addtoCart(productID) {
  let itemCheck;

  cart.forEach((item) => {
    if (productID === item.productID) {
      itemCheck = item;
    }
  });

  if (itemCheck) {
    itemCheck.quantity += 1;
  } else {
    cart.push({
      productID: productID,
      quantity: 1,
    });
  }
}
