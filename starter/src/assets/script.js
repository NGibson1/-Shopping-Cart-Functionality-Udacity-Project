const products = [ // array to hold products as objects
  {
  name: "Carton of Cherries",
  price: 4,
  quantity: 0,
  productId: 1,
  image: "images/cherry.jpg"
  },
    
  {
  name: "Carton of Strawberries",
  price: 5,
  quantity: 0,
  productId: 2,
  image: "images/strawberry.jpg"
  },

  {
  name: "Bag of Orange",
  price: 10,
  quantity: 0,
  productId: 3,
  image: "images/orange.jpg"
  }
];

let cart = []// an array to hold all "food" items in a cart

// helper function that takes a productId as a parameter and returns the product from the products array that has a matching productId.
function getProduct(productId) {
  return products.find((product) => product.productId === productId);
}

// this function adds prodcuts to the cart if they are not already in the cart, it also increases quanity by 1
function addProductToCart(productId){
    const food = getProduct(productId);
    food.quantity += 1;
    if (!cart.includes(food)){
      cart.push(food);
      return food;
    }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
//this function increases the products.quanity based on the productID parameter
function increaseQuantity(productId){
  const food = getProduct(productId);
  food.quantity += 1;
}

/*this function decrease the quanity, it takes "productID" as a parameter to make sure the correct product and its quanity
is decreased and if Products.quanity = 0 it removes the product from the cart*/
function decreaseQuantity(productId){
  const food = getProduct(productId);
    food.quantity -= 1;
    if (food.quantity === 0){
      const index = cart.indexOf(food);
      cart.splice(index, 1);
    }
}

// this function updates product quanity to 0 and removes the product from the cart, takes productID as an argument
function removeProductFromCart(productId){
  const food = getProduct(productId);
    food.quantity = 0;
    const index = cart.indexOf(food);
    cart.splice(index, 1);
}

// variable for the total amount paid toward items in cart
let totalPaid = 0;

// a function that iterates through the cart and returns the total of all products
function cartTotal() {
  let total = 0;
  cart.forEach(function(products){
    total += (products.price * products.quantity);
  });
  return total;
}

//this function takes amount paid as a parameter and calculates the change for the sale, or if more "amount" is required
function pay(amount){
  let total = cartTotal();
  totalPaid += amount;
  return totalPaid - total;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   //emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
