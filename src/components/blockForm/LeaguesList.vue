<template>
  <div class="column q-pa-sm componentForm" style="background-color: gray;">
    <p class="componentForm__text">{{ title }}</p>
    <div class="row" v-for="item in list" :key="item">
      <checkbox-component :title="item"></checkbox-component>
    </div>
  </div>
</template>

<script lang="ts">

import { useBotStore } from 'src/stores/bot';
import { storeToRefs } from 'pinia';

const botStore = useBotStore();
const { leagues } = storeToRefs(botStore);

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
  },
  setup() {
    let list = [];
    list = leagues.value.split(';');
    console.log(list)
    return {
      list,
    }
  }
});
</script>
