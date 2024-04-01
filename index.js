#! /usr/bin/env node
import inquirer from "inquirer";
//Welcome MAssage
console.log("\n\tWelcome to \'CodeWithAnas'\ -CLI Simple Calculator\n");
//Asking Question from users through inquirer
let answers = await inquirer.prompt([
    { message: "ENter First Number : ", type: "number", name: "firstNumber" },
    { message: "ENter Second Number : ", type: "number", name: "secondNumber" },
    {
        message: "Select One Operator To Perform Operation : ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtruction", "Multiplication", "Division"],
    }
]);
//Conditional if-else statements
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtruction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Operation");
}
