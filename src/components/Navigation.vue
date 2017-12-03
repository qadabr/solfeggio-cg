<template>
  <nav>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile to="/chords">
          <v-list-tile-action>
            <v-icon>mdi-piano</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Chords</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/progression">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Progressionn</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Solfeggio</v-toolbar-title>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>


