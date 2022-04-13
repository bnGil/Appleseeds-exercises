const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

// 1)
const returnIdAndNameObjs1 = (arrOfObjs) => {
  const newArr = [];
  arrOfObjs.forEach((obj) => {
    const newObj = {};
    newObj.id = obj.id;
    newObj.title = obj.title;
    newArr.push(newObj);
  });
  return newArr;
};
console.log(returnIdAndNameObjs1(newReleases));

// 2)
const returnIdAndNameObjs2 = (arrOfObjs) => {
  const newArr = arrOfObjs.map((obj) => {
    const newObj = {};
    newObj.id = obj.id;
    newObj.title = obj.title;
    return newObj;
  });
  return newArr;
};
console.log(returnIdAndNameObjs2(newReleases));
