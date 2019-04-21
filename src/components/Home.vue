<template>
  <section id="Home" v-bind:class="hide?'Hidden':''">
    <h1>Sequence Me This!</h1>
    <button v-on:click="$emit('start-session')">Start sequencing!</button>
    <div class="ColorTransition">
      <div v-bind:class="'ColorBox'+ (hide?' Hidden':'')">
        <p>LET'S</p>
      </div>
      <div v-bind:class="'ColorBox'+ (hide?' Hidden':'')">
        <p>DO</p>
      </div>
      <div v-bind:class="'ColorBox'+ (hide?' Hidden':'')">
        <p>THIS!</p>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  props: {
    hide: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
