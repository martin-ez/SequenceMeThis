<template>
  <div v-bind:class="'Tab '+sequencer+(current?' Current':'')">
    <p v-if="sequencer==='Empty'"><i class="fas fa-plus"></i></p>
    <p v-else>{{sequencer}}</p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Tab',
  props: {
    sequencer: {
      type: String,
      required: true,
    },
    current: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
