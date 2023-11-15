<template>
  <div class="colomn q-pa-sm q-mt-md" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="text-h5" style="width: 100%;">Очные игры исход</p>
    <div class="colomn" style="width: 100%;">
      <DropDownList></DropDownList>

      <p style="width: 100%;">Счёт</p>

      <TwoInputText title="Ком. 1" text-end="игр"></TwoInputText>
      <TwoInputText title="Ничья" text-end="игр"></TwoInputText>
      <TwoInputText title="Ком. 2" text-end="игр"></TwoInputText>
      <TwoInputText title="Любая В" text-end="игр"></TwoInputText>
      <TwoInputText title="Любая П" text-end="игр"></TwoInputText>


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
  name: 'FaceToFaceGames',
  components: { DropDownList, TwoInputText }
});
</script>
