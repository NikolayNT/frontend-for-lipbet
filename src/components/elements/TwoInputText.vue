<template>
  <div class="blok">
    <p class="text">{{ title }} от</p>
    <input placeholder="1.01" class="input" v-model="text" style="width: 50px;" :on-change="func(text, textTwo)" />
    <p class="text" style="margin-left: 10px;">до</p>
    <input placeholder="1.01" v-model="textTwo" style="width: 50px;" :on-change="func(text, textTwo)" />
    <p class="text" style="margin-left: 10px;">{{ textEnd }}</p>
  </div>
</template>

<script lang="ts">

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: 'OneInputComponent',
  props: {
    title: {
      type: String,
      default: ''
    },
    textEnd: {
      type: String,
      default: ''
    },
    func: {
      type: Function,
      default: function () {
        return 'херня';
      },
    }
  },
  setup() {
    return {
      text: ref(''),
      textTwo: ref('')
    }
  }
});
</script>

<style lang="scss">
.blok {
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
}

.text {
  margin: 0 10px 0 0;
  padding: 0;
}

.input {
  background: rgba($color: #ffffff, $alpha: .5);
  border: 1px solid gray;
}
</style>
