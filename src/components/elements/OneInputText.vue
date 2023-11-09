<template>
  <div class="row">
    <p class="col self-center q-pt-none q-ma-none q-mx-sm">{{ title }}</p>
    <q-input type="number" filled v-model="text" class="col q-mr-sm" style="max-width: 70px" />
  </div>
</template>

<script lang="ts">

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: 'OneInputComponent',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  setup() {
    return {
      text: ref('')
    }
  }
});
</script>
