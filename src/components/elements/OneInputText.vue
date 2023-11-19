<template>
  <div class="blok">
    <p class="text">{{ title }}</p>
    <input type="number" class="input" v-model="text" style="width: 50px;" />
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
  },
  setup() {
    return {
      text: ref('')
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
}
</style>
