import playGame from '../play-game.js';
import util from '../utils.js';
import GameConditions from '../game-conditions.js';

const MAX_PROGRESSION_LEN = 10;
const MIN_PROGRESSION_LEN = 5;
const MAX_INITIAL_VALUE = 100;
const MIN_INITIAL_VALUE = 1;
const MIN_DEVIATION = 1;
const MAX_DEVIATION = 100;

const getProgression = () => {
  const n = util.randomInt(MIN_DEVIATION, MAX_DEVIATION);
  return (a) => a + n;
};

const getQuestionAnswerPair = () => {
  const fn = getProgression();
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

export default playGame(GameConditions.progression, getQuestionAnswerPair);
