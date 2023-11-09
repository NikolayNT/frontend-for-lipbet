<template>
  <div class="col-4">
    <q-checkbox v-model="right" v-bind:label="title" />
  </div>
</template>

<script lang="ts">

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: 'CheckboxComponent',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  setup() {
    return {
      right: ref(false),
    }
  }
});
</script>
