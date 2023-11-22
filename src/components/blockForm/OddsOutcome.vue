<template>
  <div class="componentForm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="componentForm__text" style="width: 100%">{{ titleGeneral }}</p>
    <div class="q-pa-sm" style="width: 50%;">
      <p class="text-h5">{{ titleOne }}</p>
      <TwoInputText title="П1 "></TwoInputText>
      <TwoInputText title="Х "></TwoInputText>
      <TwoInputText title="П2 "></TwoInputText>
    </div>
    <div class="q-pa-sm" style="width: calc(50%)">
      <p class="text-h5">{{ titleTwo }}</p>
      <TwoInputText title="П1 "></TwoInputText>
      <TwoInputText title="Х "></TwoInputText>
      <TwoInputText title="П2 "></TwoInputText>
    </div>
  </div>
</template>

<script lang="ts">

import TwoInputText from '../elements/TwoInputText.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'OddsOutcomeComponent',
  components: { TwoInputText },
  props: {
    titleGeneral: {
      type: String,
      default: ''
    },
    titleOne: {
      type: String,
      default: 'Фаворит'
    },
    titleTwo: {
      type: String,
      default: 'Аутсайдер'
    },
  }
});
</script>
