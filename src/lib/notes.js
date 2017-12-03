export const tones = [
  'C', 'C#',
  'D', 'D#',
  'E',
  'F', 'F#',
  'G', 'G#',
  'A', 'A#',
  'B',
];

export const getRandTone = () =>
  Math.floor(Math.random() * tones.length);

export const getRandOctave = (min, max) =>
  Math.floor((Math.random() * (max - min)) + min);

