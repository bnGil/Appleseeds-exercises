// const numSiblings = window.prompt("How many siblings do you have?");

// if (numSiblings == 1) {
//   console.log("1 sibling!");
// } else if (numSiblings > 1) {
//   console.log("More than 1 sibling");
// } else {
//   console.log("No siblings");
// }

//This code will console log "No siblings" when entering 1 because prompt returns the input as string.
//The three equals (===) compares types in addition to values, therefore 1 isn't '1'.
//To solve this, we will store the string as a number from the first place with Number()
const numSiblings = Number(window.prompt("How many siblings do you have?"));
if (numSiblings === 1) {
  console.log("1 sibling!");
} else if (numSiblings > 1) {
  console.log("More than 1 sibling");
} else {
  console.log("No siblings");
}
// We should always use === because it's more predictable
