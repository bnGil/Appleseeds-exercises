/* Name the current day e.g. Sunday
 In order to get the current date you can store it in a variable: let today = new Date()
 then you can use the Date object's methods toLocaleDateString(locales,options) that returns this:
 "day, dayInMonth month year"
 So I will seperate each "item" and store them all in array and delete the comma from the first item. */

function getDate() {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date();

  let dateArr = date.toLocaleDateString("en-IL", options).split(" ");
  dateArr[0] = dateArr[0].slice(0, -1);

  return `Today is ${dateArr[0]} the ${dateArr[1]} of ${dateArr[2]}, ${dateArr[3]}`;
}

console.log(getDate());
