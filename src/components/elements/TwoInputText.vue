<template>
  <div>
    <p>Минута матча от</p>
    <q-input filled v-model="text" />
    <p>до</p>
    <q-input filled v-model="text" />
  </div>
</template>

<script lang="ts">

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: 'OneInputComponent',
  /*props: {
    title: {
      type: String,
      default: ''
    },
  },*/
  setup() {
    return {
      text: ref('');
    }
  }
});
</script>
