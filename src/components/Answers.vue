<template>
  <div>
    <v-layout row
      v-for="answer in answers"
      :key="answer.name"
      @click="chordChoose(answer.name)"
      v-bind:class="[(trueVariant === answer.name) && 'success', (falseVariant === answer.name) && 'error']"
    >
      <v-btn flat dark>{{answer.name}}</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trueVariant: '',
      falseVariant: '',
    };
  },
  props: ['answers', 'rightAnswer'],
  methods: {
    chordChoose(name) {
      if (this.rightAnswer === null) {
        this.$emit('alert-init');
        return;
      }
      if (name === this.rightAnswer.name) {
        this.score += 1;
        this.$emit('increment-score');
        this.showResult(name);
      } else {
        this.showResult(this.rightAnswer.name, name);
      }
      this.tries += 1;
      this.$emit('increment-tries');
      this.$emit('reset-chord');
    },
    showResult(trueVariant, falseVariant = '') {
      this.trueVariant = trueVariant;
      this.falseVariant = falseVariant;
      setTimeout(() => {
        this.trueVariant = '';
        this.falseVariant = '';
      }, 1000);
    },
  },
};
</script>

<style lang="stylus" scoped>
.success
  background-color: green !important

.error
  background-color: red
</style>
