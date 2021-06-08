import {playGame} from "../common.js";
import {randomElement, randomInt, last} from "../utils.js";

const TASK_CONDITION = `What number is missing in the progression?`;
const PROGRESSION_LEN = 10;
const MAX_INITIAL_VALUE = 100;

const progressions = [
    (a) => a + 1,
    (a) => a + 3,
    (a) => a + 5,
    (a) => a * 2 - 2,
    (a) => a * 3 - 3,
]

const getQuestionAnswerPair = () => {
    const fn = randomElement(progressions);
    const genProgression = (acc, count) => (
        count < PROGRESSION_LEN ?
        genProgression([...acc, fn(last(acc))], ++count) :
        acc
    );
    const progression = genProgression([randomInt(MAX_INITIAL_VALUE)], 0);
    const answer = progression.splice(randomInt(PROGRESSION_LEN - 1, 1), 1, '..');
    return [progression.join(' '), `${answer}`];
}

export default playGame(TASK_CONDITION, getQuestionAnswerPair);