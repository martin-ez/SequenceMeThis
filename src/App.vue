<template>
  <div id="app">
    <Session />
    <Home v-bind:hide="inSession" v-on:start-session="startSession"/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Home from './components/Home.vue';
import Session from './components/Session.vue';

export default Vue.extend({
  name: 'app',
  data() {
    return {
      inSession: false,
    };
  },
  methods: {
    startSession(): void {
      this.inSession = true;
    },
  },
  components: {
    Home,
    Session,
  },
});
</script>

<style lang='scss' src="./App.scss"></style>
