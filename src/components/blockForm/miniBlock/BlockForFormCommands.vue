<template>
  <div class="colomn q-pa-sm q-mt-md" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="componentForm__text" style="width: 100%;">{{ title }}</p>
    <div class="colomn" style="width: 100%;">
      <div class="row">
        <DropDownList></DropDownList>
        <PopupAccountComponent text="Выбрать счёт матча"></PopupAccountComponent>
      </div>
      <div class="row">
        <TwoInputText title="ГЗ"></TwoInputText>
        <TwoInputText title="ГП" style="margin-left: 33px; margin-right: 33px;"></TwoInputText>
        <TwoInputText title="Всего З+П"></TwoInputText>
      </div>
      <div class="row">
        <DropDownListAndTwoInputText title="ТБ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']" end-text="голов">
        </DropDownListAndTwoInputText>
        <DropDownListAndTwoInputText title="Инд. ТБ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']"
          end-text="голов" style="margin-left: 80px;"></DropDownListAndTwoInputText>
        <DropDownListAndTwoInputText title="ТМ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']" end-text="голов">
        </DropDownListAndTwoInputText>
        <DropDownListAndTwoInputText title="Инд. ТМ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']"
          end-text="голов" style="margin-left:77px;"></DropDownListAndTwoInputText>
      </div>

      <div class="row">
        <DropDownList title="ГЗ в каждом min матче"></DropDownList>
        <DropDownList title="ГП в каждом min матче" style="margin-left: 202px;"></DropDownList>
      </div>

    </div>
  </div>
</template>

<script lang="ts">

import DropDownList from '../../elements/DropDownList.vue';
import TwoInputText from '../../elements/TwoInputText.vue';
import DropDownListAndTwoInputText from '../../elements/DropDownListAndTwoInputText.vue';
import PopupAccountComponent from '../../elements/PopupAccount.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'BlockForFormCommands',
  components: { DropDownList, TwoInputText, DropDownListAndTwoInputText, PopupAccountComponent },
  props: {
    title: {
      type: String,
      default: ''
    },
  }
});
</script>
