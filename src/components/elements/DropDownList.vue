<template>
  <div class="row" style="width: 100px;">
    <p class="col self-center q-pt-none q-ma-none q-mx-sm">Игр</p>
    <q-select v-model="model" :options="options" label="Standard" />
  </div>
</template>

<script lang="ts">

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: 'DropDownList',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  setup() {
    return {
      model: ref(null),
      options: [
        '', '1', '2', '3', '4', '5', '6'
      ]
    }
  }
});
</script>
