function newPrice(currentPrice , discount ) {
    
  // Check first input type
    if((typeof currentPrice !== 'number') || (typeof discount !== 'number')) {
        return "Invalid";
      }

    const finalPrice = currentPrice - (currentPrice * discount/100);
    return finalPrice.toFixed(3);

}

/* Test Cases for Check output:

console.log(newPrice(1500,20));
console.log(newPrice(2000,15));
console.log(newPrice(1200,7));
console.log(newPrice("1000",10));
console.log(newPrice(2000,17.17));
console.log(newPrice(500,"5"));
*/
