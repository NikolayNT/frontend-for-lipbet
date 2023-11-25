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

      <div>
        <div>
          <DropDownList title="Угловых подано"></DropDownList>
          <DropDownList title="за последние" :list="['-', '1', '3', '5', '10', '15', '20', '25', '30', '35', '40']">
          </DropDownList>
          <p>минут</p>
        </div>
        <div>
          <DropDownList title="Угловых подано"></DropDownList>
          <p>всего</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import TwoInputText from '../../elements/TwoInputText.vue';
import DropDownList from 'src/components/elements/DropDownList.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'BlockForFormStatisticsBig',
  components: { TwoInputText, DropDownList },
  props: {
    title: {
      type: String,
      default: ''
    },
  }
});
</script>
