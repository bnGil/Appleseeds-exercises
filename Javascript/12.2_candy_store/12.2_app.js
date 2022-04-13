const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// 1)
function getCandy(candyStore, id) {
  const candy = candyStore.candies.find((candy) => candy.id === id);
  return candy.name;
}
console.log(getCandy(candyStore, "as12f"));

// 2)
function getPrice(candyStore, id) {
  const candy = candyStore.candies.find((candy) => candy.id === id);
  return candy.price;
}
// console.log(getPrice(candyStore, "as12f"));

// 3)
function addCandy(candyStore, id, name, price) {
  const candy = {
    name,
    id,
    price,
    amount: 1,
  };
  candyStore.candies.push(candy);
}
// console.log(addCandy(candyStore, "s23df44", "sneakers", 5));
// console.log(candyStore);

// 4)
function buy(candyStore, id) {
  const candy = candyStore.candies.find((candy) => candy.id === id);
  candy.amount -= 1;
  candyStore.cashRegister += candy.price;
}
buy(candyStore, "as12f");
// console.log(candyStore);
