<template>
  <div class="colomn q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="text-h4" style="width: 100%;">{{ titleGeneral }}</p>
    <div class="row">
      <BlockForFormStatisticsVue title="% Владения мячом" class="col-6"></BlockForFormStatisticsVue>
      <BlockForFormStatisticsVue title="Удары по воротам" class="col-6"></BlockForFormStatisticsVue>
      <BlockForFormStatisticsVue title="Удары в створ ворот" class="col-6"></BlockForFormStatisticsVue>
      <BlockForFormStatisticsBig title="Угловые удары" class="col-6"></BlockForFormStatisticsBig>
      <BlockForFormStatisticsVue title="Жёлтые карточки" class="col-6"></BlockForFormStatisticsVue>
      <BlockForFormStatisticsVue title="Красные карточки" class="col-6"></BlockForFormStatisticsVue>
      <BlockForFormStatisticsVue title="Ауты" class="col-6"></BlockForFormStatisticsVue>
      <BlockForFormStatisticsVue title="Фолы" class="col-6"></BlockForFormStatisticsVue>
      <BlockForFormStatisticsVue title="Атаки" class="col-6"></BlockForFormStatisticsVue>
      <BlockForFormStatisticsVue title="Опасные Атаки" class="col-6"></BlockForFormStatisticsVue>
    </div>
  </div>
</template>

<script lang="ts">

import BlockForFormStatisticsVue from './miniBlock/BlockForFormStatistics.vue';
import BlockForFormStatisticsBig from './miniBlock/BlockForFormStatisticsBig.vue';

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'StatisticsCommands',
  components: { BlockForFormStatisticsVue, BlockForFormStatisticsBig },
  props: {
    titleGeneral: {
      type: String,
      default: 'Форма команд'
    },
  }
});
</script>
