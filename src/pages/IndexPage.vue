<template>
  <q-page class="row items-center justify-evenly">
    <BlokMain></BlokMain>
    <RadioBatton></RadioBatton>
  </q-page>
</template>

<script lang="ts">
/*<example-component title="Example component" active :todos="todos" :meta="meta"></example-component> */
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import RadioBatton from 'src/components/elements/RadioBatton.vue';
import BlokMain from 'components/blockForm/BlokMain.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { /*ExampleComponent, */BlokMain, RadioBatton },
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
