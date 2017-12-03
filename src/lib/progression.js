import { composeSound } from './chords';
import { pianoSynth, hasLoaded } from './sampler';
import { getRandTone, getRandOctave } from './notes';
import Tone from 'tone';

const modeFunctions = {
    'T': {
      degree: 0,
      mode: 'M',
    },
    'II': {
      degree: 2,
      mode: 'm',
    },
    'III': {
      degree: 4,
      mode: 'm',
    },
    'S': {
      degree: 5,
      mode: 'M',
    },
    'D': {
      degree: 7,
      mode: 'M',
    },
    'VI': {
      degree: 9,
      mode: 'm',
    },
    'VII': {
      degree: 11,
      mode: 'm',
    },
};

export const progressions = [
    ['T', 'S', 'VI', 'D'],
    ['T', 'VI', 'T', 'VI'],
];

const modeChord = (mode) => {
  switch (mode) {
    case 'M':
      return [0, 4, 7];
    case 'm':
      return [0, 3, 7];
  }

  return null;
};

const playFunction = (root, octave, func) => {
  const intervals = modeChord(func.mode).map(v => v + func.degree);
  pianoSynth.triggerAttackRelease(composeSound(root, octave, intervals));
};

export const playProgression = (progression) => {
  const root = getRandTone();
  const octave = getRandOctave(2, 5);
  const pattern = new Tone.Pattern((time, funcName) => {
    playFunction(root, octave, modeFunctions[funcName]);
    console.log(funcName);
  }, progression);
  if (hasLoaded()) {
    pattern.playbackRate = 0.5;
    pattern.start(0).stop(progression.length);
    Tone.Transport.start();
  }
};
