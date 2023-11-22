<template>
  <div class="componentForm colomn q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="componentForm__text">Голы</p>
    <div class="row justify-center">
      <p class="self-center q-pt-none q-ma-none q-mx-sm" style="margin-bottom: 10px;">Команда 1</p>
      <div class="row" style="width: 100%; border-bottom: 2px solid black; margin-bottom: 10px;">
        <TwoInputText style="width: 32%" title="Забито "></TwoInputText>
        <TwoInputText style="width: 32%" title="Всего "></TwoInputText>
        <TwoInputText style="width: 32%" title="Пропущено "></TwoInputText>
      </div>
      <p class="self-center q-pt-none q-ma-none q-mx-sm" style="margin-bottom: 10px;">Команда 2</p>
      <div class="row" style="width: 100%; border-bottom: 2px solid black;">
        <TwoInputText style="width: 32%" title="Забито "></TwoInputText>
        <TwoInputText style="width: 32%" title="Всего "></TwoInputText>
        <TwoInputText style="width: 32%" title="Пропущено "></TwoInputText>
      </div>
    </div>
    <div class="row q-mx-sm">
      <div class="row">
        <DropDownList title="Голов забито" :list="['-', '0', '1', '2', '3', '4', '5']"></DropDownList>
        <DropDownList title="за последние " :list="['-', '1', '3', '5', '10', '15', '20', '25', '30', '35', '40']">
        </DropDownList>
        <p class="self-center q-pt-none q-ma-none" style="margin-bottom: 10px;">&nbsp;минут</p>
      </div>
      <TwoInputText title="Голов забито в первом тайме " style="margin-left: auto;"></TwoInputText>
      <div class="row">
        <DropDownList title="Голов забито" :list="['-', '0', '1', '2', '3', '4', '5']"></DropDownList>
        <p class="self-center q-pt-none q-ma-none" style="margin-bottom: 10px;">&nbsp;всего</p>
      </div>
      <TwoInputText title="Голов забито во втором тайме " style="margin-left: auto;"></TwoInputText>
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
  name: 'GoalsComponent',
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
