<template>
  <q-page style="min-height: calc(100% - 300px);">
    <h2 class="page__title">Главная</h2>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'MainPage',
});
</script>

<style lang="css">
.page__title {
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
