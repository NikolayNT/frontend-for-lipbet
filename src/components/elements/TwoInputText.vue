<template>
  <div class="row">
    <p class="col col-4 self-center q-pt-none q-ma-none text-no-wrap q-mx-sm ">{{ title }} от</p>
    <q-input type="number" filled v-model="text" style="max-width: 70px" class="col col-3" />
    <p class="col col-1 self-center q-pt-none q-ma-none q-mx-sm">до</p>
    <q-input type="number" filled v-model="text" style="max-width: 70px" class="col col-7" />
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
