const randomInt = (max = 1000, min = 0) => (
  Math.floor(min + (Math.random() * (max + 1 - min)))
);

const randomElement = (arr) => arr[randomInt(arr.length - 1)];

const last = (arr) => arr[arr.length - 1];

const dec = (n, step = 1) => n - step;

const inc = (n, step = 1) => n + step;

export default {
  randomInt,
  randomElement,
  last,
  dec,
  inc,
};
