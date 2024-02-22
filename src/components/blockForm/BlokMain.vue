<template>
  <div class="componentForm q-pa-sm" style="width: 100%; border: 2px solid black; border-radius: 30px">
    <p class="componentForm__text">Основные</p>
    <div class="row">
      <RadioButton :func="winLose" widthStr="33.33%"
        :list="[{ value: 'one', label: 'Выигрывает команда 1' }, { value: 'two', label: 'Ничья' }, { value: 'three', label: 'Выигрывает команда 2' }]">
      </RadioButton>

      <RadioButton :func="timeMatch" widthStr="33.33%"
        :list="[{ value: 'one', label: 'Первый тайм' }, { value: 'two', label: 'Перерыв' }, { value: 'three', label: 'Второй тайм' }]">
      </RadioButton>
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

import RadioButton from '../elements/RadioButton.vue';
import TwoInputText from '../elements/TwoInputText.vue';
import PopupAccountComponent from '../elements/PopupAccount.vue';

import {
  defineComponent,
} from 'vue';


export default defineComponent({
  name: 'BlokMain',
  components: { RadioButton, TwoInputText, PopupAccountComponent },
  methods: {
    /*togggle(e: boolean, idString: any) {
      botStore.main[idString] = e; //херня
      console.log(botStore.main[idString]);
    },*/

    minuteOfMatch(start: string, end: string) {
      botStore.main.minuteTo = end; //херня
      botStore.main.minuteFrom = start;
      console.log(botStore.main.minuteTo);
    },

    popupCount(e: boolean, idString: string) {
      if (e === true) {
        botStore.main.matchScore.push(idString);
      }
      else {
        const index = botStore.main.matchScore.findIndex(item => item === idString)
        botStore.main.matchScore.splice(index, 1)
      }
      console.log(botStore.main.matchScore);
    },

    popupCountTwo(e: boolean, idString: any) {
      if (e === true) {
        botStore.main.matchScoreOnBreak.push(idString);
      }
      else {
        const index = botStore.main.matchScoreOnBreak.findIndex(item => item === idString)
        botStore.main.matchScoreOnBreak.splice(index, 1)
      }
      console.log(botStore.main.matchScoreOnBreak);
    },

    winLose(strRes: string) {
      if (strRes === 'one') { //  [teemOne, teemTwo, teemDraw]
        botStore.main.who = 'teemOne'
      }
      else if (strRes === 'two') {
        botStore.main.who = 'teemDraw'
      }
      else {
        botStore.main.who = 'teemTwo'
      }
      console.log(strRes);
    },

    timeMatch(strRes: string) {
      if (strRes === 'one') {
        botStore.main.time = 'timeOne' // [timeOne , timeTwo, timeBreak]
      }
      else if (strRes === 'two') {
        botStore.main.time = 'timeBreak'
      }
      else {
        botStore.main.time = 'timeTwo'
      }
      console.log(strRes);
    }
  },
  setup() {
    return {
      main,
    }
  }
});
</script>
