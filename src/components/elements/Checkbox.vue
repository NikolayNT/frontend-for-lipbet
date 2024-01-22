<template>
  <q-checkbox v-model="right" v-bind:label="title" @update:model-value="log($event)" />
</template>

<script lang="ts">

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: 'CheckboxComponent',
  props: {
    title: {
      type: String,
      default: ''
    },
    bool: {
      type: Boolean,
      default: false,
    },
    func: {
      type: Function,
      default: function () {
        return 'херня';
      },
    },
    id: {
      type: String,
    }
  },
  methods: {
    log(letBool: boolean) {
      /*console.log('ddd');
      console.log(this.bool);*/
      this.func(letBool, this.id);
      /*console.log(letBool);*/
    }
  },
  setup(bool,) {
    return {
      right: ref(bool.bool),
    }
  }
});
</script>
