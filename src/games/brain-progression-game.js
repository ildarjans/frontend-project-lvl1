import playGame from '../common.js';
import util from '../utils.js';

const TASK_CONDITION = 'What number is missing in the progression?';
const MAX_PROGRESSION_LEN = 10;
const MIN_PROGRESSION_LEN = 5;
const MAX_INITIAL_VALUE = 100;
const MIN_INITIAL_VALUE = 1;
const progressions = [
  (a) => a + 1,
  (a) => a + 3,
  (a) => a + 5,
  (a) => a + 13,
  (a) => a * 2,
  (a) => a * 3,
];

const getQuestionAnswerPair = () => {
  const fn = util.randomElement(progressions);
  const progressionLen = util.randomInt(MAX_PROGRESSION_LEN, MIN_PROGRESSION_LEN);
  const genProgression = (acc, count) => (
    count < progressionLen
      ? genProgression([...acc, fn(util.last(acc))], util.inc(count))
      : acc
  );
  const progression = genProgression([util.randomInt(MAX_INITIAL_VALUE, MIN_INITIAL_VALUE)], 0);
  const answer = progression.splice(util.randomInt(progressionLen - 1), 1, '..');
  return [progression.join(' '), `${answer}`];
};

export default playGame(TASK_CONDITION, getQuestionAnswerPair);
