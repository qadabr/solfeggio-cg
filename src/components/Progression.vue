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
      <v-alert outline color="info" icon="info" v-model="alert">
        Нажмите кнопку "Играть прогрессию"
      </v-alert>
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
  import { progressions, playProgression } from '../lib/progression';

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
        if (this.current === null) {
          this.current = progressions[Math.floor(Math.random() * progressions.length)];
        }
        playProgression(this.current);
      },
    },
  };
</script>
