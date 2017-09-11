import Vue from 'vue/dist/vue.common';

import Tracker from './tracker/Tracker.vue'

const app = new Vue({
  el: '#tracker',

  components: {
    'tracker': Tracker,
  },
});
