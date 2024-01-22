<template>
  <div class="column">
    <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="one" label="Дома"
      @update:model-value="func($event)" />
    <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="two" label="В гостях"
      @update:model-value="func($event)" />
    <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="three" label="Не важно"
      @update:model-value="func($event)" />
  </div>
</template>

<script>
import {
  defineComponent,
  ref
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
  },
  methods: {
    log(e) {
      console.log(e)
    }
  },
  setup() {
    return {
      shape: ref('one')
    }
  }
})
</script>
