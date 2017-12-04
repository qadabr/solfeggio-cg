export const randItem = arr =>
  arr[Math.floor(arr.length * Math.random())];

export const randNum = (min, max) =>
  Math.floor((Math.random() * (max - min)) + min);

