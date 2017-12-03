import { tones, getRandTone, getRandOctave } from './notes';

export const types = [
  {
    name: 'Мажорное трезвучие',
    intervals: [0, 4, 7],
  },
  {
    name: 'Минорное трезвучие',
    intervals: [0, 3, 7],
  },
  {
    name: 'Уменьшённое трезвучие',
    intervals: [0, 3, 6],
  },
  {
    name: 'Малый мажорный септаккорд',
    intervals: [0, 4, 7, 10],
  },
  {
    name: 'Малый минорный септаккорд',
    intervals: [0, 3, 7, 10],
  },
  {
    name: 'Большой мажорный септаккорд',
    intervals: [0, 4, 7, 11],
  },
  {
    name: 'Большой минорный септаккорд',
    intervals: [0, 3, 7, 11],
  },
];

export const getRandType = () =>
  types[Math.floor(Math.random() * types.length)];

export const composeSound = (root, octave, intervals) =>
  intervals.map((interval) => {
    const index = root + interval;
    const realNote = tones[Math.floor(index) % tones.length];
    const realOctave = Math.floor((index / tones.length) + octave);

    return realNote + realOctave;
  });

export const genChord = () => {
  const type = getRandType();
  return {
    name: type.name,
    sound: composeSound(getRandTone(), getRandOctave(2, 5), type.intervals),
  };
};
