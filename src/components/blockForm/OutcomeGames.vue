<template>
  <div class="componentForm q-pa-sm row">
    <p class="componentForm__text">Исход последних 10-ти игр</p>
    <div style="width: 33%;">
      <p class="componentForm__text">Команда 1</p>
      <DropDownList></DropDownList>
      <TwoInputText title="В "></TwoInputText>
      <TwoInputText title="Н "></TwoInputText>
      <TwoInputText title="П "></TwoInputText>
    </div>
    <div style="width: 33%;">
      <p class="componentForm__text">Команда 2</p>
      <DropDownList></DropDownList>
      <TwoInputText title="В "></TwoInputText>
      <TwoInputText title="Н "></TwoInputText>
      <TwoInputText title="П "></TwoInputText>
    </div>
    <div style="width: 33%;">
      <p class="componentForm__text">Фаворит</p>
      <DropDownList></DropDownList>
      <TwoInputText title="В "></TwoInputText>
      <TwoInputText title="Н "></TwoInputText>
      <TwoInputText title="П "></TwoInputText>
    </div>
    <div style="width: 100%; height: 2px; background-color: black"></div>
    <div style="width: 33%;">
      <p class="componentForm__text">Аутсайдер</p>
      <DropDownList></DropDownList>
      <TwoInputText title="В "></TwoInputText>
      <TwoInputText title="Н "></TwoInputText>
      <TwoInputText title="П "></TwoInputText>
    </div>
    <div style="width: 35%;">
      <p class="componentForm__text">Любая из команд</p>
      <DropDownList></DropDownList>
      <TwoInputText title="В "></TwoInputText>
      <TwoInputText title="Н "></TwoInputText>
      <TwoInputText title="П "></TwoInputText>
    </div>
  </div>
</template>

<script lang="ts">

import DropDownList from '../elements/DropDownList.vue';
import TwoInputText from '../elements/TwoInputText.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'OutcomeGames',
  components: { DropDownList, TwoInputText },
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
