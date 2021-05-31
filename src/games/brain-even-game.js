import readlineSync from "readline-sync";
import greetPlayer from "./brain-greeting-game.js";
import {printWinGame, printLoseGame, printCorrect, printQuestion, printConditions} from "../common.js";
import {randomInt} from "../utils.js";
import {PlayerAnswer, GAME_ROUND} from "../const.js";

const EVEN_GAME_CONDITIONS = `"yes" if the number is even, otherwise answer "no"`;

const printWrongAnswer = (name, correct, wrong) => {
    console.log(`${wrong} is wrong answer ;(. Correct answer was ${correct}.`);
    printLoseGame(name);
};

const getQuestionAnswerPair = () => {
    const num = randomInt();
    return [num, num % 2 ? PlayerAnswer.no : PlayerAnswer.yes]
}

const getAnswer = () => readlineSync.question(`Your answer `).trim().toLowerCase();

const playEvenGame = () => {
    const playerName = greetPlayer();

    printConditions(EVEN_GAME_CONDITIONS);

    const playRound = (round, correctAnswer = false) => {
        if (!round) { return printWinGame(playerName) }
        if (correctAnswer) { printCorrect() }
        const [num, correctAns] = getQuestionAnswerPair();
        printQuestion(num);
        const userAns = getAnswer();
        return userAns === correctAns ? playRound(--round, true) : printWrongAnswer(playerName, correctAns, userAns);
    }

    return playRound(GAME_ROUND)
}

export default playEvenGame;
