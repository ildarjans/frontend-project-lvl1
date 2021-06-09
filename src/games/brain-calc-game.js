import playGame from '../play-game.js';
import util from '../utils.js';
import GameConditions from '../game-conditions.js';

const operations = [
  (a, b) => [`${a} + ${b}`, `${a + b}`],
  (a, b) => [`${a} - ${b}`, `${a - b}`],
  (a, b) => [`${a} * ${b}`, `${a * b}`],
];

const getQuestionAnswerPair = () => (
  util.randomElement(operations)(util.randomInt(), util.randomInt())
);

export default playGame(GameConditions.calc, getQuestionAnswerPair);
