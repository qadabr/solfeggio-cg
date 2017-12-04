import Tone from 'tone';
import tones from './tones';
import { composeSound } from './chords';
import { pianoSynth } from './sampler';
import { randNum } from './stuff';

const modeFunctions = {
  T: {
    degree: 0,
    mode: 'M',
  },
  II: {
    degree: 2,
    mode: 'm',
  },
  III: {
    degree: 4,
    mode: 'm',
  },
  S: {
    degree: 5,
    mode: 'M',
  },
  D: {
    degree: 7,
    mode: 'M',
  },
  VI: {
    degree: 9,
    mode: 'm',
  },
  VII: {
    degree: 11,
    mode: 'm',
  },
};

export const progressions = [
    ['T', 'D', 'VI', 'S'],
    ['T', 'VI', 'T', 'VI'],
];

const modeChord = (mode) => {
  switch (mode) {
    case 'M':
      return [0, 4, 7];
    case 'm':
      return [0, 3, 7];
    default:
      return [0];
  }
};

const playFunction = (root, octave, func) => {
  const intervals = modeChord(func.mode).map(v => v + func.degree);
  const sound = composeSound(root, octave, intervals);
  pianoSynth.triggerAttackRelease(sound);
};

export const composePattern = (progression) => {
  const root = randNum(0, tones.length);
  const octave = randNum(3, 5);
  const pattern = new Tone.Pattern((time, funcName) => {
    playFunction(root, octave, modeFunctions[funcName]);
  }, progression);

  pattern.playbackRate = 0.5;

  return pattern;
};
