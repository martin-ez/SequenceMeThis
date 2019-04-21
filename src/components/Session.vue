<template>
  <section id="Session">
    <Tabs />
    <div class="Workspace">
      <Sequencer />
    </div>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue';
import Tabs from './Controls/Tabs.vue';
import Sequencer from './Sequencer.vue';

export default Vue.extend({
  name: 'Session',
  components: {
    Tabs,
    Sequencer,
  },
});
</script>
