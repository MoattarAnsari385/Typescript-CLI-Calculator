#! /user/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {
        name:"firstNumber",
        type:"number",
        message:"Enter first number:",
    },
    {
        name:"secondNumber",
        type:"number",
        message:"Enter second number:",
    },
    {
        name:"operator",
        type:"list",
        message:"Select one of the operator to perform operation:",
        choices:["Addition","Subtraction","Multiplication","Division"],
    }
])
if(answer.operator === "Addition"){
    console.log(`${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`);

}else if(answer.operator === "Subtraction"){
    console.log(`${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`);
    
}else if(answer.operator === "Multiplication"){
    console.log(`${answer.firstNumber} * ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`);
    
}else if(answer.operator === "Division"){
    console.log(`${answer.firstNumber} / ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`);
    
}

