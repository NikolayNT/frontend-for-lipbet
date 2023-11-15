<template>
  <div class="row" style="width: 100%;">
    <p class="self-center q-pt-none q-ma-none q-mx-sm">{{ title }}</p>
    <q-select v-model="model" :options="options" label="Standard" />
    <p class="self-center q-pt-none q-ma-none text-no-wrap q-mx-sm ">{{ titleTwo }} от</p>
    <q-input type="number" filled v-model="text" style="max-width: 70px" class="col col-3" />
    <p class="self-center q-pt-none q-ma-none q-mx-sm">до</p>
    <q-input type="number" filled v-model="text" style="max-width: 70px" class="col col-7" />
    <p class="self-center q-pt-none q-ma-none q-mx-sm">{{ endText }}</p>
  </div>
</template>

<script lang="ts">

import {
  defineComponent,
  ref
} from 'vue';

const listProps = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export default defineComponent({
  name: 'DropDownListAndTwoInputText',
  props: {
    title: {
      type: String,
      default: 'Игр'
    },
    titleTwo: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: listProps
    },
    endText: {
      type: String,
      default: ''
    },
  },
  setup(props) {
    return {
      model: ref(null),
      options: props.list,
      text: ref('')
    }
  }
});
</script>
