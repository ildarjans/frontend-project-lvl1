import { playGame } from '../common.js';
import {
  randomElement, randomInt, last, inc,
} from '../utils.js';

const TASK_CONDITION = 'What number is missing in the progression?';
const MAX_PROGRESSION_LEN = 10;
const MIN_PROGRESSION_LEN = 5;
const MAX_INITIAL_VALUE = 100;
const MIN_INITIAL_VALUE = 1;
const progressions = [
  (a) => a + 1,
  (a) => a + 3,
  (a) => a + 5,
  (a) => a * 2 - 2,
  (a) => a * 3 - 3,
];

const getQuestionAnswerPair = () => {
  const fn = randomElement(progressions);
  const progressionLen = randomInt(MAX_PROGRESSION_LEN, MIN_PROGRESSION_LEN);
  const genProgression = (acc, count) => (
    count < progressionLen
      ? genProgression([...acc, fn(last(acc))], inc(count))
      : acc
  );
  const progression = genProgression([randomInt(MAX_INITIAL_VALUE, MIN_INITIAL_VALUE)], 0);
  const answer = progression.splice(randomInt(progressionLen - 1), 1, '..');
  return [progression.join(' '), `${answer}`];
};

export default playGame(TASK_CONDITION, getQuestionAnswerPair);
