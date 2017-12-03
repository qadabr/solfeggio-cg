<template>
  <v-app id="inspire" dark>
    <navigation></navigation>
    <v-content>
      <v-container fluid fill-height>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
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
.container-fluid {
  max-width: 100%;
}

h3 {
  padding-bottom: 9px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.top-label {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}

/*
* Sidebar
*/

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  /* Scrollable contents if viewport is shorter than content. */
  border-right: 1px solid #eee;
}

.sidebar .nav-item {
  width: 100%;
}

.sidebar .nav-item + .nav-item {
  margin-left: 0;
}

.sidebar .nav-link {
  border-radius: 0;
}

/* main */

main {
  padding-top: 0;
}

#buttons {
  margin-bottom: 20px;
}

#answers {
  padding: 0 15px;
}

.score {
  margin-top: 20px;
}

.score .col {
  padding: 10px;
  background-color: grey;
}

</style>
