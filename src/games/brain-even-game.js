import playGame from '../play-game.js';
import util from '../utils.js';
import GameConditions from '../game-conditions.js';

const PlayerAnswer = {
  yes: 'yes',
  no: 'no',
};

const getQuestionAnswerPair = () => {
  const num = util.randomInt();
  return [num, num % 2 ? PlayerAnswer.no : PlayerAnswer.yes];
};

export default playGame(GameConditions.even, getQuestionAnswerPair);
