<template>
  <v-layout justify-center align-center>
    <div>
    <div>
      <h4>Аккорды</h4>
      <p>Попытайтесь отгадать структуру аккорда по его звучанию</p>
    </div>
    <v-divider/>
    <v-layout row justify-space-between>
      <v-btn flat dark color="primary" @click="playChord()">Играть аккорд</v-btn>
      <v-btn flat dark disabled>Настройки</v-btn>
    </v-layout>
    <v-divider/>
    <div>
        <v-layout row
            v-for="chord in chords"
            :key="chord.name"
            @click="chordChoose(chord.name)"
            v-bind:class="[(trueVariant === chord.name) && 'success', (falseVariant === chord.name) && 'error']"
        >

            <v-btn flat dark>{{chord.name}}</v-btn>
        </v-layout>
    </div>
    <v-divider/>
    <div class="score">
      <div>
        <span><b>Правильно {{score}} из {{tries}}</b></span>
      </div>
    </div>
  </div>
  </v-layout>
</template>

<script>
  import { types, genChord } from '../lib/chords';
  import { pianoSynth, hasLoaded } from '../lib/sampler';

  export default {
    data() {
      return {
        score: 0,
        tries: 0,
        chords: types,
        activeChord: null,
        trueVariant: '',
        falseVariant: '',
      };
    },
    methods: {
      playChord() {
        if (this.activeChord === null) {
          this.activeChord = genChord();
        }
        if (hasLoaded()) {
          pianoSynth.triggerAttackRelease(this.activeChord.sound);
        }
      },
      chordChoose(name) {
        if (this.activeChord === null) {
          alert('Нажмите кнопку "Играть аккорд"');
          return;
        }
        if (name === this.activeChord.name) {
          this.score += 1;
          this.showResult(name);
        } else {
          this.showResult(this.activeChord.name, name);
        }
        this.tries += 1;
        this.activeChord = null;
      },
      showResult(trueVariant, falseVariant = '') {
        this.trueVariant = trueVariant;
        this.falseVariant = falseVariant;
        console.log(this.trueVariant, this.falseVariant);
        setTimeout(() => {
          this.trueVariant = '';
          this.falseVariant = '';
          console.log(this.trueVariant, this.falseVariant);
        }, 1000);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.success
  background-color: green !important

.error
  background-color: red

.score
  margin-top: 1em
</style>
