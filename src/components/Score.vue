<template>
  <div class="score">
    <div>
      <span><b>Правильно {{score}} из {{tries}}</b></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['score', 'tries'],
  };
</script>

<style lang="stylus" scoped>
.score
  margin-top: 1em
</style>
