<template>
  <div class="Thumbnail">
    <div class="Image">
      We don't have images yet
    </div>
    <div class="Text">
      <h1>{{name}}</h1>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'SeqThumbnail',
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    attributes: {
      type: Array,
      required: true,
    },
  },
});
</script>
