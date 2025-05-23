/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/** @type {Item[]} */
const inventory = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 5, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

// === Complete the functions below! ===

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
function logNames(items) {
  // TODO: use `forEach`
  items.forEach((item) => {
    // console.log(item.name);
  });
}

logNames(inventory);
logNames([1, 2, 3, 4, 5, 6]);

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  // TODO: use `map`
  return items.map((item) => item.name.toUpperCase());
}
// const result = getUppercaseNames(inventory);
// console.log(result);

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
  // TODO: use `find`
  return items.find((item) => item.id === id);
}
// const result = getItemById(inventory, 1);
// console.log(result);

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name` if found
 */
function getItemPriceByName(items, name) {
  // TODO: use a loop!
  for (let i = 0; i > items.length; i++) {
    if (items[i][`name`] === name) {
      return items[i][`price`];
    }
  }

  for (const item of items) {
    if (item.name === name) {
      return item.price;
    }
  }
}
const productName = `milk`;

// const result = getItemPriceByName(inventory, productName);
// console.log(result);

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  // TODO: use `filter`

  return items.filter((item) => item.category === catergory);
}
//   return items.filter((item) => {
//     return item.category === category;
// });
// }
// const result = getItemsByCategory(inventory, `fruit`);
// console.log(result);

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  // TODO: use `reduce`
  return items.reduce((total, item) => total + item.quantity, 0);
}

// const result = countItems(inventory)
// // console.log(result);

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function getTotalPrice(items) {
  // TODO: use `reduce`
  return items.reduce((total, item) => {
    return total + total.quantity * item.price;
  }, 0);
}

const result = getTotalPrice(inventory);
console.log(result);

// === READ BUT DO NOT CHANGE THE CODE BELOW ===

console.log("Welcome! We carry the following items:");
logNames(inventory);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(inventory));

console.log(`In total, we have ${countItems(inventory)} items in stock.`);

const totalCost = getTotalPrice(inventory);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(inventory, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(inventory, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(inventory, category));
