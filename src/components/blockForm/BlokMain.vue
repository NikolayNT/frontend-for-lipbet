<template>
  <div class="q-pa-sm" style="width: 60%; border: 2px solid black; border-radius: 30px">
    <p class="text-h4">Основные</p>
    <div class="row">
      <checkbox-component title="Выигрывает команда 1"></checkbox-component>
      <checkbox-component title="Ничья"></checkbox-component>
      <checkbox-component title="Выигрывает команда 2"></checkbox-component>
      <checkbox-component title="Первый тайм"></checkbox-component>
      <checkbox-component title="Перерыв"></checkbox-component>
      <checkbox-component title="Второй тайм"></checkbox-component>
    </div>
    <div class="row" style="width: 100%">
      <OneInputText title="Счёт матча" style="margin-right: 130px"></OneInputText>
      <OneInputText title="Счёт на перерыве" style="margin-right: 130px"></OneInputText>
      <TwoInputText title="Минута матча"></TwoInputText>
    </div>
  </div>
</template>

<script lang="ts">

import CheckboxComponent from '../elements/Checkbox.vue';
import OneInputText from '../elements/OneInputText.vue';
import TwoInputText from '../elements/TwoInputText.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'BlokMain',
  components: { CheckboxComponent, OneInputText, TwoInputText },
  props: {
    title: {
      type: String,
      default: ''
    },
  }
});
</script>
