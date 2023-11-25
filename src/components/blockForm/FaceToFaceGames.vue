<template>
  <div class="componentForm q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="componentForm__text" style="width: 100%;">Очные игры исход</p>
    <div class="colomn">
      <div class="row">
        <DropDownList></DropDownList>
        <PopupAccount text="Выбрать счёт матча"></PopupAccount>
      </div>

      <div class="row">
        <TwoInputText title="Команда 1" text-end="игр"></TwoInputText>
        <TwoInputText title="Ничья" text-end="игр"></TwoInputText>
        <TwoInputText title="Команда 2" text-end="игр"></TwoInputText>
      </div>

      <div class="row">
        <TwoInputText title="Любая В" text-end="игр"></TwoInputText>
        <TwoInputText title="Любая П" text-end="игр"></TwoInputText>
      </div>




    </div>
  </div>
</template>

<script lang="ts">

import DropDownList from '../elements/DropDownList.vue';
import TwoInputText from '../elements/TwoInputText.vue';
import PopupAccount from '../elements/PopupAccount.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'FaceToFaceGames',
  components: { DropDownList, TwoInputText, PopupAccount }
});
</script>
