<template>
  <div class="colomn q-pa-sm q-mt-md"
    style="width: 48%; border: 2px solid black; border-radius: 30px; margin-right: 9px;">
    <p class="componentForm__text" style="width: 100%;">{{ title }}</p>
    <div class="colomn" style="width: 100%;">
      <q-btn-group rounded style="margin: 10px 0">
        <q-btn rounded class="button" label="Матч" />
        <q-btn rounded class="button" label="1 тайм" />
        <q-btn rounded class="button" label="2 тайм" />
      </q-btn-group>

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
