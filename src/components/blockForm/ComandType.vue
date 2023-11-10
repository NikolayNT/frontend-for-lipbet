<template>
  <div class="row" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <div class="q-pa-sm" style="width: 50%; border-right: 2px solid black;">
      <p class="text-h4">{{ titleOne }}</p>
      <TwoInputText title="Фаворит коэф. "></TwoInputText>
      <RadioBatton></RadioBatton>
      <checkbox-component title="Проигрывает"></checkbox-component>
      <checkbox-component title="Выигрывает"></checkbox-component>
      <checkbox-component title="Ничья"></checkbox-component>
    </div>
    <div class="q-pa-sm" style="width: calc(50% - 2px)">
      <p class="text-h4">{{ titleTwo }}</p>
      <TwoInputText title="Аутсайдер коэф. "></TwoInputText>
      <RadioBatton></RadioBatton>
      <checkbox-component title="Проигрывает"></checkbox-component>
      <checkbox-component title="Выигрывает"></checkbox-component>
      <checkbox-component title="Ничья"></checkbox-component>
    </div>
  </div>
</template>

<script lang="ts">

import CheckboxComponent from '../elements/Checkbox.vue';
import TwoInputText from '../elements/TwoInputText.vue';
import RadioBatton from '../elements/RadioBatton.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'ComandType',
  components: { CheckboxComponent, TwoInputText, RadioBatton },
  props: {
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
