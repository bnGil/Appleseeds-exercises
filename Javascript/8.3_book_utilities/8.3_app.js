// 1)
const book1 = {
  name: "Harry Potter and the Philosopher's Stone",
  author: "J.K Rowling",
  publish: 1997,
};

const book2 = {
  name: "Harry Potter and the Chamber of Secrets",
  author: "J.K Rowling",
  publish: 1998,
};
// 2)
const bookUtils = {};

// 3)
bookUtils.getFirstPublished = function (book1, book2) {
  return book1.publish < book2.publish ? book1.name : book2.name;
};
console.log(bookUtils.getFirstPublished(book1, book2));

// 4)
bookUtils.setNewEdition = function (book, editionYear) {
  book.latestEdition = editionYear;
};
bookUtils.setNewEdition(book1, 1998);
console.log(book1);

// 5)
bookUtils.setLanguage = function (book, language) {
  book.language = language;
};
bookUtils.setLanguage(book1, "English");
console.log(book1);

// 6)
bookUtils.setTranslation = function (book, language, translator) {
  book.translation = {
    [translator]: language,
  };
};
bookUtils.setTranslation(book1, "Hebrew", "Gili Bar-Hillel Semo");
console.log(book1);

// 7)
bookUtils.setPublisher = function (book, name, location) {
  book.publisher = {
    name,
    location,
  };
};
bookUtils.setPublisher(book1, "Bloomsbury", "UK");
bookUtils.setPublisher(book2, "Bloomsbury", "UK");
console.log(book1);
console.log(book2);

// 8)
bookUtils.isSamePublisher = function (book1, book2) {
  if (
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(bookUtils.isSamePublisher(book1, book2));
