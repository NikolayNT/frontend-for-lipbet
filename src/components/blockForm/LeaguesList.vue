<template>
  <div class="column q-pa-sm component">
    <p class="component__text">{{ title }}</p>
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

<style lang="scss">
.component {
  width: 100%;
  border: 2px solid black;
  border-radius: 30px;
  background-color: $TraTraBlue;
}

.component__text {
  margin: 0 0 0 10px;
  padding: 0;
  font-size: 25px;
}
</style>
