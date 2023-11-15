<template>
  <div class="row">
    <p class=" self-center q-pt-none q-ma-none text-no-wrap q-mx-sm ">{{ title }} от</p>
    <q-input type="number" filled v-model="text" style="max-width: 70px" />
    <p class=" self-center q-pt-none q-ma-none q-mx-sm">до</p>
    <q-input type="number" filled v-model="text" style="max-width: 70px" class="" />
    <p class="self-center q-pt-none q-ma-none q-mx-sm">{{ textEnd }}</p>
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
    textEnd: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {
      text: ref('')
    }
  }
});
</script>
