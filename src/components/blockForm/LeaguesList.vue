<template>
  <div class="column q-pa-sm componentForm">
    <p class="componentForm__text">{{ title }}</p>
    <checkbox-component title="Российская футбольная Премьер-лига"></checkbox-component>
    <checkbox-component title="Российская Премьер-лига"></checkbox-component>
    <checkbox-component title="Первый дивизион ФНЛ"></checkbox-component>
    <checkbox-component title="Второй дивизион"></checkbox-component>
    <checkbox-component title="Муниципальные чемпионаты"></checkbox-component>
  </div>
</template>

<script lang="ts">

import CheckboxComponent from '../elements/Checkbox.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'LeaguesList',
  components: { CheckboxComponent },
  props: {
    title: {
      type: String,
      default: 'Лиги'
    },
  }
});
</script>
