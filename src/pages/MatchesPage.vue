<template>
  <q-page style="min-height: calc(100% - 300px);">
    <h2 class="page__title">{{ $t('leftMenuLive') }}</h2>
  </q-page>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent, } from 'vue';

import StatisticLive from 'src/api/StatisticLive';

export default defineComponent({
  name: 'MatchesPage',
  created() {
    this.getStat()
  },
  methods: {
    getStat() {
      StatisticLive.getLive()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
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
