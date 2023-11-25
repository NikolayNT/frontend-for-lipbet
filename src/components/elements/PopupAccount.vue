<template>
  <div class="blok">
    <q-btn rounded class="button-open" :label="text" @click="dialog = true" />
    <div class="pop-up column" :class="[dialog ? 'pop-up_open' : '']">
      <div>
        <div class="row" v-for="n in 6" :key="n">
          <div class="row" v-for="k in 6" :key="k">
            <Checkbox :title="(n - 1).toString() + ':' + (k - 1).toString()"></Checkbox>
          </div>
        </div>
      </div>

      <div class="button-blok">
        <q-btn class="button" label="Отменить" @click="dialog = false" />
        <q-btn class="button button-last" label="Сохранить" @click="dialog = false" />
      </div>
    </div>

  </div>
</template>

<script lang="ts">

import Checkbox from './Checkbox.vue';

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: 'PopupAccountComponent',
  components: { Checkbox },
  props: {
    text: {
      type: String,
      default: ''
    },
  },
  setup() {
    return {
      dialog: ref(false),
    }
  }
});
</script>

<style lang="scss">
.blok {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
}

.pop-up {
  position: absolute;
  z-index: -2;
  opacity: 0;
  top: -322px;
  left: 0;
  display: flex;
  width: 380px;
  height: 320px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  padding: 10px;
}

.pop-up_open {
  z-index: 1;
  opacity: 1;
  transition: 1s;
}

.text {
  margin: 0 10px 0 0;
  padding: 0;
}

.button-blok {
  display: flex;
  width: calc(100% - 20px);
  margin: 10px;
}

.button {
  height: 30px;
  width: 120px;
}

.button-last {
  margin-left: auto;
}

.button-open {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
