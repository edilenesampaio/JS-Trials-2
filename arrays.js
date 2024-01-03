'use strict';

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i ++) {
    console.log(`${items[i]} ${i}`);
  }
}
printIndices(["apple", "berry", "cherry"])

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (let i = 0; i < items.length; i += 2) {
    result.push(items[i]);
  }

  console.log(result);
}

everyOtherItem(["apple", "berry", "cherry", "banana"])

// 3. smallestNItems
function smallestNItems(items, n) {

  const sortedItems = items.sort((a, b) => a - b);
  const sortedNItems = sortedItems.slice(0, n);
  console.log(sortedNItems);

}

smallestNItems([3, 5, 23, 64, 100, 2, 55], 5);