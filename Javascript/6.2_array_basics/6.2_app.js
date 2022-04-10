const people = ["Greg", "Mary", "Devon", "James"];

// 1)
for (let item of people) {
  console.log(item);
}

// 2)
people.shift("Greg");

// 3)
people.pop("James");

// 4)
people.unshift("Matt");

// 5)
people.push("Gil");

// 6)
for (let item of people) {
  console.log(item);
  if (item === "Mary") {
    break;
  }
}

// 7)
let people2 = people.slice(2);
console.log(7, people2, people);

// 8)
people.indexOf("Marry");

// 9)
console.log(people.indexOf("Foo"));

// 10)
const people10 = ["Greg", "Mary", "Devon", "James"];
people10.splice(2, 1, "Elizabeth", "Artie");
console.log(people10);

// 11)
const withBob = people10.concat("Bob");
console.log(withBob);
