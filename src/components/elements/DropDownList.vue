<template>
  <div class="row">
    <p class="self-center q-pt-none q-ma-none q-mx-sm">{{ title }}</p>
    <q-select v-model="model" :options="options" label="Standard" />
  </div>
</template>

<script lang="ts">

import {
  defineComponent,
  ref
} from 'vue';

const listProps = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export default defineComponent({
  name: 'DropDownList',
  props: {
    title: {
      type: String,
      default: 'Игр'
    },
    list: {
      type: Array,
      default: listProps
    },
  },
  setup(props) {
    return {
      model: ref(null),
      options: props.list
    }
  }
});
</script>
