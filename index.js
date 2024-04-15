#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct your pin!!!");
    let operationAns = await inquirer.prompt([
        {
            type: 'list',
            choices: ["withdraw", "check balance"],
            message: "please select option",
            name: 'operation',
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                type: 'number',
                message: "enter your amount",
                name: 'amount',
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount}withdraw sucessfully`);
            console.log("your remaining balance is:" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your account balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect, try again");
}
