<template>
  <div class="componentForm q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="componentForm__text">Основные</p>
    <div class="row">
      <checkbox-component title="Выигрывает команда 1" :bool="main.winOneTeem" :func="togggle" id='winOneTeem'
        class="col-4"></checkbox-component>
      <checkbox-component title="Ничья" class="col-4" :bool="main.draw" :func="togggle" id='draw'></checkbox-component>
      <checkbox-component title="Выигрывает команда 2" class="col-4" :bool="main.winTwoTeem" :func="togggle"
        id='winTwoTeem'></checkbox-component>
      <checkbox-component title="Первый тайм" class="col-4" :bool="main.firstPeriod" :func="togggle"
        id='firstPeriod'></checkbox-component>
      <checkbox-component title="Перерыв" class="col-4" :bool="main.break" :func="togggle"
        id='break'></checkbox-component>
      <checkbox-component title="Второй тайм" class="col-4" :bool="main.twoPeriod" :func="togggle"
        id='twoPeriod'></checkbox-component>
    </div>
    <div class="row">
      <PopupAccountComponent text="Выбрать счёт матча" :func="popupCount"></PopupAccountComponent>
      <PopupAccountComponent text="Выбрать счёт на перерыве" style="margin-left: auto;" :func="popupCountTwo">
      </PopupAccountComponent>
      <TwoInputText title="Минута матча" :func="minuteOfMatch"></TwoInputText>
    </div>
  </div>
</template>

<script lang="ts">
import { useBotStore } from 'src/stores/bot';
import { storeToRefs } from 'pinia';

const botStore = useBotStore();
const { main } = storeToRefs(botStore);


import CheckboxComponent from '../elements/Checkbox.vue';
import TwoInputText from '../elements/TwoInputText.vue';
import PopupAccountComponent from '../elements/PopupAccount.vue';

import {
  defineComponent,
} from 'vue';


export default defineComponent({
  name: 'BlokMain',
  components: { CheckboxComponent, TwoInputText, PopupAccountComponent },
  methods: {
    togggle(e: boolean, idString: any) {
      botStore.main[idString] = e; //херня
      console.log(botStore.main[idString]);
    },

    minuteOfMatch(start: string, end: string) {
      botStore.main.minuteTo = start; //херня
      botStore.main.minuteFrom = end;
      console.log(botStore.main.minuteTo);
    },

    popupCount(e: boolean, idString: any) {
      botStore.main.matchScore[idString] = e; //херня
      console.log(botStore.main.matchScore[idString]);
    },

    popupCountTwo(e: boolean, idString: any) {
      botStore.main.matchScoreOnBreak[idString] = e; //херня
      console.log(botStore.main.matchScoreOnBreak[idString]);
    },
  },
  setup() {
    return {
      main,
    }
  }
});
</script>
