<template>
  <div class="componentForm q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="componentForm__text" style="width: 100%;">Очные игры голы</p>
    <div class="colomn" style="width: 100%;">
      <div class="row">
        <DropDownList></DropDownList>
        <PopupAccount text="Выбрать счёт матча"></PopupAccount>
      </div>

      <div class="row">
        <TwoInputText title="ГЗ Команда 1"></TwoInputText>
        <TwoInputText title="ГЗ Команда 2"></TwoInputText>
        <TwoInputText title="ГП Команда 1"></TwoInputText>
        <TwoInputText title="ГП Команда 2"></TwoInputText>
      </div>

      <DropDownListAndTwoInputText title="ИНД. Т Команда 1" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']"
        end-text="голов"></DropDownListAndTwoInputText>
      <DropDownListAndTwoInputText title="ИНД. Т Команда 2" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']"
        end-text="голов"></DropDownListAndTwoInputText>

      <div class="row">
        <DropDownListAndTwoInputText title="ТБ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']" end-text="голов">
        </DropDownListAndTwoInputText>
        <DropDownListAndTwoInputText title="ТМ" :list="['-', '0.5', '1.5', '2.5', '3.5', '4.5', '5.5']" end-text="голов">
        </DropDownListAndTwoInputText>
        <TwoInputText title="Фаворит"></TwoInputText>
        <TwoInputText title="Аутсайдер" style="margin-left: 80px;"></TwoInputText>
      </div>

    </div>
  </div>
</template>

<script lang="ts">

import DropDownList from '../elements/DropDownList.vue';
import TwoInputText from '../elements/TwoInputText.vue';
import DropDownListAndTwoInputText from '../elements/DropDownListAndTwoInputText.vue';
import PopupAccount from '../elements/PopupAccount.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'FaceToFaceGoals',
  components: { DropDownList, TwoInputText, DropDownListAndTwoInputText, PopupAccount }
});
</script>
