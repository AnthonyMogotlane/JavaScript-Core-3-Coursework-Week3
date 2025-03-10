let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.table("QTY\tITEM\t\t\tTOTAL");
order.forEach(({quantity, itemName, unitPrice}) => {
  console.log(quantity, "\t" + itemName, "\t\t" + unitPrice)
})

// Calculating the total price
const totalPrice = arr => arr.map(({unitPrice}) => unitPrice).reduce((tot, num) => tot + num);
console.log( "\nTotal: " + totalPrice(order));