import inquirer from "inquirer";
import chalk from "chalk";

let players = await inquirer.prompt([
  {
    type: "list",
    name: "player1",
    message: "Player1. Choose from the following:",
    choices: ["Rock", "Paper", "Scissors"],
  },
  {
    type: "list",
    name: "player2",
    message: "Player2. Choose from the following:",
    choices: ["Rock", "Paper", "Scissors"],
  },
]);
if (players.player1 === players.player2) {
  console.log(chalk.yellow("\t\nIt's a tie!\n\t"));
} else if (
  (players.player1 === "Rock" && players.player2 === "Scissors") ||
  (players.player1 === "Scissors" && players.player2 === "Paper") ||
  (players.player1 === "Paper" && players.player2 === "Rock")
) {
  console.log(chalk.greenBright.bold("\t\nPLAYER 1 WINS!\n\t"));
} else {
  console.log(chalk.green.bold("\t\nPLAYER 2 WINS!\n\t"));
}
