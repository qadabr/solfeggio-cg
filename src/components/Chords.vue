<template>
  <v-layout justify-center align-center>
    <div class="col-lg-5">
    <div>
      <h4>Аккорды</h4>
      <p>Попытайтесь отгадать структуру аккорда по его звучанию</p>
    </div>
    <div id="buttons" class="row justify-content-between">
        <input class="btn btn-primary col-8"
          v-on='{mousedown: chordAttack, mouseup: chordRelease}'
          type='button'
          value='Играть аккорд'
        />
        <input class="btn btn-outline-secondary col-3" type='button' value='Настройки' disabled/>
    </div>
    <div id="answers" class="row list-group">
        <div
            class="list-group-item list-group-item-action"
            v-for='chord in chords'
            v-on:click='chordChoose(chord.name)'
            v-bind:class="['list-group-item', 'list-group-item-action', (trueVariant === chord.name) && 'success', (falseVariant === chord.name) && 'error']"
        >
            {{chord.name}}
        </div>
    </div>
    <div class="score row col-lg-5">
      <div class="text-white bg-dark col">
        <span> <b>Правильно {{score}} из {{tries}}</b></span>
      </div>
    </div>
  </div>
  </v-layout>
</template>

<script>
  import { types } from '../lib/chordsType'
  import * as chords from '../lib/chords'
  import * as notes from '../lib/notes'

  const genChord = function () {
    return new chords.Chord(
      notes.getRandTone(),
      notes.getRandOctave(2, 5),
      chords.getRandType()
    )
  }

  export default {
    data () {
      return {
        score: 0,
        tries: 0,
        chords: types,
        activeChord: genChord(),
        trueVariant: '',
        falseVariant: ''
      }
    },
    methods: {
      chordAttack: function () {
        if (this.activeChord == null) {
          this.activeChord = genChord()
        }
        this.activeChord.attack()
      },
      chordRelease: function () {
        this.activeChord.release()
      },
      chordChoose: function (name) {
        if (this.activeChord == null) {
          alert('Нажмите кнопку "Играть аккорд"')
          return
        }
        if (name === this.activeChord.getName()) {
          ++this.score
          this.showResult(name)
        } else {
          this.showResult(this.activeChord.getName(), name)
        }
        ++this.tries
        this.activeChord = null
      },
      showResult: function (trueVariant, falseVariant = '') {
        this.trueVariant = trueVariant
        this.falseVariant = falseVariant
        console.log(this.trueVariant, this.falseVariant)
        setTimeout(() => {
          this.trueVariant = ''
          this.falseVariant = ''
          console.log(this.trueVariant, this.falseVariant)
        }, 1000)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-item {
  cursor: pointer;
  user-select: none;
}

.success {
  background-color: green !important;
}

.error {
  background-color: red;
}
</style>
