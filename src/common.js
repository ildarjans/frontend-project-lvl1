import readlineSync from "readline-sync";
import greetPlayer from "./games/brain-greeting-game.js";
import {GAME_ROUND} from "./const.js";

const printWinGame = (name) => console.log(`Congratulations, ${name}!`);
const printLoseGame = (name) => console.log(`Let's try again, ${name}!`);
const printCorrect = () => console.log(`Correct!`);
const printConditions = (condition) => console.log(condition);
const printQuestion = (question) => console.log(`Question ${question}`);
const printWrongAnswer = (correct, wrong) => (
    console.log(`${wrong} is wrong answer ;(. Correct answer was ${correct}.`)
)

const printGameOver = (name, correct, wrong) => {
    printWrongAnswer(correct, wrong);
    printLoseGame(name)
}

const getAnswer = () => readlineSync.question(`Your answer `).trim().toLowerCase();

export const playGame = (conditions, questionGenerator) => () => {
    const playerName = greetPlayer();

    printConditions(conditions);

    const playRound = (round, correctAnswer = false) => {
        if (!round) { return printWinGame(playerName) }
        if (correctAnswer) { printCorrect() }
        const [num, correctAns] = questionGenerator();
        printQuestion(num);
        const userAns = getAnswer();
        return (
            userAns === correctAns ?
                playRound(--round, true) :
                printGameOver(playerName, correctAns, userAns)
        );
    }

    return playRound(GAME_ROUND)
}
