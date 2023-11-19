<template>
  <div class="componentForm q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="componentForm__text">Основные</p>
    <div class="row">
      <checkbox-component title="Выигрывает команда 1" class="col-4"></checkbox-component>
      <checkbox-component title="Ничья" class="col-4"></checkbox-component>
      <checkbox-component title="Выигрывает команда 2" class="col-4"></checkbox-component>
      <checkbox-component title="Первый тайм" class="col-4"></checkbox-component>
      <checkbox-component title="Перерыв" class="col-4"></checkbox-component>
      <checkbox-component title="Второй тайм" class="col-4"></checkbox-component>
    </div>
    <div class="row">
      <PopupAccountComponent text="Выбрать счёт матча"></PopupAccountComponent>
      <PopupAccountComponent text="Выбрать счёт на перерыве" style="margin-left: auto;"></PopupAccountComponent>
      <TwoInputText title="Минута матча"></TwoInputText>
    </div>
  </div>
</template>

<script lang="ts">

import CheckboxComponent from '../elements/Checkbox.vue';
import TwoInputText from '../elements/TwoInputText.vue';
import PopupAccountComponent from '../elements/PopupAccount.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'BlokMain',
  components: { CheckboxComponent, TwoInputText, PopupAccountComponent },
  props: {
    title: {
      type: String,
      default: ''
    },
  }
});
</script>
