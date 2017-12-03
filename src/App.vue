<template>
  <v-app id="inspire" dark>
    <navigation></navigation>
    <v-content>
      <v-container fluid fill-height>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017 SoundNinja</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'app',
  components: { Navigation },
};
</script>

<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main.styl'
</style>
