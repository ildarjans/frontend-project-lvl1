import readlineSync from "readline-sync";

const askPlayerName = () => readlineSync.question('May i have your name?');

const cheers = (name) => console.log(`Hello ${name}!`);

export default () => cheers(askPlayerName());
