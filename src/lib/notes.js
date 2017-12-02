export const tones = [
  'C', 'C#',
  'D', 'D#',
  'E',
  'F', 'F#',
  'G', 'G#',
  'A', 'A#',
  'B'
]

export const getRandTone = function () {
  return Math.floor(Math.random() * tones.length)
}

export const getRandOctave = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
