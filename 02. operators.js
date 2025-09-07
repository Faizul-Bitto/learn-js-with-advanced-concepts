let pricePerItem = 150;
let quantity = 3;

let totalCostAccordingToQuantity = pricePerItem * quantity;

let discountedPrice = totalCostAccordingToQuantity * ( 10 / 100 );

let totalCost = totalCostAccordingToQuantity - discountedPrice;

console.log( discountedPrice )
console.log( totalCost )