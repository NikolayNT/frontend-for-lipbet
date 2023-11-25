<template>
  <div class="componentForm q-pa-sm">
    <p class="componentForm__text" style="width: 100%;">Пенальти</p>
    <div class="row">
      <DropDownList title="В первом тайме" :list="['-', 'Да', 'Нет']" class="col-3"></DropDownList>
      <DropDownList title="Забит" :list="['-', 'Да', 'Нет']" class="col-7"></DropDownList>
      <DropDownList title="Во втором тайме" :list="['-', 'Да', 'Нет']" class="col-3"></DropDownList>
      <DropDownList title="Забит" :list="['-', 'Да', 'Нет']" class="col-7"></DropDownList>
      <DropDownList title="В матче" :list="['-', 'Да', 'Нет']" class="col-3"></DropDownList>
      <DropDownList title="Забит" :list="['-', 'Да', 'Нет']" class="col-7"></DropDownList>
    </div>
  </div>
</template>

<script lang="ts">

import DropDownList from '../elements/DropDownList.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'PenaltyComponent',
  components: { DropDownList },
});
</script>
