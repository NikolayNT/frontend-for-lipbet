<template>
  <div class="row" v-for="k in list" :key="k.value" :style="{ width: widthStr }">
    <!--<q-radio :v-model="selectedOption" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="k.value"
      :label="k.label" @update:model-value="func($event), log($event)" :checked="isOption1Selected" />-->
    <input class="input-chek" type="radio" :id="k.value" :value="k.value" v-model="selectedOption"
      @update:model-value="func($event), log($event)">
    <label class="text-chek" :for="k.value">{{ k.label }}</label>
    <!--<q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="one" label="Дома"
      @update:model-value="func($event)" />
    <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="two" label="В гостях"
      @update:model-value="func($event)" />
    <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="three" label="Не важно"
      @update:model-value="func($event)" />-->
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
    activeChek: {
      type: String,
      default: 'two'
    },
    widthStr: {
      type: String,
      default: '100%'
    },
  },
  data() {
    return {
      selectedOption: this.shouldSelectOption1() ? 'two' : 'one',

    }
  },
  methods: {
    log(e) {
      console.log(this.list[0].value)
    },
    shouldSelectOption1() {
      console.log('вызван метод')
      if (this.activeChek === 'one')
        return true;
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
