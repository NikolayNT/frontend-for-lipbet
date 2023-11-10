<template>
  <div class="row q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="text-h4" style="width: 100%;">Исход последних 10-ти игр</p>
    <div class="q-pa-sm" style="width: 50%; border-right: 2px solid black;">
      <p class="text-h4">Команда 1</p>
      <DropDownList></DropDownList>
      <TwoInputText title="В "></TwoInputText>
      <TwoInputText title="Н "></TwoInputText>
      <TwoInputText title="П "></TwoInputText>
    </div>
    <div class="q-pa-sm" style="width: calc(50% - 2px)">
      <p class="text-h4">Команда 2</p>
      <DropDownList></DropDownList>
      <TwoInputText title="В "></TwoInputText>
      <TwoInputText title="Н "></TwoInputText>
      <TwoInputText title="П "></TwoInputText>
    </div>
    <div class="q-pa-sm" style="width: 50%; border-right: 2px solid black;">
      <p class="text-h4">Фаворит</p>
      <DropDownList></DropDownList>
      <TwoInputText title="В "></TwoInputText>
      <TwoInputText title="Н "></TwoInputText>
      <TwoInputText title="П "></TwoInputText>
    </div>
    <div class="q-pa-sm" style="width: calc(50% - 2px)">
      <p class="text-h4">Аутсайдер</p>
      <DropDownList></DropDownList>
      <TwoInputText title="В "></TwoInputText>
      <TwoInputText title="Н "></TwoInputText>
      <TwoInputText title="П "></TwoInputText>
    </div>
    <div class="q-pa-sm" style="width: 50%; border-right: 2px solid black;">
      <p class="text-h4">Любая из команд</p>
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
