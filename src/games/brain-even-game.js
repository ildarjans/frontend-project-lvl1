import playGame from '../common.js';
import util from '../utils.js';

const TASK_CONDITION = '"yes" if the number is even, otherwise answer "no"';

const PlayerAnswer = {
  yes: 'yes',
  no: 'no',
};

const getQuestionAnswerPair = () => {
  const num = util.randomInt();
  return [num, num % 2 ? PlayerAnswer.no : PlayerAnswer.yes];
};

export default playGame(TASK_CONDITION, getQuestionAnswerPair);
