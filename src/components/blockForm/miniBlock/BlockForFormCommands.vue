<template>
  <div class="colomn q-pa-sm q-mt-md" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="text-h5" style="width: 100%;">{{ title }}</p>
    <div class="colomn" style="width: 100%;">
      <DropDownList></DropDownList>

      <p style="width: 100%;">Счёт</p>

      <TwoInputText title="ГЗ"></TwoInputText>
      <TwoInputText title="ГП"></TwoInputText>
      <TwoInputText title="Всего З+П"></TwoInputText>

      <DropDownListAndTwoInputText title="ТБ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']" end-text="голов">
      </DropDownListAndTwoInputText>
      <DropDownListAndTwoInputText title="ТМ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']" end-text="голов">
      </DropDownListAndTwoInputText>
      <DropDownListAndTwoInputText title="Инд. ТБ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']"
        end-text="голов"></DropDownListAndTwoInputText>
      <DropDownListAndTwoInputText title="Инд. ТМ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']"
        end-text="голов"></DropDownListAndTwoInputText>

      <DropDownList title="ГЗ в каждом min матче"></DropDownList>
      <DropDownList title="ГП в каждом min матче"></DropDownList>
    </div>
  </div>
</template>

<script lang="ts">

import DropDownList from '../../elements/DropDownList.vue';
import TwoInputText from '../../elements/TwoInputText.vue';
import DropDownListAndTwoInputText from '../../elements/DropDownListAndTwoInputText.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'BlockForFormCommands',
  components: { DropDownList, TwoInputText, DropDownListAndTwoInputText },
  props: {
    title: {
      type: String,
      default: ''
    },
  }
});
</script>
