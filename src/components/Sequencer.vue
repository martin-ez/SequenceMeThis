<template>
  <section id="Sequencer">
    <SeqSelector v-if="!sequencer" />
    <h1>{{sequencer?sequencer.name:''}}</h1>
    <canvas ref="seqCanvas"></canvas>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue';
import SeqSelector from './Controls/SeqSelector.vue';

import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Sequencer',
  computed: mapGetters({
    sequencer: 'currentSequencer',
  }),
  components: {
    SeqSelector,
  },
  mounted() {
    // TODO: Create Graphic Engine
  },
});
</script>
