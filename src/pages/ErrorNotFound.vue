<template>
  <div class=" text-black text-center q-pa-md flex flex-center"
    style="margin: 0 !important; padding: 0 !important; height: 100%;">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Ой. Здесь ничего нет...
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="black" unelevated to="/" label="На главную" no-caps />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound'
});
</script>
