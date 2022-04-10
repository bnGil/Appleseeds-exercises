function whatColorKind(color) {
  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
    default:
      return "Unknown color";
  }
}

console.log(whatColorKind("yellow"));
console.log(whatColorKind("blue"));
console.log(whatColorKind("gold"));
