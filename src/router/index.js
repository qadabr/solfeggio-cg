import Vue from 'vue';
import Router from 'vue-router';
import Chords from '@/components/Chords';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/chords',
      name: 'Chords',
      component: Chords,
    },
  ],
});
