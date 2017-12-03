<template>
  <v-layout justify-center align-center>
    <div class="col-lg-5">
      
      <div>
        <h4>Функции тональности</h4>
        <p>Прослушайте прогрессию и отаадайте функции тональности</p>
      </div>

    <div id="buttons" class="row justify-content-between">
        <input class="btn btn-primary col-8" @click='playProgression' type='button' value='Играть прогрессию' />
        <input class="btn btn-outline-secondary col-3" type='button' value='Настройки' disabled />
    </div>

    <div id="answers" class="row list-group">
        <div v-for='p in progressions' :key='p.name' class="list-group-item list-group-item-action" @click='play(p)'>{{ display(p) }}</div>
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
import { progressions } from '../lib/progression';

export default {
  data() {
      return {
          progressions: progressions,
          score: 0,
          tries: 0,
      }
  },
  methods: {
      display: (progression) => {
          let string = '';
          progression.forEach(func => {
              string += func + ' ';
          });

          return string;
      },
      play: (progression) => {

      }
  },
}
</script>
