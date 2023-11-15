<template>
  <div class="colomn q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="text-h4" style="width: 100%;">{{ titleGeneral }}</p>
    <div class="row" style="width: 100%;">
      <DropDownListAndTwoInputText title="ТБ" title-two="коэффициент"
        :list="['-', '0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5']" end-text="голов"></DropDownListAndTwoInputText>
      <DropDownListAndTwoInputText title="ТБ" title-two="коэффициент"
        :list="['-', '0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5']" end-text="голов"></DropDownListAndTwoInputText>
    </div>
  </div>
</template>

<script lang="ts">

import DropDownListAndTwoInputText from '../elements/DropDownListAndTwoInputText.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'TotalPrematchAndLive',
  components: { DropDownListAndTwoInputText },
  props: {
    titleGeneral: {
      type: String,
      default: ''
    },
    titleOne: {
      type: String,
      default: ''
    },
    titleTwo: {
      type: String,
      default: ''
    },
  }
});
</script>
