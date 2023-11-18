<template>
  <q-page style="min-height: calc(100% - 300px);">
    <h2 class="page__title">{{ $t('leftMenuForecast') }}</h2>
  </q-page>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'ForecastsPage',
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    return {
      locale,
    }
  }
});
</script>

<style lang="css">
.page__title {
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
