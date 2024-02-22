<template>
  <div class="row" v-for="k in list" :key="k.value + type" :style="{ width: widthStr }">
    <input class="input-chek" type="radio" :id="k.value + type" :value="k.value" v-model="selectedOption"
      @update:model-value="func($event), log($event)" :checked="state[type].place === k.value">
    <label class="text-chek" :for="k.value + type">{{ k.label }}</label>
  </div>
</template>

<script>
import {
  defineComponent,
} from 'vue'

export default defineComponent({
  name: 'RadioButtonComponent',
  props: {
    func: {
      type: Function,
      default: function () {
        return 'херня';
      },
    },
    list: {
      type: Object,
    },
    widthStr: {
      type: String,
      default: '100%'
    },
    state: {
      type: Object,
      default: () => {
        return {

        }

      }
    },
    type: {
      type: String,
      default: 'fav'
    },
  },
  methods: {
    log(e) {
      console.log(this.list[0].value)
    }
  },
})
</script>

<style lang="scss">
.input-chek {
  margin: 0 0 0 10px;
  padding: 0;
  width: max-content;
}

.text-chek {
  margin: 0 0 0 10px;
  padding: 0;
  width: max-content;
}
</style>
