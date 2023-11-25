<template>
  <div class="componentForm colomn q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="componentForm__text" style="width: 100%;">{{ titleGeneral }}</p>
    <BlockForFormCommands title="Команда 1"></BlockForFormCommands>
    <BlockForFormCommands title="Команда 2"></BlockForFormCommands>
    <BlockForFormCommands title="Фаворит"></BlockForFormCommands>
    <BlockForFormCommands title="Аутсайдер"></BlockForFormCommands>
    <BlockForFormCommands title="Любая из команд"></BlockForFormCommands>
  </div>
</template>

<script lang="ts">

import BlockForFormCommands from './miniBlock/BlockForFormCommands.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'FormCommands',
  components: { BlockForFormCommands },
  props: {
    titleGeneral: {
      type: String,
      default: 'Форма команд'
    },
  }
});
</script>
