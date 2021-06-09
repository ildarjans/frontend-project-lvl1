import playGame from '../common.js';
import util from '../utils.js';

const TASK_CONDITION = '"yes" if given number is prime. Otherwise answer "no"';
const MAX_NUMBER = 1000;

const PlayerAnswer = {
  yes: 'yes',
  no: 'no',
};

const isPrime = (n) => {
  const iter = (x) => {
    if (n % x === 0) { return false; }
    return x * x <= n ? util.iter(util.inc(x)) : true;
  };
  return n <= 2 ? true : iter(2);
};
const getQuestionAnswerPair = () => {
  const num = util.randomInt(MAX_NUMBER);
  return [`${num}`, isPrime(num) ? PlayerAnswer.yes : PlayerAnswer.no];
};

export default playGame(TASK_CONDITION, getQuestionAnswerPair);
