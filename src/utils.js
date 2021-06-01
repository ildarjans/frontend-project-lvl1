export const randomInt = (max= 1000, min = 0) => (
    Math.floor(min + (Math.random() * (max - min)))
);

export const randomElement = (arr) => arr[randomInt(arr.length - 1)];

