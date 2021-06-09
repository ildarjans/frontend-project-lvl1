import playGame from '../play-game.js';
import util from '../utils.js';
import GameConditions from '../game-conditions.js';

const MAX_NUMBER = 1000;

const PlayerAnswer = {
  yes: 'yes',
  no: 'no',
};

const isPrime = (n) => {
  const iter = (x) => {
    if (n % x === 0) { return false; }
    return x * x <= n ? iter(util.inc(x)) : true;
  };
  return n <= 2 ? true : iter(2);
};
const getQuestionAnswerPair = () => {
  const num = util.randomInt(MAX_NUMBER);
  return [`${num}`, isPrime(num) ? PlayerAnswer.yes : PlayerAnswer.no];
};

export default playGame(GameConditions.prime, getQuestionAnswerPair);
