import readlineSync from "readline-sync";

const askPlayerName = () => readlineSync.question('May i have your name? ');

const printWelcome = () => console.log(`Welcome to the Brain Games!`);

const greeting = (name) => {
    console.log(`Hello, ${name}!`);
    return name
};

export default () => greeting(askPlayerName(printWelcome()));
