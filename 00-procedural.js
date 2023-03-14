const totalBill = 83.50;
const taxRate = 0.14;
const diners = [
  "Alice",
  "Bob",
  "Carol",
  "Dean",
];
const randomDiner = getRandomItem(diners);
console.log(`${randomDiner} will get the bill, which comes to ${totalBill * (1 + taxRate)}, plus the tip.`);

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
