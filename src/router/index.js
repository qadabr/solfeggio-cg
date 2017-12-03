import Vue from 'vue';
import Router from 'vue-router';

import Chords from '@/components/Chords';
import Progression from '@/components/Progression';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/chords',
      name: 'Chords',
      component: Chords,
    },
    {
      path: '/progression',
      name: 'Progression',
      component: Progression,
    },
  ],
});
