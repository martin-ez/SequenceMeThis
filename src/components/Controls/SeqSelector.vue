<template>
  <section id="SeqSelector">
    <h1>Select a sequencer</h1>
    <div class="SeqGallery">
      <SeqThumbnail v-for="seq in sequencers" v-bind:key="seq.name" v-bind="seq"
      v-on:click.native="changeCurrentSequencer(seq.name)"/>
    </div>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue';
import SeqThumbnail from './SeqThumbnail.vue';

import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  name: 'SeqSelector',
  computed: mapGetters({
    sequencers: 'sequencerGallery',
  }),
  methods: mapActions(['changeCurrentSequencer']),
  components: {
    SeqThumbnail,
  },
});
</script>
