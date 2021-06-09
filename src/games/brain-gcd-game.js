import playGame from '../common.js';
import util from '../utils.js';

const TASK_CONDITION = 'Find the greatest common divisor of given numbers.';

const MAX_GCD_NUM = 100;
const MIN_GCD_NUM = 1;

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

const getQuestionAnswerPair = () => {
  const a = util.randomInt(MAX_GCD_NUM, MIN_GCD_NUM);
  const b = util.randomInt(MAX_GCD_NUM, MIN_GCD_NUM);
  return [`${a} ${b}`, `${gcd(a, b)}`];
};

export default playGame(TASK_CONDITION, getQuestionAnswerPair);
