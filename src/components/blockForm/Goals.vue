<template>
  <div class="colomn q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="text-h4" style="width: 100%;">Голы</p>
    <div class="row" style="width: 100%;">
      <p class="col-2 self-center q-pt-none q-ma-none q-mx-sm">Ком. 1</p>
      <div class="col-9" style="border-bottom: 2px solid black;">
        <TwoInputText title="Забито "></TwoInputText>
        <TwoInputText title="Всего "></TwoInputText>
        <TwoInputText title="Пропущено "></TwoInputText>
      </div>
      <p class="col-2 self-center q-pt-none q-ma-none q-mx-sm">Ком. 2</p>
      <div class="col-9">
        <TwoInputText title="Забито "></TwoInputText>
        <TwoInputText title="Всего "></TwoInputText>
        <TwoInputText title="Пропущено "></TwoInputText>
      </div>
    </div>
    <div>
      <div class="row">
        <DropDownList title="Голов забито" :list="['-', '0', '1', '2', '3', '4', '5']"></DropDownList>
        <DropDownList title="за последние " :list="['-', '1', '3', '5', '10', '15', '20', '25', '30', '35', '40']">
        </DropDownList>
        <p class="self-center q-pt-none q-ma-none">минут</p>
      </div>
      <div class="row">
        <DropDownList title="Голов забито" :list="['-', '0', '1', '2', '3', '4', '5']"></DropDownList>
        <p class="self-center q-pt-none q-ma-none">всего</p>
      </div>
      <TwoInputText title="Голов забито в первом тайме "></TwoInputText>
      <TwoInputText title="Голов забито во втором тайме "></TwoInputText>
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
