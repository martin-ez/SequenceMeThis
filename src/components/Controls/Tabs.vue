<template>
  <div id="Tabs">
    <div class="Tabs">
      <Tab v-for="(seq, i) in sequencers" v-bind:key="`seq-${i}`" :sequencer="seq?seq.name:'Empty'" :current="i===currentTab"
      v-on:click.native="changeCurrentTab(i)"/>
    </div>
  </div id="Tabs">
</template>

<script lang='ts'>
import Vue from 'vue';
import Tab from './Tab.vue';

import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  name: 'Tabs',
  computed: mapGetters(['sequencers', 'currentTab']),
  methods: mapActions(['changeCurrentTab']),
  components: {
    Tab,
  },
});
</script>
