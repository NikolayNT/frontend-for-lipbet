<template>
  <q-page class="row items-center justify-evenly main" style="margin: 0 !important; padding: 0 !important">
    <div class="q-pa-md justify-evenly q-gutter-lg" style="width: 1000px;">
      <LeaguesList></LeaguesList>
      <BlokMain></BlokMain>
      <ComandType></ComandType>
      <OutcomeGames></OutcomeGames>
      <GoalsComponent></GoalsComponent>
      <OddsOutcome titleGeneral="Коэффицикнты на исход" titleOne="Прематч" titleTwo="Лайв"></OddsOutcome>
      <TotalPrematchAndLive titleGeneral="Тотал прематч"></TotalPrematchAndLive>
      <TotalPrematchAndLive titleGeneral="Тотал лайв"></TotalPrematchAndLive>
      <FormCommands></FormCommands>
      <FaceToFaceGames></FaceToFaceGames>
      <FaceToFaceGoals></FaceToFaceGoals>
      <Penalty></Penalty>
      <Statistics title-general="Статистика"></Statistics>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import LeaguesList from 'src/components/blockForm/LeaguesList.vue';
import BlokMain from 'components/blockForm/BlokMain.vue';
import ComandType from 'src/components/blockForm/ComandType.vue';
import OutcomeGames from 'src/components/blockForm/OutcomeGames.vue';
import GoalsComponent from 'src/components/blockForm/Goals.vue';
import OddsOutcome from 'src/components/blockForm/OddsOutcome.vue';
import TotalPrematchAndLive from 'src/components/blockForm/TotalPrematchAndLive.vue';
import FormCommands from 'src/components/blockForm/FormCommands.vue';
import FaceToFaceGames from 'src/components/blockForm/FaceToFaceGames.vue';
import FaceToFaceGoals from 'src/components/blockForm/FaceToFaceGoals.vue';
import Penalty from 'src/components/blockForm/Penalty.vue';
import Statistics from 'src/components/blockForm/Statistics.vue';

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    LeaguesList,
    BlokMain,
    ComandType,
    OutcomeGames,
    GoalsComponent,
    OddsOutcome,
    TotalPrematchAndLive,
    FormCommands,
    FaceToFaceGames,
    FaceToFaceGoals,
    Penalty,
    Statistics
  },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
});
</script>

<style lang="css">
.main {
  background-color: rgba(145, 152, 154, 0.11);
}
</style>
