<template>
  <div class="colomn q-pa-sm q-mt-md"
    style="width: 49%; border: 2px solid black; border-radius: 30px; margin-right: 9px;">
    <p class="text-h5" style="width: 50%;">{{ title }}</p>
    <div class="colomn" style="width: 100%;">
      <div style="width: 200px">
        <p style="width: 100%;">Матч</p>
        <p style="width: 100%;">1 тайм</p>
        <p style="width: 100%;">2 тайм</p>
      </div>

      <TwoInputText title="Команда 1"></TwoInputText>
      <TwoInputText title="Команда 2"></TwoInputText>
      <TwoInputText title="Любая"></TwoInputText>
      <TwoInputText title="Всего"></TwoInputText>
      <TwoInputText title="Фаворит"></TwoInputText>
      <TwoInputText title="Аутсайдер"></TwoInputText>

    </div>
  </div>
</template>

<script lang="ts">

import TwoInputText from '../../elements/TwoInputText.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'BlockForFormStatistics',
  components: { TwoInputText, },
  props: {
    title: {
      type: String,
      default: ''
    },
  }
});
</script>
