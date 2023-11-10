<template>
  <div class="column q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="text-h4">{{ title }}</p>
    <checkbox-component title="Лига 1"></checkbox-component>
    <checkbox-component title="Лига 2"></checkbox-component>
    <checkbox-component title="Лига 3"></checkbox-component>
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
