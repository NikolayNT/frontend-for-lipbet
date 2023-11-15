<template>
  <div class="colomn q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="text-h4" style="width: 100%;">Пенальти</p>
    <div class="row">
      <DropDownList title="В первом тайме" :list="['-', 'Да', 'Нет']" class="col-6"></DropDownList>
      <DropDownList title="Забит" :list="['-', 'Да', 'Нет']" class="col-6"></DropDownList>
      <DropDownList title="Во втором тайме" :list="['-', 'Да', 'Нет']" class="col-6"></DropDownList>
      <DropDownList title="Забит" :list="['-', 'Да', 'Нет']" class="col-6"></DropDownList>
      <DropDownList title="В матче" :list="['-', 'Да', 'Нет']" class="col-6"></DropDownList>
      <DropDownList title="Забит" :list="['-', 'Да', 'Нет']" class="col-6"></DropDownList>
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
