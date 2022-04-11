const book = {
  name: "Harry Potter and the Philosopher's Stone",
  author: "J.K Rowling",
  publish: 1997,
};

const bookInfo = (obj) => {
  return `The book ${obj.name} was written by ${obj.author} in the year ${obj.publish}`;
};

console.log(bookInfo(book));
