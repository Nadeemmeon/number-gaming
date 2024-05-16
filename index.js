#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "Number",
        message: "Please a Guess Number between 1 to 6 : ",
    }
]);
if (answer.UserGuessNumber === randomNumber) {
    console.log("Congrulation! you are guess right number");
}
else {
    console.log("you are wrong guess number");
}
