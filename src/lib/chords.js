import * as notes from './notes'
import { types } from './chordsType'
import * as sampler from './sampler'

export const getRandType = function () {
  return types[Math.floor(Math.random() * types.length)]
}

export class Chord {
  constructor (root, octave, type) {
    this.name = type.name

    let notesArray = []
    type.intervals.forEach(function (interval) {
      let index = root + interval
      let realNote = notes.tones[Math.floor(index) % notes.tones.length]
      let realOctave = Math.floor(index / notes.tones.length + octave)

      notesArray.push(realNote + realOctave)
    }, this)

    this.notesArray = notesArray
    console.log(type.name)
  }

  attack () {
    if (sampler.hasLoaded()) {
      sampler.pianoSynth.triggerAttack(this.notesArray)
    }
  }

  release () {
    if (sampler.hasLoaded()) {
      sampler.pianoSynth.triggerRelease(this.notesArray)
    }
  }

  getName () {
    return this.name
  }
}
