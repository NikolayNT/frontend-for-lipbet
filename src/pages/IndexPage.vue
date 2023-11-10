<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-md justify-evenly q-gutter-lg" style="width: 1000px;">
      <LeaguesList></LeaguesList>
      <BlokMain></BlokMain>
      <ComandType></ComandType>
      <OutcomeGames></OutcomeGames>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import LeaguesList from 'src/components/blockForm/LeaguesList.vue';
import BlokMain from 'components/blockForm/BlokMain.vue';
import ComandType from 'src/components/blockForm/ComandType.vue';
import OutcomeGames from 'src/components/blockForm/OutcomeGames.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { LeaguesList, BlokMain, ComandType, OutcomeGames },
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
