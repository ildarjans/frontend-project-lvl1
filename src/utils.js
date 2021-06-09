export const randomInt = (max = 1000, min = 0) => (
  Math.floor(min + (Math.random() * (max - min)))
);

export const randomElement = (arr) => arr[randomInt(arr.length - 1)];

export const last = (arr) => arr[arr.length - 1];

export const dec = (n, step = 1) => n - step;

export const inc = (n, step = 1) => n + step;
