<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="line" label="Дома" />
      <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="rectangle"
        label="В гостях" />
      <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="ellipse"
        label="Не важно" />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref
} from 'vue'

export default defineComponent({
  name: 'RadioButtonComponent',
  setup() {
    return {
      shape: ref('line')
    }
  }
})
</script>
