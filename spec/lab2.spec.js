const User = require('../lab2.js')

describe('User class tests', ()=>{
  let user;

  beforeEach(() => {
    user = new User("Mohamed", "Pass@666");
});

it("should add a product to the cart", ()=> {
  const product = { name: "Mobile", price: 1000 };
  user.addToCart(product);
  expect(user.cart[0]).toEqual(product);
});

it("should calculate total cart price",  ()=> {
  user.addToCart({ name: "Bad", price: 1000 });
  user.addToCart({ name: "Mouse", price: 700 });
  expect(user.calculateTotalCartPrice()).toBe(1700);
});

it("should return 0 if the cart is empty", ()=> {
  expect(user.calculateTotalCartPrice()).toBe(0);
});

});