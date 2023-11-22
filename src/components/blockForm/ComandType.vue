<template>
  <div class="componentForm row">
    <div class="q-pa-sm" style="width: 50%; border-right: 2px solid black;">
      <p class="componentForm__text">{{ titleOne }}</p>
      <TwoInputText title="Фаворит коэффициент "></TwoInputText>
      <div class="row">
        <div style="width: 50%;">
          <RadioBatton></RadioBatton>
        </div>
        <div style="width: 50%;">
          <checkbox-component title="Проигрывает"></checkbox-component>
          <checkbox-component title="Выигрывает"></checkbox-component>
          <checkbox-component title="Ничья"></checkbox-component>
        </div>
      </div>
    </div>
    <div class="q-pa-sm" style="width: calc(50% - 2px)">
      <p class="componentForm__text">{{ titleTwo }}</p>
      <TwoInputText title="Аутсайдер коэффициент "></TwoInputText>
      <div class="row">
        <div style="width: 50%;">
          <RadioBatton></RadioBatton>
        </div>
        <div style="width: 50%;">
          <checkbox-component title="Проигрывает"></checkbox-component>
          <checkbox-component title="Выигрывает"></checkbox-component>
          <checkbox-component title="Ничья"></checkbox-component>
        </div>
      </div>
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
