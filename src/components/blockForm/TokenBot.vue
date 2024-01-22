<template>
  <div class="column q-pa-sm componentForm">
    <p class="componentForm__text">Бот</p>
    <div class="blok">
      <p class="text">Токен из телеграмм:</p>
      <input type="text" class="input" v-model="text" style="width: 400px;" />
      <p class="text">{{ token }}</p>
    </div>
  </div>
</template>

<script lang="ts">

import {
  defineComponent, ref
} from 'vue';

import { useBotStore } from 'src/stores/bot';
import { storeToRefs } from 'pinia';

const botStore = useBotStore();
const { token } = storeToRefs(botStore);

export default defineComponent({
  name: 'TokenBot',
  setup() {
    return {
      token,
      text: ref(token)
    }
  }
});
</script>
