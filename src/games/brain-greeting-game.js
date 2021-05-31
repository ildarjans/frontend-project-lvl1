import readlineSync from "readline-sync";

const askPlayerName = () => readlineSync.question('May i have your name? ');

const greeting = (name) => {
    console.log(`Hello, ${name}!`);
    return name;
};

export default () => greeting(askPlayerName());
