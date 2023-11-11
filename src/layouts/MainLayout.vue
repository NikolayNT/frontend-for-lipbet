<template>
  <q-layout style="margin: 0 !important; padding: 0 !important">
    <header class="header">
      <h1 class="header__title" style="margin: 0; padding: 0;">LipBet</h1>
    </header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style lang="css">
.header {
  display: flex;
  background-image: url('../assets/headerFon.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
  height: 300px;
  justify-content: center;
  align-items: center;
}

.header__title {
  color: rgb(255, 253, 253);
  background: radial-gradient(rgb(8, 112, 181), rgba(8, 112, 181, 0.4));
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  height: 150px;
  width: 450px;
  border-radius: 70px;
}
</style>
