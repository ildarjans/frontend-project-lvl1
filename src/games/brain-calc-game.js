import {playGame} from "../common.js";
import {randomInt, randomElement} from "../utils.js";

const TASK_CONDITION = `What is the result of the expression?`;

const operations = [
    (a, b) => [`${a} + ${b}`, `${a + b}`],
    (a, b) => [`${a} - ${b}`, `${a - b}`],
    (a, b) => [`${a} * ${b}`, `${a * b}`],
];

const getQuestionAnswerPair = () => randomElement(operations)(randomInt(), randomInt());

export default playGame(TASK_CONDITION, getQuestionAnswerPair)
