var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const isReadable = (books) => {
  const readableBooks = books.filter((book) => book.readingStatus);
  readableBooks.forEach((readableBook) => {
    console.log(
      `The book ${readableBook.title} that was written by ${readableBook.author} can be read`
    );
  });
};
isReadable(library);
