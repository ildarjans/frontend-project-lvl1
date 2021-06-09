import playGame from '../common.js';
import util from '../utils.js';

const TASK_CONDITION = 'What is the result of the expression?';

const operations = [
  (a, b) => [`${a} + ${b}`, `${a + b}`],
  (a, b) => [`${a} - ${b}`, `${a - b}`],
  (a, b) => [`${a} * ${b}`, `${a * b}`],
];

const getQuestionAnswerPair = () => (
  util.randomElement(operations)(util.randomInt(), util.randomInt())
);

export default playGame(TASK_CONDITION, getQuestionAnswerPair);
