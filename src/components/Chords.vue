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
    <v-alert outline color="info" icon="info" v-model="alert">
      Нажмите кнопку "Играть аккорд"
    </v-alert>
    <answers
      :answers="chords"
      :rightAnswer="activeChord"
      v-on:increment-score="increment('score')"
      v-on:increment-tries="increment('tries')"
      v-on:reset-chord="resetChord"
      v-on:alert-init="alertInit"
    />
    <v-divider/>
    <score v-bind="{ score, tries }"/>
  </div>
  </v-layout>
</template>

<script>
  import Score from '@/components/Score';
  import Answers from '@/components/Answers';
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
        alert: false,
      };
    },
    components: { Score, Answers },
    methods: {
      alertInit() {
        this.alert = true;
      },
      resetChord() {
        this.activeChord = null;
      },
      increment(value) {
        this[value] += 1;
      },
      playChord() {
        this.alert = false;
        if (this.activeChord === null) {
          this.activeChord = genChord();
        }
        if (hasLoaded()) {
          pianoSynth.triggerAttackRelease(this.activeChord.sound);
        }
      },
    },
  };
</script>
