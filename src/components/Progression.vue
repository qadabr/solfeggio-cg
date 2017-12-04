<template>
  <v-layout justify-center align-center>
    <div>
      <div>
        <h4>Функции тональности</h4>
        <p>Прослушайте прогрессию и отаадайте функции тональности</p>
      </div>
      <v-divider/>
      <v-layout row justify-space-between>
        <v-btn flat dark color="primary" @click="play()">Играть прогрессию</v-btn>
        <v-btn flat dark disabled>Настройки</v-btn>
      </v-layout>
      <v-divider/>
      <div>
        <v-layout row
          v-for="p in progressions" :key="p.name"
          v-on:click="play(p)"
        >
          <v-btn flat dark>{{ p.join(', ') }}</v-btn>
        </v-layout>
      </div>
      <v-divider/>
      <score v-bind="{ score, tries }"/>
    </div>
  </v-layout>
</template>

<script>
  import Score from '@/components/Score';
  import Tone from 'tone';
  import { progressions, composePattern } from '../lib/progression';
  import { hasLoaded } from '../lib/sampler';
  import { randItem } from '../lib/stuff';

  export default {
    data() {
      return {
        progressions,
        current: null,
        score: 0,
        tries: 0,
      };
    },
    components: { Score },
    methods: {
      play() {
        this.current = this.current === null
          ? randItem(progressions)
          : this.current;

        if (hasLoaded()) {
          Tone.Transport.clear();
          const pattern = composePattern(this.current);
          pattern.start().stop(this.current.length);
          Tone.Transport.start();
        }
      },
    },
  };
</script>
