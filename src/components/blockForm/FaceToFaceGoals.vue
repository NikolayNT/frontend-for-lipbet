<template>
  <div class="colomn q-pa-sm q-mt-md" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="text-h5" style="width: 100%;">Очные игры голы</p>
    <div class="colomn" style="width: 100%;">
      <DropDownList></DropDownList>

      <p style="width: 100%;">Счёт</p>

      <TwoInputText title="ГЗ Ком. 1"></TwoInputText>
      <TwoInputText title="ГП Ком. 1"></TwoInputText>
      <DropDownListAndTwoInputText title="ИНД. Т Ком. 1" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']"
        end-text="голов"></DropDownListAndTwoInputText>

      <TwoInputText title="ГЗ Ком. 2"></TwoInputText>
      <TwoInputText title="ГП Ком. 2"></TwoInputText>
      <DropDownListAndTwoInputText title="ИНД. Т Ком. 2" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']"
        end-text="голов"></DropDownListAndTwoInputText>
      <DropDownListAndTwoInputText title="ТБ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']" end-text="голов">
      </DropDownListAndTwoInputText>
      <DropDownListAndTwoInputText title="ТМ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']" end-text="голов">
      </DropDownListAndTwoInputText>
      <p>Забито голов Ком.1 + Ком. 2</p>
      <TwoInputText title="Фаворит"></TwoInputText>
      <TwoInputText title="Аутсайдер"></TwoInputText>

    </div>
  </div>
</template>

<script lang="ts">

import DropDownList from '../elements/DropDownList.vue';
import TwoInputText from '../elements/TwoInputText.vue';
import DropDownListAndTwoInputText from '../elements/DropDownListAndTwoInputText.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'FaceToFaceGoals',
  components: { DropDownList, TwoInputText, DropDownListAndTwoInputText }
});
</script>
