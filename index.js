#! /usr/bin/env node
import inquirer from "inquirer";
const ValidateLettersOnly = (input) => {
    const lettersRegex = /^[A-Za-z]+$/; // this is a expression, it means only letters are allowed.
    if (lettersRegex.test(input)) { //. test() method checks given string matches a specified pattern.
        return true;
    }
    return "oops! use only letters.";
};
const dollors = (input) => {
    if (input == 10) {
        return true;
    }
    else if (input >= 10) {
        return 'you are overpaying.';
    }
    else {
        return 'you are not paying enough.';
    }
};
let info2 = await inquirer.prompt({
    name: "form2",
    type: "input",
    message: "Enter your userName",
    validate: ValidateLettersOnly,
});
let info6 = await inquirer.prompt({
    name: "form6",
    type: "list",
    message: "select the given options.",
    choices: ["GenerateID", "Write id"],
});
if (info6.form6 === "GenerateID") {
    const uniqueId = Math.floor(Math.random() * 100000).toString().padStart(5, "0");
    console.log(`Generated I'D: ${uniqueId}`);
}
else {
    let info7 = await inquirer.prompt({
        name: "form7",
        type: "input",
        message: "Alert! i'd should be unique, including digits."
    });
    console.log(`your i'd is: ${info7.form7}`);
}
let info4 = await inquirer.prompt({
    name: "form4",
    type: "list",
    message: "Select the course you wish to enroll in.",
    choices: ["Web development", "Web designing", "Cybersecurity"]
});
let info8 = await inquirer.prompt({
    name: "form8",
    type: "input",
    message: "Enter your balance:"
});
let info9 = await inquirer.prompt({
    name: "form9",
    type: "input",
    message: "please pay $10 for tuition fees:",
    validate: dollors
});
let info10 = await inquirer.prompt({
    name: "form10",
    type: "list",
    message: "Select the given options.",
    choices: ["Show status", "Exit"]
});
if (info10.form10 === "Show status") {
    let object = {
        user_Id: info6.form6,
        user_Name: info2.form2,
        your_Balance: info8.form8,
        tuition_Fee: info9.form9,
        courses_you_enrolled: info4.form4
    };
    console.log(object);
}
