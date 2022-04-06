let johnsTeamAvg = 4 / 3;
let mikesTeamAvg = 4 / 3;
let marysTeamAvg = 5 / 3;

// if (johnsTeamAvg > mikesTeamAvg) {
//   console.log(`John's team won with an average of ${johnsTeamAvg}`);
// } else if (mikesTeamAvg > johnsTeamAvg) {
//   console.log(`Mike's team won with an average of ${mikesTeamAvg}`);
// } else {
//   console.log(`It's a draw!`);
// }

if (johnsTeamAvg > mikesTeamAvg && johnsTeamAvg > marysTeamAvg) {
  console.log(`John's team won with an average of ${johnsTeamAvg}`);
} else if (mikesTeamAvg > johnsTeamAvg && mikesTeamAvg > marysTeamAvg) {
  console.log(`Mike's team won with an average of ${mikesTeamAvg}`);
} else if (marysTeamAvg > johnsTeamAvg && marysTeamAvg > mikesTeamAvg) {
  console.log(`Mary's team won with an average of ${marysTeamAvg}`);
} else {
  console.log(`It's a draw!`);
}
